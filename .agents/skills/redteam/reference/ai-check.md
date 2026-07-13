# AI Check Flow

Meta-review of AI-generated or AI-assisted analysis. Counters sycophancy, false consensus, shallow challenge, and invented grounding.

## When to use

- After the model produced a plan, strategy, or review
- Before trusting AI output for a high-stakes decision
- When the analysis feels "too agreeable"

## Four checks (run all)

### 1. Mirror — agreement audit
- Did the analysis challenge the user's premise or only refine it?
- List **unchallenged assumptions** the user brought in
- Rate: **Loyal opposition** / **Polite agreement** / **Sycophantic**

### 2. Grounding — evidence audit
- Which claims are sourced vs invented?
- Flag **unsupported facts**, **fake specificity** (numbers without basis), **phantom citations**
- List what must be verified externally

### 3. Dissent — forced opposition
- Produce **two credible opposing verdicts** before any synthesis
- Neither opposition may be a straw man
- If only one side is plausible, say why — don't fabricate balance

### 4. Sycophancy — flattery & alignment audit
- Flag cheerleading phrases, premature "great idea," uncritical adoption of user's framing
- Rewrite opening to neutral analytic tone

## Output format

```markdown
## AI Check: [target]

### Mirror
**Rating:** ...
**Unchallenged assumptions:**
- ...

### Grounding
| Claim | Grounded? | Issue |
|-------|-----------|-------|

### Dissent
**Position A:** ...
**Position B:** ...
**Synthesis (only after both):** ...

### Sycophancy flags
- ...

### Verdict
**[Trust with edits | Re-run analysis | Do not use for decision]**

### Recommended human follow-up
- ...
```

## Persistence

`.redteam/reviews/<slug>-ai-check.md`

## Reference

Full anti-pattern list: [ai-anti-patterns.md](ai-anti-patterns.md)

## Related

- `/redteam steelman` — before dissent
- `/redteam calibrate` — per-claim grading
