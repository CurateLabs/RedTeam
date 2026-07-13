# Ideate Flow

Divergent thinking phase of the Ideal Group Process. Generate alternatives before evaluating them.

## When to use

- Stuck with only one option
- Premature convergence on a solution
- Creative problem-solving needed
- After a frame audit reveals new problem definitions

## Tools (select by context)

| Tool | Best for |
|------|----------|
| **Brainstorming** | Volume of ideas, familiar problems |
| **5 Will Get You 25** | Forcing quantity before quality |
| **Gallery Walk** | Silent idea generation + cross-pollination |
| **Yes...And** | Building on ideas without blocking |
| **Outside-In Thinking** | Borrowing from other domains |
| **Mind Mapping** | Exploring branches from a core concept |
| **String of Pearls** | Sequential "what if" chains |

## Steps

1. **Frame the question** — specific, open, not leading. Bad: "How do we cut costs?" Better: "How might we achieve the same outcome with half the budget?"
2. **Diverge** — generate without judgment. Quantity target: ≥15 ideas for a 30-min session.
3. **Withhold evaluation** — no "yes but" during divergence
4. **Cluster** — group similar ideas; name the clusters
5. **Hand off** — output goes to `/redteam converge` or `/redteam critique` on top candidates

## Output format

```markdown
## Ideation: [target]

### Question
...

### Ideas (raw)
1. ...

### Clusters
#### Cluster A: [name]
- ...

### Standouts (not yet evaluated)
- ...
```

## Persistence

`.redteam/sessions/<date>-ideate-<slug>.md`

## Rules

- Wild ideas welcome — they stretch the space
- Build on others (yes-and)
- One conversation at a time in groups
- Defer judgment until converge phase
