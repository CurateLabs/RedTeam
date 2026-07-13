# RedTeam Extensions Catalog

Techniques and commands **beyond** U.S. Army Red Team Handbook v9. Full docs: [`docs/HANDBOOK/chapters/08-redteam-extensions.md`](../../docs/HANDBOOK/chapters/08-redteam-extensions.md).

## Commands (superset)

| Command | Source tradition | Handbook v9? |
|---------|------------------|--------------|
| `outside-view` | Kahneman, Tetlock — base rates | No |
| `invert` | Munger — inversion | Partial (premortem) |
| `incentives` | Goodhart, policy design | Partial |
| `ladder` | Argyris — ladder of inference | No |
| `steelman` | Debate / epistemics | No |
| `calibrate` | Forecasting, Duke | No |
| `sequence` | RedTeam playbooks | No |
| `culture` | Generalized cultural empathy | Partial |
| `ai-check` | RedTeam — AI-assisted review | No |
| `launch` | Product go-live | No |
| `rfc` | Engineering ADR culture | No |
| `misuse` | Abuse-case analysis | No |
| `reversibility` | Bezos two-way doors | No |
| `record` | ADR / decision journal | No |

## TTPs (under existing or new commands)

| TTP | Command |
|-----|---------|
| Reference class forecasting | `outside-view` |
| Pre-parade (success scenario) | `premortem` |
| Cynefin domain check | `frame` |
| Polarity mapping | `frame` |
| Discovery-driven planning | `assumptions` |
| Kill criteria / tripwires | `review`, `record` |
| Second-order effects | `challenge` |
| Narrative vs evidence audit | `critique` |
| Decision journal | `record` |

## Reference docs

- [bias-catalog.md](bias-catalog.md)
- [ai-anti-patterns.md](ai-anti-patterns.md)
- [decision-record-template.md](decision-record-template.md)
- [operating-landscape-map.md](operating-landscape-map.md)

## Playbooks

See [sequence.md](sequence.md) for chained command sequences.
