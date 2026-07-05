# Contributing

## Getting Started

**Prerequisites:**
- Node.js >= 22.12.0
- npm

```bash
npm install         # Install dependencies
npm run dev         # Dev server at localhost:4321
npm run build       # Production build to dist/
npm run preview     # Preview production build
npm run format      # Prettier format src/
npm run format:check # Check formatting (read-only)
```

## Project Stack

| Tool | Purpose |
|------|---------|
| **Astro** | Static site framework |
| **Tailwind CSS v4** | Utility-first styling via `@theme` in `src/styles/global.css` |
| **GSAP** | JavaScript animation library (ScrollTrigger, SplitText, etc.) |
| **Prettier** | Code formatter (semicolons, single quotes, trailing commas, 100-char width) |

## AI-Assisted Development (Optional)

This project includes a set of optional tools to help AI coding assistants understand the codebase and align with project conventions. Use whatever agent you prefer — these tools are agent-agnostic.

| Tool | Purpose |
|------|---------|
| **graphify** | Builds a queryable knowledge graph from the codebase. Instead of grepping raw files, query the graph for architecture, relationships, and concepts. — [GitHub](https://github.com/safishamsi/graphify) |
| **RTK** (Rust Token Killer) | CLI proxy that compresses command output by 60–90% before it reaches AI context. Works with any terminal-based agent. — [GitHub](https://github.com/rtk-ai/rtk) — [Docs](https://www.rtk-ai.app/guide) |
| **Domain skills** | `.agents/skills/` contains reference docs for GSAP, Tailwind CSS v4, and design guidelines. Any agent can ingest these to understand project-specific practices. |

## Design Conventions

This project follows a **Verge-inspired dark editorial** design system. Full specification in [DESIGN.md](./DESIGN.md).

- **Canvas:** `#131313` — no light mode on the homepage
- **Accents:** Jelly Mint `#3cffd0`, Ultraviolet `#5200ff` — saturated, hazard-tape style
- **No shadows or gradients:** Use 1px borders for elevation
- **Pill corners:** Every interactive/content container is rounded (20–40px)
- **Font roles:** Manuka (Bebas Neue) display-only ≥60px; FK Roman (Newsreader) body-only; UPPERCASE mono for labels
- **No mint text <16px on `#131313`:** Contrast vibrates at small sizes

## Architecture

This is a **single-page static site** — all navigation is anchor-based scroll. There is no backend, no API, no database, and no form submission (alert-only).

- `src/pages/index.astro` — single route, composes all sections
- `src/layouts/Layout.astro` — page shell, meta, GSAP plugin registration
- `src/components/` — 10 Astro components (Hero, About, Gallery, Reservation, Footer, etc.)
- `src/styles/global.css` — Tailwind v4 `@theme` tokens, base resets
- `src/assets/images.ts` — barrel file exporting all 14 PNGs

Each component owns its own GSAP animation logic in a per-component `<script>` block. No React/Vue/Svelte — all interactivity is vanilla JS with GSAP.

## Commit Rules

- **Format:** Conventional Commits — `<type>(<scope>): <description>`
- **Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `chore`
- **Scopes:** Component names (`hero`, `about`, `gallery`, etc.) or areas (`scroll`, `styles`, `assets`, `build`, `agents`, `deps`)
- Lowercase description, imperative mood, no trailing period
- Write a short description followed by a blank line and a bullet-point body explaining what changed and why
- **Always run `npm run format` before committing**
