# Publishing

Verified changes reach users as **copied skill bundles** (via `npm run build` and `npx` install), **Claude plugin marketplace** artifacts, and the **GitHub Pages** documentation site. There is no hosted RedTeam runtime to deploy.

## Artifacts and destinations

| Artifact | Destination | Versioned by | Owner |
|---|---|---|---|
| Skill source | `skill/` in repo | Git commit / npm package files field | Maintainers |
| Provider bundles | `.cursor/`, `.claude/`, `.agents/`, `.github/`, `.gemini/`, `plugin/` | Git commit after `npm run build` | Maintainers |
| `dist/` tarball layout | `dist/` via `npm run build:dist` | Git tag / release | Maintainers |
| CLI package | `npx github:CurateLabs/RedTeam` | GitHub default branch (install) / tag (releases) | Maintainers |
| Claude plugin | `.claude-plugin/` marketplace manifest | Git commit | Maintainers |
| Documentation site | GitHub Pages `https://curatelabs.github.io/RedTeam/` | `main` branch deploy | Maintainers |

## Build and continuous delivery

```sh
npm run build          # copy skill to provider directories
npm run build:dist     # dist/ only
npm run docs:site      # stage docs, astro check, build, link check
npm run test:cli-install
```

`docs:site` and `test:cli-install` must pass before merging doc or installer changes. Provider copies should be rebuilt with `npm run build` when `skill/` changes.

## Environments and promotion

| From | To | Required evidence / approval |
|---|---|---|
| Feature branch | `main` | PR review; local `test:cli-install` and `docs:site` for affected areas |
| `main` | GitHub Pages | CI `deploy.yml` — `npm run docs:site` must succeed |
| `main` / tag | `npx` consumers | GitHub repo availability; users pull latest on install |
| `main` | Claude plugin users | Marketplace sync after manifest/skill changes |

## Deployment verification

- **Docs:** `npm run docs:site` completes; `scripts/check-docs-site.mjs` validates `/RedTeam/` links
- **Install:** `npm run test:cli-install` creates expected paths
- **Harness:** maintainer spot-checks `/redteam challenge` after skill changes

## Rollback and recovery

- **Docs site:** revert commit on `main` and let CI redeploy, or roll back GitHub Pages deployment
- **Skill content:** revert Git commit; users reinstall or pull latest
- **No production database or stateful service** — rollback is content revert only

## Official references

- [GitHub Pages deployment workflow](https://docs.github.com/en/pages/getting-started-with-github-pages)
- [Astro Starlight](https://starlight.astro.build/)
- [Claude Code plugins](https://docs.anthropic.com/en/docs/claude-code/plugins)
