# RedTeam — OpenAI GPT / ChatGPT Plugin Manifest

For ChatGPT Custom GPTs or OpenAI-compatible agent harnesses.

## Installation

### Custom GPT

1. Create a new GPT at [chatgpt.com/gpts](https://chatgpt.com/gpts)
2. Paste `chatgpt/INSTRUCTIONS.md` into **Instructions**
3. Upload `chatgpt/knowledge/` files as **Knowledge** (optional — full TTP catalog)
4. Name it "RedTeam" and add conversation starters:
   - `/redteam challenge my plan`
   - `/redteam premortem this launch`
   - `/redteam assumptions`

### Codex / Agents skill

```bash
npx redteam install --providers=agents
```

Or copy manually:

```bash
cp -r dist/agents/.agents your-project/
```

## Conversation starters

```
/redteam challenge [paste your plan]
/redteam premortem [decision or launch]
/redteam assumptions [strategy or proposal]
/redteam review [before we approve this]
/redteam ach [what explains this outcome?]
```

## No API required

This is a skills-only plugin. All reasoning happens in the model. No external API, MCP, or actions needed.
