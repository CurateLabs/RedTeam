#!/usr/bin/env node
/**
 * Build: copy skill/ source into provider-specific directories.
 * Skills-only — no compilation, just path substitution and copy.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SKILL_SRC = path.join(ROOT, 'skill');

const PROVIDERS = {
  cursor: '.cursor/skills/redteam',
  claude: '.claude/skills/redteam',
  agents: '.agents/skills/redteam',
  github: '.github/skills/redteam',
  gemini: '.gemini/skills/redteam',
  plugin: 'plugin/skills/redteam',
};

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.name === 'SKILL.md') {
      let content = fs.readFileSync(srcPath, 'utf8');
      content = content.replaceAll('{{scripts_path}}', 'scripts');
      fs.writeFileSync(destPath, content);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function buildProvider(name, relDest) {
  const dest = path.join(ROOT, relDest);
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  copyDir(SKILL_SRC, dest);
  console.log(`✓ ${name} → ${relDest}`);
}

function buildDist() {
  const distRoot = path.join(ROOT, 'dist');
  if (fs.existsSync(distRoot)) {
    fs.rmSync(distRoot, { recursive: true, force: true });
  }

  for (const [name, relDest] of Object.entries(PROVIDERS)) {
    const dest = path.join(distRoot, name, relDest);
    copyDir(SKILL_SRC, dest);
    // Fix SKILL.md paths in dist
    const skillMd = path.join(dest, 'SKILL.md');
    if (fs.existsSync(skillMd)) {
      let content = fs.readFileSync(skillMd, 'utf8');
      content = content.replaceAll('{{scripts_path}}', 'scripts');
      fs.writeFileSync(skillMd, content);
    }
    console.log(`✓ dist/${name}`);
  }

  // ChatGPT knowledge bundle
  const chatgptKnowledge = path.join(distRoot, 'chatgpt', 'knowledge');
  fs.mkdirSync(chatgptKnowledge, { recursive: true });
  fs.copyFileSync(
    path.join(ROOT, 'chatgpt', 'INSTRUCTIONS.md'),
    path.join(distRoot, 'chatgpt', 'INSTRUCTIONS.md'),
  );
  fs.copyFileSync(
    path.join(SKILL_SRC, 'reference', 'ttp-catalog.md'),
    path.join(chatgptKnowledge, 'ttp-catalog.md'),
  );
  fs.copyFileSync(
    path.join(SKILL_SRC, 'reference', 'principles.md'),
    path.join(chatgptKnowledge, 'principles.md'),
  );
  console.log('✓ dist/chatgpt');
}

function main() {
  const target = process.argv[2] || 'all';

  if (target === 'dist') {
    buildDist();
    return;
  }

  if (target === 'all' || target === 'providers') {
    for (const [name, relDest] of Object.entries(PROVIDERS)) {
      buildProvider(name, relDest);
    }
  }

  if (target === 'all' || target === 'dist') {
    buildDist();
  }

  console.log('\nDone.');
}

main();
