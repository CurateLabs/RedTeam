#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = path.join(ROOT, 'site');
const BASE_PATH = '/RedTeam/';

function htmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
  });
}

let updated = 0;
for (const filePath of htmlFiles(SITE)) {
  const html = fs.readFileSync(filePath, 'utf8');
  const fixed = html
    .replace(/\s*<base href="[^"]*">\s*/g, '\n')
    .replace(/\b(href|src)="\/(?!\/|RedTeam(?:\/|"))([^"]*)"/g, `$1="${BASE_PATH}$2"`)
    .replace(/\bhref="\/"/g, `href="${BASE_PATH}"`);
  if (fixed !== html) {
    fs.writeFileSync(filePath, fixed);
    updated += 1;
  }
}

if (updated === 0) {
  throw new Error('No DocMD base tags were found; output normalization did not run.');
}

console.log(`Removed DocMD base tags from ${updated} generated pages.`);
