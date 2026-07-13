# Assumptions Flow

Key Assumptions Check and Assumption Sensitivity Analysis from the source handbook.

## When to use

- Any plan resting on unvalidated beliefs
- Before resource commitment
- When someone says "we're assuming..." but hasn't listed them

## Steps

1. **Extract assumptions** — mine the target for everything that must be true for the plan to work. Aim for ≥10. Optionally group Critical Variables using an [Operating Landscape Map](operating-landscape-map.md).
2. **Classify each**:

| Type | Description |
|------|-------------|
| **Fact** | Verifiable now |
| **Forecast** | About the future |
| **Value** | About what matters |
| **Logic** | About cause and effect |

3. **Rate sensitivity** — if this assumption is wrong, does the plan:
   - **Collapse** (fatal)
   - **Degrade** (survivable with changes)
   - **Absorb** (minor impact)

4. **Rate confidence** — how sure are we? (high / medium / low / untested)

5. **Prioritize** — focus on: low confidence + collapse = critical

6. **Validation plan** — for top 3–5 critical assumptions, how could we test or de-risk before committing?

7. **Discovery-driven planning** (RedTeam extension) — for each critical assumption, define a **learning milestone**: what cheap test or prototype would we run before scaling?

## Output format

```markdown
## Assumptions: [target]

### Assumption register
| # | Assumption | Type | Sensitivity | Confidence | Status |
|---|------------|------|-------------|------------|--------|

### Critical assumptions (collapse + low confidence)
1. ...

### Validation plan
| Assumption | Test | Cost | Timeline |
|------------|------|------|----------|

### Kill criteria
If [assumption X] is false, we should [stop / pivot / ...].
```

## Persistence

`.redteam/reviews/<slug>-assumptions.md`

## Follow-up

If root cause of a bad assumption is unclear → `/redteam 5-whys`
