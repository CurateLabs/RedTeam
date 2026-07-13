# Decision Record Template

RedTeam superset — durable artifact for `.redteam/reviews/` or project ADR folders. Produced by `/redteam record`.

## When to write

- After GO or GO WITH CONDITIONS from `review`
- End of strategic `sequence` playbook
- Any one-way door decision (`reversibility`)

## Full template

```markdown
# Decision Record: [TITLE]

| Field | Value |
|-------|-------|
| **Date** | YYYY-MM-DD |
| **Status** | Proposed / Accepted / Superseded |
| **Deciders** | [roles or names] |
| **Consulted** | [who was red-teamed] |
| **Informed** | [who needs to know] |

## Context

[Forces the decision. Link CONTEXT.md if exists.]

## Decision

[Single sentence, testable.]

## Consequences

### Positive
- ...

### Negative / trade-offs
- ...

## Alternatives considered

| Option | Pros | Cons | Outcome |
|--------|------|------|---------|
| A | | | Chosen |
| B | | | Rejected — reason |

## Assumptions (critical)

| ID | Assumption | Validated? | Owner | Kill criterion if false |
|----|------------|------------|-------|-------------------------|
| A1 | | | | |

## Dissent log

| Who | Position | Addressed? | Resolution |
|-----|----------|------------|------------|

## Red team artifacts

| Command | Artifact path |
|---------|---------------|
| premortem | `.redteam/reviews/...` |
| review | `.redteam/reviews/...` |

## Tripwires & monitoring

| Signal | Threshold | Action | Owner |
|--------|-----------|--------|-------|

## Confidence

**Overall:** High / Medium / Low

[1–2 sentences on what would change confidence.]

## Review schedule

**Next review:** YYYY-MM-DD

**Trigger events:** [what forces early revisit]
```

## Decision journal (optional, personal)

Separate file in `.redteam/sessions/` for calibration practice:

```markdown
# Decision Journal — [date]

**Decision:**
**Expected outcome:**
**Confidence (0–100%):**
**Time horizon for feedback:**
**What would prove me wrong:**
**Emotional state (honest):**
```

## ADR integration

If the project uses `docs/3-ENGINEERING/ADRs/`, offer to mirror this record there with `docslime add adr` or manual copy — keep `.redteam/reviews/` as the red team source of truth.
