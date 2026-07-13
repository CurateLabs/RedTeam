#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const project = fs.mkdtempSync(path.join(os.tmpdir(), 'redteam-cli-install-'));

try {
  execFileSync(
    process.execPath,
    [path.join(ROOT, 'cli/bin/cli.js'), 'install', '--providers=agents', '--scope=project'],
    { cwd: project, stdio: 'pipe' },
  );

  const expected = [
    '.agents/skills/redteam/SKILL.md',
    '.agents/skills/redteam/reference/ttp-catalog.md',
    '.agents/skills/redteam/scripts/context.mjs',
    '.redteam/config.json',
    '.redteam/CONTEXT.template.md',
  ];

  for (const relativePath of expected) {
    if (!fs.existsSync(path.join(project, relativePath))) {
      throw new Error(`Installer did not create ${relativePath}`);
    }
  }

  console.log('CLI installer smoke test passed.');
} finally {
  fs.rmSync(project, { recursive: true, force: true });
}
