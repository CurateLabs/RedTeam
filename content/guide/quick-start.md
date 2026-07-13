# Quick start

Get RedTeam running in a few minutes.

## 1. Install

```bash
npx redteam install
```

This detects harness folders (`.cursor`, `.claude`, `.agents`) and installs the skill. Customize with:

```bash
npx redteam install --providers=cursor,claude,agents --scope=project
```

## 2. Reload

Restart or reload your AI harness so it picks up the new skill.

## 3. Run a command

In chat:

```
/redteam challenge our plan to migrate to microservices by Q3
```

Or use a playbook for a common decision type:

```
/redteam sequence product launch for payments v2
```

## 4. (Optional) Persist context

For an ongoing decision, capture structured context once:

```
/redteam init
```

This creates a `.redteam/` directory with `CONTEXT.md` and review folders. See [`.redteam/` directory](redteam-directory.md).

## Pin shortcuts

Create a pinned alias for a command you use often:

```
/redteam pin premortem
```

Then invoke `/premortem` directly.

## Next steps

- [All commands](commands.md)
- [Installation options](installation.md)
- [Handbook overview](../handbook/)
