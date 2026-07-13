# Commands

All commands run through `/redteam <command> [target]`.

## Core commands

| Command | What it does |
|---------|--------------|
| `init` | Capture decision context in `CONTEXT.md` |
| `challenge` | General adversarial review |
| `critique` | Structured scored critique of a document or plan |
| `review` | Pre-commitment go/no-go gate |
| `premortem` | Imagine failure, work backward |
| `ach` | Analysis of Competing Hypotheses |
| `assumptions` | Key assumptions check |
| `devils-advocate` | Structured opposition |
| `5-whys` | Root cause drilling |
| `futures` | Alternative futures analysis |
| `frame` | Frame audit |
| `groupthink` | Design groupthink mitigation session |
| `ideate` | Divergent thinking |
| `converge` | Convergent decision support |
| `tools` | Browse technique catalog |

## Extensions (v0.2)

| Command | What it does |
|---------|--------------|
| `outside-view` | Base rates and reference class forecasting |
| `invert` | What would guarantee failure? |
| `incentives` | Metric gaming and Goodhart analysis |
| `ladder` | Ladder of inference |
| `steelman` | Steel-man before devil's advocacy |
| `calibrate` | Confidence and evidence grading |
| `sequence` | Tool-chain playbooks |
| `culture` | Stakeholder worldview mapping |
| `ai-check` | Meta-review of AI-assisted analysis |
| `launch` | Launch readiness checklist |
| `rfc` | Technical RFC / ADR review |
| `misuse` | Abuse-case and harm analysis |
| `reversibility` | One-way vs two-way doors |
| `record` | Decision record artifact |

## Examples

```
/redteam challenge our Q3 product strategy
/redteam premortem the migration to microservices
/redteam assumptions this pricing model
/redteam review before we sign the vendor contract
/redteam ai-check this strategy memo
/redteam sequence product launch for payments v2
/redteam outside-view our 6-month rollout estimate
```

## Pin shortcuts

```
/redteam pin premortem
```

Creates `/premortem` as a direct shortcut.

## Technique mapping

Each command maps to handbook concepts and TTPs. Browse the [Handbook catalog](../handbook/chapters/08-tools-techniques-practices/) or run `/redteam tools` for recommendations.
