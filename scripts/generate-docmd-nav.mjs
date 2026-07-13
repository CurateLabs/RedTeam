#!/usr/bin/env node
/**
 * Generate content/navigation.json — User Guide, Handbook, Developers (last).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildAutoNav } from '@docmd/core/dist/utils/auto-router.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = path.join(ROOT, 'content');

function section(title, dir, basePath) {
  const abs = path.join(CONTENT, dir);
  if (!fs.existsSync(abs)) return null;
  return {
    title,
    path: '#',
    collapsible: true,
    children: buildAutoNav(abs, basePath),
  };
}

const navigation = [
  { title: 'RedTeam', path: '/' },
  section('User Guide', 'guide', '/guide/'),
  section('Handbook', 'handbook', '/handbook/'),
  section('Developers', 'developers', '/developers/'),
].filter(Boolean);

const out = path.join(CONTENT, 'navigation.json');
fs.writeFileSync(out, `${JSON.stringify(navigation, null, 2)}\n`);
console.log(`Wrote ${path.relative(ROOT, out)}`);
