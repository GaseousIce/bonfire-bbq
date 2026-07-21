# Bonfire BBQ — Project Knowledge Base

## OVERVIEW

Single-page restaurant landing site for "Bonfire BBQ" — Astro v7 static site with GSAP v3.15 animations, Tailwind CSS v4 styling, and a Verge-inspired dark editorial design system. Zero React/Vue/Svelte components — all interactivity is via vanilla `<script>` blocks with GSAP inside `.astro` components.

## STRUCTURE

```
bonfire-bbq/
├── .agents/          # 10 AI agent skill directories (GSAP, Tailwind, design)
├── .github/          # GitHub Actions (opencode AI trigger, not CI/CD)
├── public/           # Static favicon files (2 files)
├── src/              # ALL application source (28 files)
│   ├── assets/       # Image barrel (images.ts) + 14 PNGs
│   ├── components/   # 10 Astro components (Hero, About, Gallery, etc.)
│   ├── layouts/      # Layout.astro (page shell, GSAP init, meta)
│   ├── pages/        # index.astro — single route, composes all sections
│   └── styles/       # global.css (Tailwind v4 @theme tokens)
├── AGENTS.md         # ← You are here
└── DESIGN.md         # Full Verge-inspired design specification
```

## WHERE TO LOOK

| Task                  | Location                                   | Notes                                                      |
| --------------------- | ------------------------------------------ | ---------------------------------------------------------- |
| Build/dev commands    | `package.json` scripts, `astro.config.mjs` | `npm run dev` (localhost:4321), `npm run build`            |
| Design tokens & rules | `src/styles/global.css`, `DESIGN.md`       | Tailwind v4 CSS `@theme` + 339-line design spec            |
| Page composition      | `src/pages/index.astro`                    | Single page — imports all 8 section components             |
| Layout & shell        | `src/layouts/Layout.astro`                 | GSAP plugin registration, ScrollSmoother, page transition  |
| Component animations  | Per-component `<script>` block             | Every component owns its own GSAP logic                    |
| Image assets          | `src/assets/images.ts` + `images/` dir     | 14 PNGs exported as named ESM imports                      |
| GSAP plugin setup     | `src/layouts/Layout.astro` `<script>`      | ScrollTrigger, ScrollSmoother, SplitText — registered once |
| AI skill references   | `.agents/skills/`                          | 10 skill files — read before working in that domain        |

## CODE MAP

| Symbol                  | Type      | Location          | Role                                                                           |
| ----------------------- | --------- | ----------------- | ------------------------------------------------------------------------------ |
| `index.astro`           | Page      | `src/pages/`      | Single route — composes Hero→About→SignatureDishes→Gallery→Reservation→Footer  |
| `Layout.astro`          | Layout    | `src/layouts/`    | Page shell, GSAP plugin registration, ScrollSmoother, meta, page transition function |
| `global.css`            | Style     | `src/styles/`     | Tailwind v4 `@theme`, base resets, responsive section-padding                  |
| `images.ts`             | Module    | `src/assets/`     | Barrel file — named re-exports of all 14 PNG imports                           |
| `Hero.astro`            | Component | `src/components/` | Cinematic hero: staggered char reveal, mouse parallax, smoke, glow pulses      |
| `Navbar.astro`          | Component | `src/components/` | Fixed nav + hamburger mobile drawer, clip-path page transition on click        |
| `About.astro`           | Component | `src/components/` | StoryStream timeline: spine fill, card reveals, image parallax                 |
| `SignatureDishes.astro` | Component | `src/components/` | Pinned horizontal scroll: card deck with scale/parallax per dish               |
| `Gallery.astro`         | Component | `src/components/` | Stack reveal: cards slide/rotate/scale on scroll                               |
| `Reservation.astro`     | Component | `src/components/` | Booking form: GSAP dropdowns, animated calendar/date picker                    |
| `Footer.astro`          | Component | `src/components/` | Footer nav, legal modal, AbortController cleanup                               |
| `LoadingScreen.astro`   | Component | `src/components/` | Loading spinner + progress bar — chains into Hero entrance                     |
| `Button.astro`          | Component | `src/components/` | Reusable atom — `<a>` or `<button>`, primary/outline variants                  |
| `PageTransition.astro`  | Component | `src/components/` | Clip-path wipe overlay DOM shell (logic in Layout.astro)                       |

## CONVENTIONS

- **Prettier**: semicolons, single quotes, trailing commas, 100-char width — `npm run format`
- **Commits**: Conventional/Semantic Commits (e.g., `feat(hero): ...`) — see Section 4 for complete rules; NEVER commit unless explicitly asked
- **Design**: Verge dark editorial — `#131313` canvas, Jelly Mint `#3cffd0` accents, pill corners (20-40px), no shadows/gradients
- **Interactivity**: All vanilla JS + GSAP — no React/Vue/Svelte, each component has its own `<script>` block
- **Naming**: Always use self-documenting, explicit variable and parameter names (e.g., `elementIndex` instead of `i`, `animationContext` instead of `ctx`, `clickEvent` instead of `e`, `targetElement` instead of `el`, `boundingRectangle` instead of `rect`)
- **Skills**: Read `.agents/skills/<domain>/SKILL.md` before modifying code in that domain
- **Shell**: Prefix commands with `rtk` for token savings — NOT for PowerShell-native cmdlets

## ANTI-PATTERNS (THIS PROJECT)

