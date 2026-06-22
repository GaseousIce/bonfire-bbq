# Agent Guidelines

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
- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) for commit messages and use conventional names for branches. Use `git flow` commands (e.g., `git flow feature start branch-name`) to manage branches; refer to the [git-flow commands documentation](https://git-flow.sh/docs/commands/) for details.
- **NEVER** create or run commit commands on your own; write/make commits ONLY when explicitly asked by the user. Under no circumstances should you commit code unless specifically instructed.

## 5. Token Savings (RTK)
- Always prefix shell commands with `rtk` (e.g., `rtk git status`, `rtk git fetch`) to minimize token consumption by filtering and compressing command output before it reaches the context, as detailed in [.agents/rules/antigravity-rtk-rules.md](./.agents/rules/antigravity-rtk-rules.md).
