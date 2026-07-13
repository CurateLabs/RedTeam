# Frame Audit Flow

From Handbook v10: examine the lens through which a problem, decision, or situation is being viewed.

## When to use

- Stuck in unproductive debate (talking past each other)
- Problem definition feels wrong
- Competing stakeholders see different problems
- "We've been discussing this for months with no progress"

## Steps

1. **State the current frame** — how is the problem/decision currently defined? Quote it if possible.
2. **Identify frame elements**:
   - **Scope** — what's in / out?
   - **Metrics** — what counts as success?
   - **Time horizon** — now vs. long-term?
   - **Causal story** — who/what is the protagonist?
   - **Values** — what trade-offs are pre-decided?
3. **Alternative frames** — generate ≥3 reframes. Use "4 Ways of Seeing" (Handbook v10):
   - As a **problem to solve**
   - As a **polarity to manage** (not either/or)
   - As a **pattern** (recurring dynamic)
   - As an **opportunity** (not a threat)
4. **Test reframes** — which frame opens better options? Which explains the stuckness?
5. **Cynefin check** (RedTeam extension) — classify context:

| Domain | Approach |
|--------|----------|
| **Clear** | Best practice, sense-categorize-respond |
| **Complicated** | Expert analysis, good practice |
| **Complex** | Probe-sense-respond, emergent |
| **Chaotic** | Act-stabilize-sense, novel practice |

6. **Polarity mapping** (if either/or persists) — identify the pole pair to *manage* (e.g. speed ↔ quality), not solve
7. **Recommend** — adopt, blend, manage polarity, or explicitly hold multiple frames

## Output format

```markdown
## Frame Audit: [target]

### Current frame
"..."

### Frame elements
| Element | Current | Alternative? |
|---------|---------|--------------|

### Alternative frames
1. ...

### Reframe assessment
| Frame | Opens options? | Explains stuckness? |
|-------|----------------|---------------------|

### Recommendation
[Adopt / blend / hold tension between ...]
```

## Persistence

`.redteam/reviews/<slug>-frame.md`

## Follow-up

If reframing reveals a polarity → manage it; don't "solve" it. If new options appear → `/redteam ideate`
