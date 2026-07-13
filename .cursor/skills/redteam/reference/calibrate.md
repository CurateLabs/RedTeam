# Calibrate Flow

Confidence and evidence grading on claims within a plan or analysis.

## When to use

- Memos full of assertions without uncertainty
- Executive summaries with false precision
- Before `review` — calibrate then gate

## Steps

1. **Extract claims** — discrete, testable statements (minimum 8)
2. **Classify each**:

| Type | Definition |
|------|------------|
| **Fact** | Verifiable now with available evidence |
| **Inference** | Logical conclusion from facts |
| **Guess** | Judgment with limited evidence |
| **Wish** | Desired belief without support |

3. **Confidence** — High / Medium / Low per claim
4. **Evidence** — what supports it? What would disconfirm?
5. **Overconfidence flags** — High confidence + Guess/Wish = flag
6. **Recalibrate** — revise language in the deliverable to match evidence grade

## Output format

```markdown
## Calibration: [target]

### Claim register
| # | Claim | Type | Confidence | Evidence | Disconfirming evidence |
|---|-------|------|------------|----------|------------------------|

### Overconfidence flags
- ...

### Language fixes
| Original | Calibrated |
|----------|------------|

### Overall assessment
[Well-calibrated | Overconfident | Underconfident]
```

## Persistence

`.redteam/reviews/<slug>-calibrate.md`

## Related

- `/redteam outside-view` — base rates for forecasts
- `/redteam ach` — competing hypotheses for explanatory claims
