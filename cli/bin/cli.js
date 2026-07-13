#!/usr/bin/env node
/**
 * RedTeam installer — copies skill into detected harness directories.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(__dirname, '..');

const ALL_PROVIDERS = ['cursor', 'claude', 'agents', 'github', 'gemini'];

function parseArgs(argv) {
  const opts = { providers: null, scope: 'project', help: false };
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') opts.help = true;
    else if (arg.startsWith('--providers=')) opts.providers = arg.split('=')[1].split(',');
    else if (arg.startsWith('--scope=')) opts.scope = arg.split('=')[1];
    else if (arg === 'install') opts.command = 'install';
    else if (arg === 'update') opts.command = 'update';
  }
  return opts;
}

function detectProviders(cwd) {
  const detected = [];
  if (fs.existsSync(path.join(cwd, '.cursor'))) detected.push('cursor');
  if (fs.existsSync(path.join(cwd, '.claude'))) detected.push('claude');
  if (fs.existsSync(path.join(cwd, '.agents'))) detected.push('agents');
  if (fs.existsSync(path.join(cwd, '.github'))) detected.push('github');
  if (fs.existsSync(path.join(cwd, '.gemini'))) detected.push('gemini');
  if (detected.length === 0) detected.push('cursor', 'claude', 'agents');
  return detected;
}

function getDest(provider, scope) {
  const home = process.env.HOME || process.env.USERPROFILE || '';
  const map = {
    cursor: scope === 'global' ? path.join(home, '.cursor/skills/redteam') : '.cursor/skills/redteam',
    claude: scope === 'global' ? path.join(home, '.claude/skills/redteam') : '.claude/skills/redteam',
    agents: scope === 'global' ? path.join(home, '.agents/skills/redteam') : '.agents/skills/redteam',
    github: '.github/skills/redteam',
    gemini: scope === 'global' ? path.join(home, '.gemini/skills/redteam') : '.gemini/skills/redteam',
  };
  return map[provider];
}

function install(cwd, providers, scope) {
  execSync(`node "${path.join(PACKAGE_ROOT, 'scripts/build.mjs')}" providers`, {
    cwd: PACKAGE_ROOT,
    stdio: 'inherit',
  });

  for (const provider of providers) {
    const src = path.join(PACKAGE_ROOT, getDest(provider, 'project'));
    const dest = path.isAbsolute(getDest(provider, scope))
      ? getDest(provider, scope)
      : path.join(cwd, getDest(provider, scope));

    if (!fs.existsSync(src)) {
      console.warn(`⚠ Source not found for ${provider}: ${src}`);
      continue;
    }

    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
    fs.cpSync(src, dest, { recursive: true });
    console.log(`✓ Installed redteam → ${dest}`);
  }

  // Ensure .redteam scaffold in project
  const redteamDir = path.join(cwd, '.redteam');
  if (!fs.existsSync(redteamDir)) {
    const templateConfig = path.join(PACKAGE_ROOT, '.redteam/config.json');
    const templateCtx = path.join(PACKAGE_ROOT, '.redteam/CONTEXT.template.md');
    fs.mkdirSync(path.join(redteamDir, 'reviews'), { recursive: true });
    fs.mkdirSync(path.join(redteamDir, 'sessions'), { recursive: true });
    if (fs.existsSync(templateConfig)) fs.copyFileSync(templateConfig, path.join(redteamDir, 'config.json'));
    console.log('✓ Created .redteam/ scaffold');
  }

  console.log('\nReload your AI harness, then run `/redteam init` or `/redteam challenge <your plan>`.');
}

function printHelp() {
  console.log(`
redteam — Applied critical thinking skills for AI agents

Usage:
  npx redteam install [--providers=cursor,claude,agents] [--scope=project|global]
  npx redteam update   (alias for install)

Options:
  --providers   Comma-separated: cursor, claude, agents, github, gemini
  --scope       project (default) or global

Claude Code plugin:
  /plugin marketplace add <your-org>/redteam

ChatGPT:
  See chatgpt/INSTRUCTIONS.md for Custom GPT setup
`);
}

const opts = parseArgs(process.argv);
if (opts.help || !opts.command) {
  printHelp();
  process.exit(0);
}

const cwd = process.cwd();
const providers = opts.providers || detectProviders(cwd);
install(cwd, providers, opts.scope);
