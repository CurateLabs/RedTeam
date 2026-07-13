# Misuse Flow

Abuse-case and harm analysis — how could this be misused, gamed, or cause unintended harm? (Not cybersecurity penetration testing.)

## When to use

- Product features, policies, algorithms, public communications
- Before `launch` or `review`
- When "users might do X" hasn't been explored

## Steps

1. **Define the artifact** — feature, policy, message, algorithm
2. **Benign use** — intended use in one sentence
3. **Misuse brainstorm** — minimum 10 ways to misuse, game, or weaponize (think-write-share if group)
4. **Harm tiers**:

| Tier | Description |
|------|-------------|
| **Annoyance** | Friction, spam, low harm |
| **Harm** | Real damage to users or third parties |
| **Severe** | Legal, safety, reputational catastrophe |

5. **Vulnerable populations** — who bears disproportionate harm?
6. **Mitigations** — product, policy, monitoring, or accept-with-waiver
7. **Residual risk** — what remains after mitigations?

## Output format

```markdown
## Misuse Analysis: [target]

### Intended use
...

### Misuse scenarios
| # | Scenario | Tier | Population | Likelihood |
|---|----------|------|------------|------------|

### Mitigations
| Scenario | Mitigation | Residual risk |
|----------|------------|---------------|

### Waivers (if shipping anyway)
- ...

### Verdict
**[Acceptable | Ship with mitigations | Block]**
```

## Persistence

`.redteam/reviews/<slug>-misuse.md`

## Related

- `/redteam incentives` — metric gaming overlap
- `/redteam launch`
