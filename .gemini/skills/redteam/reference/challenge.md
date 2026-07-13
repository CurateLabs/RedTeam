# Challenge Flow

General adversarial review. Use when the user wants pushback, stress-testing, or "red team this" without naming a specific technique.

## Purpose

Surface assumptions, logic gaps, risks, and alternatives in a plan, argument, strategy, or decision — without running a full formal TTP sequence.

## Steps

1. **Restate the claim** in one sentence. Confirm you understood the user's position (or ask once if ambiguous).
2. **Identify the implicit frame** — what worldview, metric, or time horizon is baked in?
3. **List key assumptions** (minimum 5). Mark each: stated / unstated / questionable.
4. **Steel-man the opposition** — the strongest case against the current position (or run `/redteam steelman` for depth).
5. **Second-order effects** — what happens after the obvious first outcome? Third-order?
6. **Pre-mortem lite** — three plausible failure modes, ranked by severity × likelihood.
7. **Alternatives** — at least two viable paths not currently under consideration.
8. **Verdict** — proceed / proceed with changes / pause / reject. Be specific about what would change the verdict.

## Output format

```markdown
## Challenge: [target]

### Position (restated)
...

### Assumptions
| # | Assumption | Status | Risk if wrong |
|---|------------|--------|---------------|

### Second-order effects
| Order | Effect |
|-------|--------|
| 1st | |
| 2nd | |
| 3rd | |

### Strongest counter-argument
...

### Failure modes
1. ...

### Alternatives not considered
- ...

### Verdict
**[proceed | proceed with changes | pause | reject]**

### Recommended follow-up
[Specific `/redteam` command if a deeper technique would help]
```

## Persistence

If `.redteam/` exists, write to `.redteam/reviews/<slug>-challenge.md` and tell the user the path.

## Escalation

Recommend a specific technique when:
- Failure imagination needs depth → `premortem`
- Competing explanations exist → `ach`
- Root cause unclear → `5-whys`
- Group dynamics are the risk → `groupthink`
- Forecasts without base rates → `outside-view`
- Metric or incentive design → `incentives`
- AI-generated analysis → `ai-check`
