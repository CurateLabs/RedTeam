# Converge Flow

Convergent decision support. Narrow alternatives after divergence.

## When to use

- After ideation or when multiple options exist
- Team needs to choose, not generate
- Decision paralysis from too many options

## Tools (select by context)

| Tool | Best for |
|------|----------|
| **Dot Voting** | Quick prioritization in groups |
| **Team A / Team B Analysis** | Structured comparison of two options |
| **SWOT Analysis** | Strategic option comparison |
| **Critical Variables** | Identifying must-haves vs. nice-to-haves |
| **High Impact / Low Probability** | Tail risk comparison |
| **Divergent-Convergent** | Full cycle in one session |

## Steps

1. **List options** — from prior ideation or current candidates (max 7 for sanity)
2. **Define criteria** — what matters? Weight if helpful.
3. **Evaluate** — score or compare each option against criteria
4. **Stress-test the leader** — run devil's advocate on the top pick
5. **Decide or defer** — explicit outcome with dissent recorded

## Output format

```markdown
## Convergence: [target]

### Options
1. ...

### Criteria
| Criterion | Weight |
|-----------|--------|

### Evaluation
| Option | C1 | C2 | C3 | Total |
|--------|----|----|----|----|

### Top pick
...

### Dissent
[Who prefers a different option and why]

### Decision
**[Option N | Defer pending ...]**
```

## Persistence

`.redteam/reviews/<slug>-converge.md`

## Handoff

If the top pick hasn't been stress-tested → `/redteam review` or `/redteam premortem`
