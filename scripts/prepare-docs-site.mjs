#!/usr/bin/env node
/**
 * Stage the canonical repository developer docs as Starlight content.
 *
 * User Guide and Handbook pages are authored directly in src/content/docs/.
 * Developer Docs remain canonical in docs/ so coding agents and repository
 * readers keep their existing source-of-truth paths.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const OUT = path.join(ROOT, 'src', 'content', 'docs', 'developers');
const BASE_PATH = '/RedTeam/';

const manifest = [
  {
    source: 'README.md',
    output: 'index.md',
    title: 'Developer documentation',
    description: 'Product context, requirements, architecture, testing, and decision records for RedTeam contributors.',
    order: 0,
  },
  {
    source: 'PRODUCT.md',
    output: 'product.md',
    title: 'Product',
    description: 'What RedTeam is, who it serves, and why applied critical thinking belongs in AI-assisted work.',
    order: 1,
  },
  {
    source: '1-EXPERIENCES.md',
    output: 'experiences.md',
    title: 'Experiences',
    description: 'The intended user and contributor experiences that guide RedTeam product decisions.',
    order: 2,
  },
  {
    source: '2-REQUIREMENTS.md',
    output: 'requirements.md',
    title: 'Requirements',
    description: 'The functional and quality requirements that RedTeam implementations must satisfy.',
    order: 3,
  },
  {
    source: 'DESIGN.md',
    output: 'design.md',
    title: 'Design',
    description: 'Product, documentation, interaction, and accessibility guidance for a consistent RedTeam experience.',
    order: 4,
  },
  {
    source: '3-ARCHITECTURE.md',
    output: 'architecture.md',
    title: 'Architecture',
    description: 'How RedTeam source skills, provider bundles, project context, reviews, and the installer fit together.',
    order: 5,
  },
  {
    source: '4-TESTING.md',
    output: 'testing.md',
    title: 'Testing',
    description: 'How RedTeam verifies CLI installation, generated providers, documentation, and user-visible behavior.',
    order: 6,
  },
  {
    source: 'SOURCE.md',
    output: 'source.md',
    title: 'Source and lineage',
    description: 'The lineage, attribution, terminology, and publication policy for The Red Team Handbook, Version 10.',
    order: 7,
  },
  {
    source: '0-PRODUCT/README.md',
    output: 'product-detail/index.md',
    title: 'Product detail',
    description: 'Supporting product, market, positioning, and publication material for RedTeam.',
    order: 8,
  },
  {
    source: '1-JOURNEYS/README.md',
    output: 'journeys/index.md',
    title: 'Journeys',
    description: 'Supporting personas, journeys, and experience detail for RedTeam users and contributors.',
    order: 9,
  },
  {
    source: '3-ENGINEERING/README.md',
    output: 'engineering/index.md',
    title: 'Engineering',
    description: 'Supporting implementation, testing, release, and operational guidance for RedTeam.',
    order: 10,
  },
  {
    source: '3-ENGINEERING/ADRs/README.md',
    output: 'engineering/adrs/index.md',
    title: 'Architecture decisions',
    description: 'Architecture decision records that explain significant technical choices in RedTeam.',
    order: 11,
  },
];

function markdownFiles(directory, relative = '') {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const childRelative = path.posix.join(relative, entry.name);
    const childPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(childPath, childRelative);
    return entry.isFile() && entry.name.endsWith('.md') ? [childRelative] : [];
  });
}

function publicUrl(output) {
  if (output === 'index.md') return `${BASE_PATH}developers/`;
  if (output.endsWith('/index.md')) {
    return `${BASE_PATH}developers/${output.slice(0, -'index.md'.length)}`;
  }
  return `${BASE_PATH}developers/${output.slice(0, -'.md'.length)}/`;
}

const bySource = new Map(manifest.map((entry) => [entry.source, entry]));
const sourceFiles = markdownFiles(DOCS).sort();
const manifestFiles = [...bySource.keys()].sort();

const missingFromManifest = sourceFiles.filter((file) => !bySource.has(file));
const missingFromDisk = manifestFiles.filter((file) => !sourceFiles.includes(file));
if (missingFromManifest.length || missingFromDisk.length) {
  const details = [
    ...missingFromManifest.map((file) => `Unmapped developer doc: docs/${file}`),
    ...missingFromDisk.map((file) => `Missing developer doc: docs/${file}`),
  ];
  throw new Error(details.join('\n'));
}

const outputs = manifest.map((entry) => entry.output);
if (new Set(outputs).size !== outputs.length) throw new Error('Developer docs manifest contains duplicate output paths.');

function resolveLink(source, rawTarget) {
  if (!rawTarget || /^(?:[a-z]+:|#|\/\/)/i.test(rawTarget) || rawTarget.startsWith('/')) return rawTarget;
  const hashIndex = rawTarget.indexOf('#');
  const rawPath = hashIndex >= 0 ? rawTarget.slice(0, hashIndex) : rawTarget;
  const hash = hashIndex >= 0 ? rawTarget.slice(hashIndex) : '';
  if (!rawPath) return rawTarget;

  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(source), rawPath));
  const candidates = [resolved];
  if (rawPath.endsWith('/')) candidates.unshift(path.posix.join(resolved, 'README.md'));
  if (!path.posix.extname(resolved)) candidates.push(`${resolved}.md`, path.posix.join(resolved, 'README.md'));
  const target = candidates.map((candidate) => bySource.get(candidate)).find(Boolean);
  if (!target) throw new Error(`Unmapped local link in docs/${source}: ${rawTarget}`);
  return `${publicUrl(target.output)}${hash}`;
}

if (fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true, force: true });

for (const entry of manifest) {
  const sourcePath = path.join(DOCS, entry.source);
  const outputPath = path.join(OUT, entry.output);
  let body = fs.readFileSync(sourcePath, 'utf8').replace(/\r\n/g, '\n');
  const h1 = body.match(/^#\s+(.+)\s*$/m);
  if (!h1) throw new Error(`Missing H1 in docs/${entry.source}`);
  body = body.slice(0, h1.index) + body.slice(h1.index + h1[0].length);
  body = body.replace(/^\s+/, '');
  body = body.replace(/(?<!!)\[([^\]]+)\]\(([^)\s]+)([^)]*)\)/g, (_match, label, target, suffix) => {
    return `[${label}](${resolveLink(entry.source, target)}${suffix})`;
  });

  const frontmatter = `---\ntitle: ${JSON.stringify(entry.title)}\ndescription: ${JSON.stringify(entry.description)}\nsidebar:\n  order: ${entry.order}\n---\n\n`;
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, frontmatter + body.trimEnd() + '\n');
}

console.log(`Staged ${manifest.length} developer docs in src/content/docs/developers/.`);
