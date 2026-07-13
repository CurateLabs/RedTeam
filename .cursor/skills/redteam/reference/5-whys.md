# 5 Whys Flow

From the source handbook: iterative "why" questioning to drill past symptoms to root causes and hidden assumptions.

## When to use

- Incident analysis
- Recurring problems that "fixes" don't fix
- When the stated problem may not be the real problem

## Steps

1. **State the problem** — observable, specific, not a solution disguised as a problem
2. **Ask "Why?" five times** (or until you hit a root cause / immovable constraint):

```
Problem: ...
Why? → ...
Why? → ...
Why? → ...
Why? → ...
Why? → [root cause or fundamental assumption]
```

3. **Validate** — is the root cause actionable? If not, keep drilling or reframe
4. **Check for multiple chains** — complex problems may have parallel why-chains
5. **Distinguish** — root cause vs. contributing factors vs. symptoms
6. **Recommend** — fix the root, not the symptom

## Rules

- Each "why" must follow logically from the previous answer
- If you jump to a pet theory, back up
- "Human error" is rarely a root cause — ask why the system allowed the error

## Output format

```markdown
## 5 Whys: [target]

### Problem statement
...

### Chain
1. Why? ...
2. Why? ...
3. Why? ...
4. Why? ...
5. Why? → **Root cause**

### Contributing factors
- ...

### Recommended action
[Address root cause, not symptom]

### Assumptions surfaced
- ...
```

## Persistence

`.redteam/reviews/<slug>-5-whys.md`

## Follow-up

If multiple competing root causes → `/redteam ach`