- **No auto-commit**: NEVER create/run git commits unless explicitly asked
- **Ambiguous variables**: NEVER use ambiguous or short variable names (e.g., `i`, `e`, `el`, `ctx`, `rect`, `bg`, `fn`, `opts`, `pos`, `temp`). All variables must clearly document their purpose
- **No box-shadow**: Use 1px borders or saturated accent fills for elevation (Verge rule)
- **No gradients**: Solid color blocks only — no glows, gradients, or atmospheric blurs
- **No square corners**: Every interactive/content container is rounded (2/3/4/20/24/30/40px)
- **Font roles**: Manuka (Bebas Neue) display-only ≥60px; UPPERCASE mono only; FK Roman (Newsreader) for body-only
- **No light mode**: `#131313` canvas always — no light backgrounds on homepage
- **No tests**: Zero test infrastructure exists — add before starting to test
- **GSAP cleanup**: Never skip `gsapContext.revert()` or tween kill on unmount
- **No mint text <16px on `#131313`**: Contrast vibrates at small sizes

## COMMANDS

```bash
npm run dev            # Dev server at localhost:4321
npm run build          # Production build to dist/
npm run preview        # Preview production build
npm run format         # Prettier format src/
npm run format:check   # Check formatting (read-only)
```

## NOTES

- Single-page static site (1 route) — all nav is anchor-based scroll via ScrollSmoother
- No backend, no API, no database, no form submission (alert-only)
- Tailwind v4 via CSS `@theme` — no `tailwind.config.*`
- Astro `<Image />` converts all 14 PNGs to multi-width WebP at build
- No CI/CD pipeline — `.github/workflows/` only has opencode AI agent trigger
- No ESLint, no linter beyond Prettier
- Node >= 22.12.0 required (defined in `package.json.engines`)

---

## 1. Using Skills

Before writing, modifying, or auditing code, read the instructions in the project's specialized skill files under `./.agents/skills/` if the task relates to them:

- **Tailwind CSS v4 Docs**: Refer to [tailwind-4-docs/SKILL.md](./.agents/skills/tailwind-4-docs/SKILL.md) for utility classes, configuration, and migration guides.
- **Web Interface/Design Review**: Refer to [web-design-guidelines/SKILL.md](./.agents/skills/web-design-guidelines/SKILL.md) for styling, accessibility, and UX criteria.
- **Astro**: Refer to [astro/SKILL.md](./.agents/skills/astro/SKILL.md) for Astro framework components, configuration, adapters, and deployment.
- **GSAP Core**: Refer to [gsap-core/SKILL.md](./.agents/skills/gsap-core/SKILL.md) for the core GSAP API, basic tweens, and animations.
- **GSAP React**: Refer to [gsap-react/SKILL.md](./.agents/skills/gsap-react/SKILL.md) for React integration and the `useGSAP` hook.
- **GSAP Frameworks**: Refer to [gsap-frameworks/SKILL.md](./.agents/skills/gsap-frameworks/SKILL.md) for non-React frameworks like Vue and Svelte.
- **GSAP ScrollTrigger**: Refer to [gsap-scrolltrigger/SKILL.md](./.agents/skills/gsap-scrolltrigger/SKILL.md) for scroll-linked animations and pinning.
- **GSAP Timelines**: Refer to [gsap-timeline/SKILL.md](./.agents/skills/gsap-timeline/SKILL.md) for sequencing and complex animation timelines.
- **GSAP Plugins**: Refer to [gsap-plugins/SKILL.md](./.agents/skills/gsap-plugins/SKILL.md) for GSAP plugins (Flip, Draggable, ScrollTo, etc.).
- **GSAP Performance**: Refer to [gsap-performance/SKILL.md](./.agents/skills/gsap-performance/SKILL.md) for performance optimization and layout thrashing prevention.
- **GSAP Utilities**: Refer to [gsap-utils/SKILL.md](./.agents/skills/gsap-utils/SKILL.md) for helper utility functions (clamp, mapRange, etc.).

## 2. Design Aesthetics

- All UI and component designs must strictly follow the Verge-inspired (2024) dark editorial aesthetic defined in [DESIGN.md](./DESIGN.md).
- Avoid generic, plain, or standard modern layouts. Make designs feel premium, high-impact, and highly customized according to the colors, typography, shapes, and flat depth rules in [DESIGN.md](./DESIGN.md).

## 3. MCP Configuration

- Local Model Context Protocol (MCP) servers are configured in [.mcp.json](./.mcp.json).
- Leverage these MCP server tools for AI-assisted debugging, route analysis, and interactive development where supported.

## 4. Git Commits and Branches

- **Format**: Conventional Commits: `<type>(<scope>): <description>` (e.g., `feat(hero): add mouse parallax scroll effect`).
- **Detail**: Write a short, specific description followed by a blank line and a bullet-point body explaining what changed and why. Be explicit about which components, files, or behaviors were modified.
- **Rules**: Lowercase description, imperative mood, no trailing period.
- **Allowed Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `chore`.
- **Allowed Scopes**: Component names (`hero`, `about`, etc.) or areas (`scroll`, `styles`, `assets`, `build`, `agents`, `deps`).
- **Formatting**: ALWAYS run `npm run format` before committing any code changes to ensure consistent styling.
- **NEVER** create or run commit commands on your own; write/make commits ONLY when explicitly asked by the user.


## 5. Token Savings (RTK)

- Always prefix shell commands with `rtk` (e.g., `rtk git status`, `rtk git fetch`) to minimize token consumption by filtering and compressing command output before it reaches the context, as detailed in [.agents/rules/antigravity-rtk-rules.md](./.agents/rules/antigravity-rtk-rules.md).
- **Note:** RTK should only be used for **general commands** (e.g., `git`, `npm`, `dir`, `ls`) and **not** for PowerShell-exclusive cmdlets (e.g., `Get-ChildItem`, `Set-Content`, `Remove-Item`). PowerShell-native commands will be filtered directly without RTK.
