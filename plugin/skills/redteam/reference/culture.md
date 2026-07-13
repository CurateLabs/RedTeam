# Culture Flow

Lightweight stakeholder and worldview mapping — RedTeam's generalized cultural empathy session (not military PMESII).

## When to use

- Multi-stakeholder conflict
- "They don't understand us" / cross-team launches
- International or cross-discipline decisions
- Before `steelman` when perspectives are opaque

## Steps

1. **List actors** — minimum 4 distinct stakeholders or groups
2. **Per actor, capture**:
   - What they **see** (facts they emphasize)
   - What they **value** (what winning looks like)
   - What they **fear** (losses they avoid)
   - What they **want** (explicit asks)
3. **Operating Landscape Map** (optional) — map each actor across [domains](operating-landscape-map.md)
4. **Empathetic questions** — 6 questions that build understanding without judgment
5. **Mismatches** — where do frames collide? Polarity vs problem?
6. **Design response** — whose voice is missing from the decision process?

## Output format

```markdown
## Culture: [target]

### Actors
| Actor | Sees | Values | Fears | Wants |
|-------|------|--------|-------|-------|

### Frame collisions
- ...

### Missing voices
- ...

### Empathetic questions to ask
1. ...

### Recommendations
- ...
```

## Persistence

`.redteam/reviews/<slug>-culture.md`

## Related

- [Cultural Perception Framework](../../docs/HANDBOOK/ttps/cultural-perception-framework.md)
- `/redteam frame` — polarity vs problem reframing
