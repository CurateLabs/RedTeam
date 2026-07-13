# Alternative Futures Flow

From the source handbook: explore multiple plausible futures to avoid single-forecast planning and surprise.

## When to use

- Strategic planning
- Long-horizon decisions
- High uncertainty environments (VUCA)
- Contingency planning

## Steps

1. **Define the focal issue** — what decision or plan are we stress-testing against the future?
2. **Identify critical uncertainties** — 2 axes that most affect the outcome (e.g. market adoption × regulatory environment)
3. **Build scenarios** (typically 4 quadrants):
   - Name each future vividly — a headline from that world
   - Describe key features, not full narratives
4. **Implications** — for each scenario, how does the current plan fare?
   - **Robust** — works in all scenarios
   - **Fragile** — fails in one or more
   - **Hedged** — could adapt with triggers
5. **Signposts** — early indicators that tell us which future is emerging
6. **Adaptation** — what changes to the plan improve robustness?

## Output format

```markdown
## Alternative Futures: [target]

### Focal issue
...

### Critical uncertainties
- Axis 1: ...
- Axis 2: ...

### Scenarios
| | Axis 2 low | Axis 2 high |
|---|------------|-------------|
| **Axis 1 high** | Scenario A: [name] | Scenario B: [name] |
| **Axis 1 low** | Scenario C: [name] | Scenario D: [name] |

### Scenario sketches
#### A: [headline]
...

### Plan robustness
| Scenario | Outcome | Notes |
|----------|---------|-------|

### Signposts
| Indicator | Points toward | Monitor how |
|-----------|---------------|-------------|

### Recommendations
- ...
```

## Persistence

`.redteam/reviews/<slug>-futures.md`
