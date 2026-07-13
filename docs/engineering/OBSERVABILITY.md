# Observability

RedTeam has **no hosted runtime**, so observability focuses on **distribution health** (docs CI, install smoke tests), **qualitative command quality**, and **feedback loops** into product and experience docs — not traditional SLIs on a live API.

## Observable outcomes

| Outcome / requirement | Signal | Source | Expected range | Owner |
|---|---|---|---|---|
| Users can install quickly (NFR-1) | `test:cli-install` pass rate | Local/CI run | 100% pass before release | Maintainers |
| Docs remain navigable (FR-8) | `docs:site` + link check pass | GitHub Actions deploy workflow | Green on every `main` push | Maintainers |
| Reviews are actionable (PRODUCT) | Qualitative review of command output and `.redteam/reviews/` samples | Manual review, GitHub issues | Structured sections present | Maintainers |
| Handbook/guide discoverability | Docs site availability | GitHub Pages | Site reachable at published URL | Maintainers |

## Service health

| Service / journey | Indicator | Objective | Window |
|---|---|---|---|
| GitHub Pages docs | Deploy workflow success | 100% success on `main` | Per push |
| `npx` install path | CLI smoke test | Pass before merge affecting installer | Per change |
| Skill command quality | Spot-check transcripts | No regression in structure vs reference flow | Per skill release |

## Telemetry design

- **Events:** N/A — no product analytics SDK in the skill
- **Logs:** CI workflow logs for docs build failures; local CLI stderr on install errors
- **Metrics:** Informal — GitHub issue volume, install friction reports
- **Traces:** N/A — no distributed runtime

User-visible outcomes are proxied by **issue reports**, **review artifact quality**, and **docs/install CI green**.

## Dashboards and alerts

| Signal | Trigger | Severity | Owner | Response |
|---|---|---|---|---|
| Docs deploy failure | `deploy.yml` fails on `main` | High | Maintainers | Fix build/link errors; redeploy |
| Install smoke failure | `test:cli-install` fails locally or in CI | High | Maintainers | Fix CLI or build regression |
| Broken handbook link | User report or link check | Medium | Maintainers | Patch content or manifest |

## Privacy and safety

- Skill scripts do not phone home or collect user decision content
- `.redteam/reviews/` and CONTEXT.md stay in the user's project — not transmitted by RedTeam code
- Do not add observability that exfiltrates plan or decision text

## Production learning loop

- **Cadence:** on significant releases and when install/docs CI fails
- **Participants:** maintainers; user feedback via GitHub issues
- **Actions:** update `experience/` artifacts, `REQUIREMENTS.md`, reference flows, tests, and `strategy/` when lineage or positioning changes
- **Threshold:** recurring install or docs failures become requirements and tests; qualitative output issues update reference flows

Observation becomes discovery input when issues or retrospectives show a gap between intended behavior in `experience/` and what users actually get from commands.
