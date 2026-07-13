# Install and run

## Observed need and evidence

Users must install the skill into their harness quickly. Install friction blocks every other experience. The CLI smoke test encodes the minimum file layout users depend on.

## Desired user and business outcome

A user runs one install command, reloads the harness, and can invoke `/redteam` commands within five minutes.

## Users and context

AI power users and contributors installing into Cursor, Claude, Codex, Agents, or via `npx` from GitHub.

## Current journey

1. User runs `npx --yes github:CurateLabs/RedTeam install` (or copies skill / installs plugin)
2. `cli/bin/cli.js` runs `build.mjs`, detects harness directories (or honors `--providers=`), and copies the skill in
3. `.redteam/` scaffold (`reviews/`, `sessions/`, `config.json`, `CONTEXT.template.md`) is created if missing
4. User reloads harness and runs `/redteam challenge`

## Opportunity and hypothesis

If install is one command with detected providers, adoption increases across harnesses without per-platform manuals.

## Intended behavior

Installer places skill files, scripts, and `.redteam/` scaffold; user can run commands after reload.

## Given / When / Then scenarios

- **Given** a clean project directory with Node 22.12+
- **When** the user runs `npx --yes github:CurateLabs/RedTeam install --providers=agents --scope=project`
- **Then** the installer creates `.agents/skills/redteam/SKILL.md`, reference files, `scripts/context.mjs`, `.redteam/config.json`, and `.redteam/CONTEXT.template.md`

- **Given** install from source
- **When** the maintainer runs `npm run build`
- **Then** skill copies to `.cursor`, `.claude`, `.agents`, `.github`, `.gemini`, and `plugin/` provider directories

- **Given** the skill is installed
- **When** the user runs `/redteam pin premortem`
- **Then** a pinned shortcut (`$premortem`) is available in the harness

## Constraints and domain language

- Skills-only package — markdown + small Node scripts; no server
- Node `>=22.12.0` for CLI and context scripts

## Success signals and telemetry

- `npm run test:cli-install` passes in CI and locally
- Users report install-to-first-command under 5 minutes (qualitative)

## Open questions

- Which providers should be default-detected vs opt-in? — maintainers

## Related requirements, tests, architecture, and ADRs

- Requirements: FR-6, FR-7, FR-10, NFR-2, NFR-3
- Architecture: [Install flow](../engineering/ARCHITECTURE.md#install)
- Tests: `scripts/test-cli-install.mjs`, [`engineering/TESTING.md`](../engineering/TESTING.md)
