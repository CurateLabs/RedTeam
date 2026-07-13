# `.redteam/` directory

When you run `/redteam init`, the skill writes decision context and stores review artifacts in a project-local directory.

## Layout

```
.redteam/
├── config.json          # shared project config (commit)
├── CONTEXT.md           # decision context (commit)
├── reviews/             # saved critiques, premortems, reviews (commit)
└── sessions/            # facilitation session notes (commit)
```

## What to commit

**Keep tracked:** `config.json`, `CONTEXT.md`, `reviews/`, `sessions/`

## What to ignore

Add to your project `.gitignore`:

```
# redteam-ignore-start
.redteam/config.local.json
.redteam/*.tmp
# redteam-ignore-end
```

## Chat-only vs project mode

| Mode | When | Context source |
|------|------|----------------|
| **Chat-only** | Quick one-off reviews | Your pasted message |
| **Project** | Ongoing decisions | `CONTEXT.md` + prior reviews |

A missing `CONTEXT.md` never blocks a scoped review — the skill uses what you provide in chat. Init is optional unless you want persistence.

## `CONTEXT.md`

Structured capture of:

- Decision or question under review
- Stakeholders and constraints
- What success and failure look like
- Known assumptions and open questions

Update it as the decision evolves. `/redteam record` can produce formal decision records from review output.
