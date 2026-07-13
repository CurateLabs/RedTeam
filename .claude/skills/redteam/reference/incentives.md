# Incentives Flow

Perverse incentives, Goodhart's law, and metric gaming analysis.

## When to use

- OKRs, KPIs, compensation plans, policy design
- "People will find a way" — behavior driven by measurement
- Before rolling out incentives or success metrics

## Steps

1. **List stated incentives** — what behavior are we trying to produce?
2. **Goodhart scan** — when this measure becomes a target, what gets distorted?
3. **Gaming scenarios** — how could a rational actor hit the metric without the intended outcome?
4. **Cobra effects** — any second-order harm from the incentive?
5. **Substitute metrics** — what *proxy* metrics might people optimize instead?
6. **Redesign** — pairing metrics, guardrails, or qualitative checks

## Output format

```markdown
## Incentives: [target]

### Intended behavior
...

### Metrics & incentives
| Metric / incentive | Intended effect |
|--------------------|-----------------|

### Gaming scenarios
| Scenario | Who benefits | Harm |
|----------|--------------|------|

### Goodhart risks
- ...

### Guardrails
- ...

### Redesign recommendations
- ...
```

## Persistence

`.redteam/reviews/<slug>-incentives.md`

## Related

- `/redteam logic-of-failure` → use `challenge` with Logic of Failure lens
- `/redteam misuse` — harm from misaligned use
