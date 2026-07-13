# Outside View Flow

Reference class forecasting and base-rate thinking (Kahneman, Tetlock). Fight the planning fallacy and uniqueness bias.

## When to use

- Forecasts, timelines, budgets, success probability claims
- "This time is different" narratives
- Before committing resources to an unprecedented plan

## Steps

1. **State the prediction** — what outcome and by when?
2. **Find the reference class** — what category of past attempts is this most like? (Not the story — the class.)
3. **Base rate** — in that class, what % succeeded? Typical timeline? Typical cost overrun?
4. **Adjust** — is there a *specific* reason this instance differs from the class? Name it; don't default to optimism.
5. **Outside-view estimate** — revised probability/timeline from base rate + justified adjustments
6. **Compare** — inside view (team plan) vs outside view; explain the gap

## Output format

```markdown
## Outside View: [target]

### Prediction (inside view)
...

### Reference class
[What bucket of past attempts]

### Base rates
| Metric | Class average | Source / reasoning |
|--------|---------------|-------------------|

### Justified adjustments
| Factor | Direction | Strength of evidence |
|--------|-----------|-------------------|

### Outside-view estimate
...

### Gap analysis
Inside view assumes X; outside view suggests Y because...
```

## Persistence

`.redteam/reviews/<slug>-outside-view.md`

## Related

- `/redteam calibrate` — confidence on individual claims
- `/redteam assumptions` — which assumptions drive the inside view
