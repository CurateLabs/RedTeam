#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const ORIGIN = 'https://curatelabs.github.io';
const BASE_PATH = '/RedTeam/';
const SITE_URL = `${ORIGIN}${BASE_PATH}`;

function files(directory, predicate) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return files(entryPath, predicate);
    return entry.isFile() && predicate(entryPath) ? [entryPath] : [];
  });
}

function publicUrl(filePath) {
  const relative = path.relative(DIST, filePath).split(path.sep).join('/');
  if (relative === 'index.html') return SITE_URL;
  if (relative.endsWith('/index.html')) return new URL(relative.slice(0, -'index.html'.length), SITE_URL).href;
  return new URL(relative, SITE_URL).href;
}

function targetFile(url) {
  let relative = decodeURIComponent(url.pathname.slice(BASE_PATH.length));
  if (relative === '404/') return path.join(DIST, '404.html');
  if (!relative || relative.endsWith('/')) relative += 'index.html';
  return path.join(DIST, relative);
}

function hasAnchor(filePath, hash) {
  if (!hash || !filePath.endsWith('.html')) return true;
  const html = fs.readFileSync(filePath, 'utf8');
  const decoded = decodeURIComponent(hash.slice(1));
  const escaped = decoded.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return !decoded || new RegExp(`\\bid=["']${escaped}["']`).test(html);
}

if (!fs.existsSync(DIST)) throw new Error('dist/ not found; run the Starlight build first.');

const htmlFiles = files(DIST, (file) => file.endsWith('.html'));
const sourcePages = files(path.join(ROOT, 'src', 'content', 'docs'), (file) => file.endsWith('.md'));
const expectedHtmlPages = sourcePages.length + 1; // Starlight's native 404 page.
const failures = [];
let checkedLinks = 0;

if (htmlFiles.length !== expectedHtmlPages) {
  failures.push(`Expected ${expectedHtmlPages} HTML pages, found ${htmlFiles.length}.`);
}

for (const filePath of htmlFiles) {
  const html = fs.readFileSync(filePath, 'utf8');
  const pageUrl = publicUrl(filePath);
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) failures.push(`${pageUrl} contains ${h1Count} H1 elements; expected exactly one.`);

  const attributePattern = /\b(?:href|src)=["']([^"']+)["']/g;
  for (const match of html.matchAll(attributePattern)) {
    const raw = match[1];
    if (!raw || /^(?:mailto:|tel:|javascript:|data:)/i.test(raw)) continue;
    const url = new URL(raw, pageUrl);
    if (url.origin !== ORIGIN) continue;
    if (/\.md(?:$|[?#])/i.test(raw)) failures.push(`${pageUrl} emits a Markdown source link: ${raw}`);
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
    if (!hasAnchor(destination, url.hash)) {
      failures.push(`${pageUrl} resolves ${raw} to missing anchor ${url.hash}`);
    }
  }
}

for (const required of ['pagefind/pagefind.js', 'pagefind/pagefind-ui.js', 'sitemap-index.xml']) {
  if (!fs.existsSync(path.join(DIST, required))) failures.push(`Missing generated ${required}.`);
}

if (failures.length) {
  console.error(`Generated Starlight site check failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Generated Starlight site check passed (${htmlFiles.length} pages, ${checkedLinks} local links and assets).`,
);
