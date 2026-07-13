#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = path.join(ROOT, 'site');
const ORIGIN = 'https://curatelabs.github.io';
const BASE_PATH = '/RedTeam/';
const SITE_URL = `${ORIGIN}${BASE_PATH}`;

function htmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
  });
}

function publicUrl(filePath) {
  const relative = path.relative(SITE, filePath).split(path.sep).join('/');
  if (relative === 'index.html') return SITE_URL;
  if (relative.endsWith('/index.html')) return new URL(relative.slice(0, -'index.html'.length), SITE_URL).href;
  return new URL(relative, SITE_URL).href;
}

function targetFile(url) {
  let relative = decodeURIComponent(url.pathname.slice(BASE_PATH.length));
  if (!relative || relative.endsWith('/')) relative += 'index.html';
  return path.join(SITE, relative);
}

const failures = [];
let checkedLinks = 0;

for (const filePath of htmlFiles(SITE)) {
  const html = fs.readFileSync(filePath, 'utf8');
  const pageUrl = publicUrl(filePath);

  if (/<base\s/i.test(html)) failures.push(`${pageUrl} still contains a <base> tag`);
  if (/data-spa-enabled="true"/.test(html)) {
    failures.push(`${pageUrl} still enables DocMD SPA navigation`);
  }

  const attributePattern = /\b(?:href|src)="([^"]+)"/g;
  for (const match of html.matchAll(attributePattern)) {
    const raw = match[1];
    if (!raw || /^(?:mailto:|tel:|javascript:|data:)/i.test(raw)) continue;

    const url = new URL(raw, pageUrl);
    if (url.origin !== ORIGIN) continue;

    checkedLinks += 1;
    if (!url.pathname.startsWith(BASE_PATH)) {
      failures.push(`${pageUrl} resolves ${raw} outside ${BASE_PATH}: ${url.href}`);
      continue;
    }

    const destination = targetFile(url);
    if (!fs.existsSync(destination)) {
      failures.push(`${pageUrl} resolves ${raw} to missing ${url.pathname}`);
      continue;
    }

    if (url.hash && destination.endsWith('.html')) {
      const destinationHtml = fs.readFileSync(destination, 'utf8');
      const id = decodeURIComponent(url.hash.slice(1)).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (id && !new RegExp(`\\bid=["']${id}["']`).test(destinationHtml)) {
        failures.push(`${pageUrl} resolves ${raw} to missing anchor ${url.hash}`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error(`Generated site link check failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Generated site link check passed (${checkedLinks} local links and assets).`);
