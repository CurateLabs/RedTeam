# Invert Flow

Munger-style inversion: instead of asking how to succeed, ask what would *guarantee* failure — then avoid those paths.

## When to use

- Strategy, hiring, org design, process design
- When premortem feels too narrow (single failure story)
- Fast adversarial pass (15–20 min)

## Distinction from premortem

| Premortem | Invert |
|-----------|--------|
| One failure scenario, work backward | List many failure *guarantors* |
| Emotional "imagine it failed" | Clinical "what would make this fail for sure?" |
| Prevent/detect/respond | Eliminate or block failure modes |

## Steps

1. **State the goal** — what are we trying to achieve?
2. **Invert** — "What would guarantee we fail at this?"
3. **Brainstorm** — minimum 10 guaranteed-failure actions or conditions (no filtering)
4. **Invert again** — flip each into an avoidance rule or design constraint
5. **Audit current plan** — which failure guarantors are still present?
6. **Verdict** — proceed / fix first / abandon

## Output format

```markdown
## Invert: [target]

### Goal
...

### Guaranteed failure modes
1. If we ___, we will fail because...
...

### Avoidance rules (inverted)
| Failure guarantor | Constraint / guardrail |
|-------------------|------------------------|

### Present in current plan?
| Rule | Present? | Fix |
|------|----------|-----|

### Verdict
...
```

## Persistence

`.redteam/reviews/<slug>-invert.md`
