# Steelman Flow

Verify the opposition is the *strongest* version of the case — not a straw man before devil's advocacy.

## When to use

- Before `devils-advocate` (run steelman first on the view you'll attack)
- Debates where sides talk past each other
- AI-assisted review (models often argue against weak versions)

## Distinction from devil's advocate

| Steelman | Devil's advocate |
|----------|------------------|
| Strengthen the other side | Attack the prevailing side |
| "What's the best case for B?" | "What's wrong with A?" |
| Quality control on understanding | Stress test on decision |

## Steps

1. **Identify positions** — A (prevailing) and B (opposition or alternative)
2. **Steel-man B** — strongest, most charitable, most evidence-backed version of B
3. **Steel-man A** — same for prevailing view (confirm you understand it)
4. **Straw man audit** — is anyone arguing against a weakened version of the other side?
5. **Gap** — what would B's best advocate say we're still missing?
6. **Hand off** — if decision still unclear, run `/redteam devils-advocate` on A with steel-manned B in context

## Output format

```markdown
## Steelman: [target]

### Position A (prevailing)
...

### Position B (opposition / alternative)
...

### Steel-man of A
...

### Steel-man of B
...

### Straw man audit
| Weak version being argued | Strong version ignored |
|---------------------------|----------------------|

### What's still missing from the debate
- ...

### Recommended next step
[devils-advocate | converge | review]
```

## Persistence

`.redteam/reviews/<slug>-steelman.md`
