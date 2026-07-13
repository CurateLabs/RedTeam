# Reversibility Flow

One-way vs two-way door analysis (Bezos). Classify commitment reversibility before approval.

## When to use

- Architecture, vendor, hiring, pricing, public commitments
- Before `review`, `rfc`, or `launch`
- When team treats reversible decisions as irreversible (or vice versa)

## Classification

| Type | Definition | Decision bar |
|------|------------|--------------|
| **Two-way door** | Easily reversed; low cost to undo | Decide fast; experiment |
| **One-way door** | Hard or impossible to reverse | Full red team stack |
| **Doors that look two-way** | Reversible technically, irreversible reputationally/trust | Treat as one-way |

## Steps

1. **List commitments** in the proposal (minimum 5)
2. **Classify each** — one-way / two-way / looks-two-way
3. **Reversal cost** — time, money, trust, data, legal
4. **Undo plan** — for two-way: what's the rollback? For one-way: what's the mitigation?
5. **Match process** — are we using light process on one-way doors?

## Output format

```markdown
## Reversibility: [target]

### Commitments
| Commitment | Door type | Reversal cost | Undo plan |
|------------|-----------|---------------|-----------|

### Process mismatch
[Decisions needing heavier/lighter process]

### Recommendations
- ...
```

## Persistence

`.redteam/reviews/<slug>-reversibility.md`

## Related

- `/redteam review` — go/no-go
- `/redteam rfc`
