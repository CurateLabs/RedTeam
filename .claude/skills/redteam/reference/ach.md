# ACH Flow (Analysis of Competing Hypotheses)

From the source handbook: identify alternative explanations and systematically evaluate evidence against each hypothesis. Guards against confirmation bias and premature closure.

## When to use

- Intelligence-style analytical problems
- When multiple explanations could fit the evidence
- When the group has converged on one story too quickly
- Incident post-mortems with unclear root cause

## Steps

1. **State the question** — what are we trying to explain or decide?
2. **Brainstorm hypotheses** — generate at least 3 mutually exclusive, collectively exhaustive explanations. Include one that challenges the preferred narrative.
3. **List evidence** — all relevant evidence, arguments, and gaps. Include absence of evidence.
4. **Build the ACH matrix**:

| Evidence | H1 | H2 | H3 | H4 |
|----------|----|----|----|-----|
| E1: ... | C / I / N | C / I / N | C / I / N | C / I / N |
| E2: ... | | | | |

**C** = consistent, **I** = inconsistent, **N** = neutral / doesn't discriminate

5. **Score** — count inconsistencies per hypothesis. The hypothesis with the fewest inconsistencies is most likely (not proven).
6. **Identify diagnostic evidence** — what evidence would most change the ranking? What should we seek?
7. **Conclusion** — leading hypothesis, confidence level, and what would change your mind.

## Rules

- Evaluate each hypothesis against each piece of evidence independently
- Absence of expected evidence is evidence (mark as inconsistent if evidence should exist)
- Do not discard hypotheses early — let the matrix eliminate them
- The goal is to disprove hypotheses, not prove one

## Output format

```markdown
## ACH: [target]

### Question
...

### Hypotheses
1. H1: ...
2. H2: ...
3. H3: ...

### Evidence matrix
[table]

### Ranking
1. H? — fewest inconsistencies (N)
2. ...

### Diagnostic gaps
- Seek: ...

### Conclusion
...
```

## Persistence

`.redteam/reviews/<slug>-ach.md`
