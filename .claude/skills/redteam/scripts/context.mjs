/**
 * Context loader for RedTeam skill.
 * Prints CONTEXT.md as a markdown block, or NO_CONTEXT_MD when missing.
 *
 * Path resolution (first match wins):
 * 1. Project root CONTEXT.md
 * 2. .redteam/CONTEXT.md
 * 3. .agents/context/ or docs/
 * 4. $REDTEAM_CONTEXT_DIR (override)
 */
import fs from 'node:fs';
import path from 'node:path';

const CONTEXT_NAMES = ['CONTEXT.md', 'Context.md', 'context.md'];
const FALLBACK_DIRS = ['.redteam', '.agents/context', 'docs'];

function firstExisting(dir, names) {
  for (const name of names) {
    const p = path.join(dir, name);
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  }
  return null;
}

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8').trim();
  } catch {
    return null;
  }
}

function resolveContextPath(cwd = process.cwd()) {
  const absCwd = path.resolve(cwd);

  let contextPath = firstExisting(absCwd, CONTEXT_NAMES);
  if (contextPath) return { contextPath, contextDir: absCwd };

  for (const dir of FALLBACK_DIRS) {
    const base = path.join(absCwd, dir);
    if (!fs.existsSync(base)) continue;
    contextPath = firstExisting(base, CONTEXT_NAMES);
    if (contextPath) return { contextPath, contextDir: path.dirname(contextPath) };
  }

  const envDir = process.env.REDTEAM_CONTEXT_DIR;
  if (envDir) {
    const resolved = path.isAbsolute(envDir) ? envDir : path.join(absCwd, envDir);
    contextPath = firstExisting(resolved, CONTEXT_NAMES);
    if (contextPath) return { contextPath, contextDir: path.dirname(contextPath) };
  }

  return { contextPath: null, contextDir: absCwd };
}

function hasRedteamDir(cwd) {
  return fs.existsSync(path.join(path.resolve(cwd), '.redteam'));
}

function parseArgs(argv) {
  const args = { target: null };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--target' && argv[i + 1]) {
      args.target = argv[++i];
    }
  }
  return args;
}

function main() {
  const cwd = process.cwd();
  const { target } = parseArgs(process.argv);
  const { contextPath, contextDir } = resolveContextPath(cwd);
  const context = contextPath ? safeRead(contextPath) : null;
  const redteamDir = hasRedteamDir(cwd);

  if (!context) {
    console.log('NO_CONTEXT_MD: No CONTEXT.md found.');
    console.log('');
    console.log('Searched: project root, .redteam/, .agents/context/, docs/');
    console.log('');
    console.log('For a new decision review, run `/redteam init`.');
    console.log('For a one-off review of material you provide in chat, proceed without init.');
    if (target) console.log(`\nTarget hint: ${target}`);
    process.exit(0);
  }

  const rel = path.relative(path.resolve(cwd), contextPath);
  console.log(`<!-- REDTEAM_CONTEXT: ${rel} -->`);
  console.log('');
  console.log(context);
  console.log('');

  if (redteamDir) {
    const reviewsDir = path.join(cwd, '.redteam', 'reviews');
    if (fs.existsSync(reviewsDir)) {
      const reviews = fs.readdirSync(reviewsDir).filter((f) => f.endsWith('.md'));
      if (reviews.length > 0) {
        console.log('<!-- REDTEAM_PRIOR_REVIEWS:');
        for (const r of reviews.slice(-5)) {
          console.log(`  - .redteam/reviews/${r}`);
        }
        console.log('-->');
        console.log('');
      }
    }
  }

  if (target) {
    console.log(`<!-- REDTEAM_TARGET: ${target} -->`);
    console.log('');
  }

  console.log(`<!-- REDTEAM_CONTEXT_DIR: ${contextDir} -->`);
}

main();
