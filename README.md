# RedTeam

Applied critical thinking skills for AI agents. **29 commands** — source handbook core plus RedTeam extensions (outside-view, ai-check, launch, rfc, and more).

> **Quick start:** Run `npx redteam install`, reload your harness, then `/redteam challenge <your plan>` in chat. For a full playbook: `/redteam sequence <decision>`.

## What is this?

Red teaming here means **applied critical thinking and groupthink mitigation** — not cybersecurity penetration testing.

The skill teaches AI agents to:

- Challenge assumptions and surface hidden risks
- Run structured techniques: premortems, ACH, devil's advocacy, 5 Whys, alternative futures, frame audits
- Facilitate groupthink mitigation and divergent/convergent thinking
- Produce decision-ready reviews before commitment

Works in **pure chat** (paste a plan, get a challenge) or with a **`.redteam/` directory** for persistent decision context and review artifacts.

## Commands

All commands run through `/redteam`:

| Command | What it does |
|---------|--------------|
| `/redteam init` | Capture decision context in CONTEXT.md |
| `/redteam challenge` | General adversarial review |
| `/redteam critique` | Structured scored critique of a document/plan |
| `/redteam review` | Pre-commitment go/no-go gate |
| `/redteam premortem` | Imagine failure, work backward |
| `/redteam ach` | Analysis of Competing Hypotheses |
| `/redteam assumptions` | Key assumptions check |
| `/redteam devils-advocate` | Structured opposition |
| `/redteam 5-whys` | Root cause drilling |
| `/redteam futures` | Alternative futures analysis |
| `/redteam frame` | Frame audit |
| `/redteam groupthink` | Design groupthink mitigation session |
| `/redteam ideate` | Divergent thinking |
| `/redteam converge` | Convergent decision support |
| `/redteam tools` | Browse TTP catalog (v9 + extensions) |

### Extensions (v0.2)

| Command | What it does |
|---------|--------------|
| `/redteam outside-view` | Base rates and reference class forecasting |
| `/redteam invert` | What would guarantee failure? |
| `/redteam incentives` | Metric gaming and Goodhart analysis |
| `/redteam ladder` | Ladder of inference |
| `/redteam steelman` | Steel-man before devil's advocacy |
| `/redteam calibrate` | Confidence and evidence grading |
| `/redteam sequence` | Tool-chain playbooks |
| `/redteam culture` | Stakeholder worldview mapping |
| `/redteam ai-check` | Meta-review of AI-assisted analysis |
| `/redteam launch` | Launch readiness checklist |
| `/redteam rfc` | Technical RFC / ADR review |
| `/redteam misuse` | Abuse-case and harm analysis |
| `/redteam reversibility` | One-way vs two-way doors |
| `/redteam record` | Decision record artifact |

### Examples

```
/redteam challenge our Q3 product strategy
/redteam premortem the migration to microservices
/redteam assumptions this pricing model
/redteam review before we sign the vendor contract
/redteam ai-check this strategy memo
/redteam sequence product launch for payments v2
/redteam outside-view our 6-month rollout estimate
```

Pin shortcuts: `/redteam pin premortem` creates `/premortem`.

## Installation

### Option 1: CLI (recommended)

```bash
npx redteam install
```

Detects harness folders (`.cursor`, `.claude`, `.agents`) and installs the skill. Use `--providers=cursor,claude,agents` and `--scope=project|global` to customize.

### Option 2: Claude Code plugin

```
/plugin marketplace add <your-org>/redteam
```

Then install from the plugin list.

### Option 3: ChatGPT Custom GPT

1. Create a Custom GPT
2. Paste `chatgpt/INSTRUCTIONS.md` into Instructions
3. Optionally upload `skill/reference/ttp-catalog.md` as knowledge

See [chatgpt/README.md](chatgpt/README.md).

### Option 4: Copy from repo

```bash
# Cursor
cp -r .cursor/skills/redteam your-project/.cursor/skills/

# Claude Code
cp -r .claude/skills/redteam your-project/.claude/skills/

# Codex / Agents
cp -r .agents/skills/redteam your-project/.agents/skills/
```

Run `npm run build` first if installing from source.

### Option 5: Git submodule

```bash
git submodule add https://github.com/davidspencer/redteam .redteam-plugin
npx redteam install --providers=claude,cursor
```

## `.redteam/` directory

When you run `/redteam init`, the skill writes decision context and stores review artifacts:

```
.redteam/
├── config.json          # shared project config (commit)
├── CONTEXT.md           # decision context (commit, or use root CONTEXT.md)
├── reviews/             # saved critiques, premortems, reviews (commit)
└── sessions/            # facilitation session notes (commit)
```

Add to `.gitignore`:

```
# redteam-ignore-start
.redteam/config.local.json
.redteam/*.tmp
# redteam-ignore-end
```

**Keep tracked:** `config.json`, `CONTEXT.md`, `reviews/`, `sessions/`

## Chat-only mode

No setup required. Paste any plan, strategy, email draft, or argument and invoke a command:

```
/redteam challenge [paste plan here]
```

The skill uses your input as context. Offer `/redteam init` to persist context for later sessions.

## Source

Techniques adapted from the UFMCS *Red Team Handbook* v9.0. RedTeam **supersets and modifies** the original — see [docs/HANDBOOK.md](docs/HANDBOOK.md) for the full concept inventory and [docs/SOURCE.md](docs/SOURCE.md) for lineage. See [NOTICE.md](NOTICE.md) for legal attribution.

Modeled on the [impeccable](https://github.com/pbakaus/impeccable) skills/plugin architecture.

## License

Apache 2.0. See [LICENSE](LICENSE).
