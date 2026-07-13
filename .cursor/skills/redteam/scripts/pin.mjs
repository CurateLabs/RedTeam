/**
 * Pin / unpin shortcuts for RedTeam commands across harness directories.
 */
import fs from 'node:fs';
import path from 'node:path';

const VALID_COMMANDS = [
  'init',
  'challenge',
  'critique',
  'review',
  'premortem',
  'ach',
  'assumptions',
  'devils-advocate',
  '5-whys',
  'futures',
  'frame',
  'groupthink',
  'ideate',
  'converge',
  'tools',
  'outside-view',
  'invert',
  'incentives',
  'ladder',
  'steelman',
  'calibrate',
  'sequence',
  'culture',
  'ai-check',
  'launch',
  'rfc',
  'misuse',
  'reversibility',
  'record',
];

const HARNESS_DIRS = [
  '.cursor/skills',
  '.claude/skills',
  '.agents/skills',
  '.gemini/skills',
  '.github/skills',
];

function pinFileContent(command) {
  return `---
name: ${command}
description: Shortcut for /redteam ${command}. Applied critical thinking and RedTeam extensions.
disable-model-invocation: false
---

Invoke the redteam skill with the \`${command}\` command. Read \`redteam/reference/${command}.md\` and follow its flow.
`;
}

function main() {
  const [action, command] = process.argv.slice(2);

  if (!action || !['pin', 'unpin'].includes(action)) {
    console.error('Usage: node pin.mjs <pin|unpin> <command>');
    process.exit(1);
  }

  if (!command || !VALID_COMMANDS.includes(command)) {
    console.error(`Invalid command. Valid: ${VALID_COMMANDS.join(', ')}`);
    process.exit(1);
  }

  const cwd = process.cwd();
  const results = [];

  for (const harness of HARNESS_DIRS) {
    const skillDir = path.join(cwd, harness, command);
    const parentDir = path.dirname(skillDir);

    if (!fs.existsSync(parentDir)) continue;

    if (action === 'pin') {
      fs.mkdirSync(skillDir, { recursive: true });
      fs.writeFileSync(path.join(skillDir, 'SKILL.md'), pinFileContent(command));
      results.push(`Pinned /${command} → ${harness}/${command}/`);
    } else {
      if (fs.existsSync(skillDir)) {
        fs.rmSync(skillDir, { recursive: true, force: true });
        results.push(`Unpinned ${harness}/${command}/`);
      }
    }
  }

  if (results.length === 0) {
    console.error('No harness directories found. Install redteam first.');
    process.exit(1);
  }

  console.log(results.join('\n'));
}

main();
