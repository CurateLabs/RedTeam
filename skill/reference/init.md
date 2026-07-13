# Init Flow

One-time setup for a decision or project under red team review. Captures context so every later command starts with shared understanding.

Writes:
- **CONTEXT.md** — the decision domain: what is being decided, by whom, under what constraints, with what stakes
- **`.redteam/config.json`** — project metadata (if not already present)

Every other `/redteam` command reads CONTEXT.md when present.

## Step 1: Load current state

Check what exists:
- `CONTEXT.md` at project root, or under `.redteam/`, `.agents/context/`, or `docs/`
- `.redteam/config.json`

Decision tree:
- **No CONTEXT.md**: run Steps 2–4
- **CONTEXT.md exists**: ask whether to refresh or append. Never silently overwrite
- **Invoked as blocker** (user ran another command with no context): complete init, then resume the original command

## Step 2: Gather available material

Before interviewing, scan what exists:
- README, docs, PRDs, RFCs, ADRs, strategy memos
- Recent commits, open issues, meeting notes
- Any prior `.redteam/reviews/` artifacts

Form a hypothesis about: decision type, stakeholders, timeline, and what "success" means.

## Step 3: Interview (one question at a time)

Use structured questions when available; otherwise ask in chat and wait for each answer.

**Minimum coverage:**
1. **Decision** — What is being decided? One sentence.
2. **Stakes** — What happens if this goes wrong? What happens if we delay?
3. **Stakeholders** — Who decides? Who is affected? Whose view is missing?
4. **Constraints** — Time, budget, policy, technical, political?
5. **Current position** — What is the leading option or recommendation today?
6. **Evidence** — What supports it? What is weakest?
7. **Dissent** — Who disagrees, and why? Has anyone been silent?
8. **Success criteria** — How will we know the decision worked?

Skip questions already answered in provided material. Confirm inferences; don't transcribe guesses as facts.

## Step 4: Write CONTEXT.md

```markdown
# Decision Context

## Decision
[One-sentence statement of what is being decided]

## Stakes
[What is at risk — operational, financial, reputational, human]

## Stakeholders
- **Deciders:** [...]
- **Affected:** [...]
- **Missing voices:** [...]

## Constraints
[Time, resources, policy, dependencies]

## Current position
[Leading recommendation or plan as understood today]

## Evidence
- **Strongest support:** [...]
- **Weakest link:** [...]

## Known dissent
[Who disagrees and why, or "none surfaced yet"]

## Success criteria
[Measurable or observable outcomes that define success]

## Open questions
[Unresolved items that should inform red teaming]
```

Write to `CONTEXT.md` at project root (preferred) or `.redteam/CONTEXT.md` if the user prefers isolation.

Ensure `.redteam/config.json` exists (copy from template if needed).

## Step 5: Recommend next commands

Tailor 2–4 pointed recommendations:

- **First pass on a plan** → `/redteam challenge` or `/redteam critique`
- **Before a launch or approval** → `/redteam review` or `/redteam premortem`
- **Unclear why something failed or might fail** → `/redteam 5-whys` or `/redteam assumptions`
- **Competing explanations** → `/redteam ach`
- **Team may be in an echo chamber** → `/redteam groupthink`
- **Strategic fork in the road** → `/redteam futures`

Keep it short. The full menu is one `/redteam` away.

If init was a blocker, resume the original command now.
