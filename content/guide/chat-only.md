# Chat-only mode

No install, no `.redteam/` directory, no setup — paste and challenge.

## How it works

1. Paste any plan, strategy, email draft, RFC, or argument into chat
2. Invoke a command:

```
/redteam challenge [paste plan here]
```

The skill uses your input as context. It will offer `/redteam init` as an optional follow-up to persist context for later sessions.

## When to use chat-only

- One-off reviews
- Exploring RedTeam before committing to install
- Ad-hoc critique in a thread without a project repo

## When to add a `.redteam/` directory

- Multi-session decisions
- Team-shared context in git
- Building a library of reviews and decision records

See [`.redteam/` directory](redteam-directory.md).

## Works without CONTEXT.md

If you haven't run `init`, scoped commands still work. The skill reads what you provide — it does not block on missing project files.
