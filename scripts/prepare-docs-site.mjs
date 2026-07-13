#!/usr/bin/env node
/**
 * Sync developer docs into content/developers/ for the docmd site build.
 * Handbook and user guide live under content/ separately — not in docs/.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const OUT = path.join(ROOT, 'content', 'developers');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (!fs.existsSync(DOCS)) {
  console.error('docs/ not found');
  process.exit(1);
}

if (fs.existsSync(OUT)) {
  fs.rmSync(OUT, { recursive: true, force: true });
}

copyDir(DOCS, OUT);
console.log(`Synced docs/ → content/developers/`);
