# AI JAM #1 — Project Guidelines

Single-page event landing built with React 19 + TypeScript + Vite, deployed to GitHub Pages.

## Build & Test

| Command | What it does |
|---------|-------------|
| `npm run dev` | Dev server with HMR at `localhost:5173/aijam1/` |
| `npm run build` | TypeScript check + Vite production build → `dist/` |
| `npm run lint` | ESLint (TS + React Hooks rules) |
| `npm run preview` | Serve production build locally |

## Architecture

- **Entry**: `src/main.tsx` → `src/App.tsx` (entire UI in one component)
- **No router, no state management** — static landing page only
- **Tailwind CSS v4** via `@tailwindcss/vite` — import in `src/index.css` with `@import "tailwindcss"`
- **Custom CSS vars** for the Stitch design system are defined in `src/index.css` (`:root` block)
- **React Compiler** is enabled via `babel-plugin-react-compiler` — do NOT add manual `useMemo`/`useCallback`
- `vite.config.ts` sets `base: '/aijam1/'` — required for GitHub Pages subfolder; all asset paths must be relative

## Conventions

- `verbatimModuleSyntax` is on → use `import type` for type-only imports
- `noUnusedLocals` and `noUnusedParameters` are enforced — clean up unused vars before building
- CSS naming: BEM-like flat class names (`.hero-title`, `.btn-primary`) — no Tailwind `cn()` utility needed
- Design system tokens (colors, fonts) live as CSS custom properties in `src/index.css`, not in JS

## Design System (Stitch "Meow Modern")

| Token | Value |
|-------|-------|
| Background | `#f8f6f2` (cream) |
| Primary | `#00684f` (mint green) |
| Secondary container | `#ffc2cc` (pastel pink) |
| Heading font | Plus Jakarta Sans |
| Body font | Be Vietnam Pro |

No 1px borders. No sharp corners (min-radius `0.5rem`). See `src/index.css` for full token list.

## MCP Tools Available

- **Google Stitch** (`.vscode/mcp.json`) — generate UI screens and export HTML → convert to React
- **agent-browser** (`.agents/skills/agent-browser/`) — browser automation

## Deployment

Push to `main` → GitHub Actions (`static.yml`) builds and deploys to GitHub Pages automatically.
Live URL: `https://progresak.github.io/aijam1/`

For fork setup see [docs/guides/github-pages-fork.md](../docs/guides/github-pages-fork.md).

## Docs Index

| File | Covers |
|------|--------|
| `docs/guides/stitch.md` | Setting up Google Stitch MCP |
| `docs/guides/agent-browser.md` | Browser automation CLI |
| `docs/projects/*.md` | Ready-made Stitch prompts for demo projects |
| `docs/skills/update-docs/SKILL.md` | Skill: regenerate this file |

## Boundaries

- ✅ Run `npm run lint` and `npm run build` before committing
- ⚠️ Ask before adding new npm dependencies (keeps bundle lean)
- ⚠️ Ask before changing `vite.config.ts` `base` — breaks all asset paths
- 🚫 Never commit API keys or secrets (Stitch key lives in `.vscode/mcp.json`, which is gitignored)
