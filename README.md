# 🔥 Bonfire BBQ

Welcome to **Bonfire BBQ**, a high-impact, modern web experience for barbecue enthusiasts, backyard grillers, and culinary reviews.

The site is built with [Astro](https://astro.build/) and is visually driven by a bold, dark editorial design system.

---

## 🎨 Design System: The Verge (2024)

Bonfire BBQ adopts a premium, high-contrast dark editorial aesthetic inspired by The Verge's 2024 redesign.

- **Canvas**: Near-black editorial canvas (`#131313`) as the default surface.
- **Accents**: Acidic **Jelly Mint** (`#3cffd0`) and **Verge Ultraviolet** (`#5200ff`) used as eye-catching hazard accents (buttons, borders, and timeline tags).
- **Typography**: Heavy, condensed **Manuka** displays for hero headings paired with clean **PolySans** for body and **PolySans Mono** for uppercase metadata.
- **Tactility**: Rounded-pill everything (20px to 40px corner radii) framed by hairline 1px solid borders (`#ffffff` or accent colors). **No decorative drop-shadows or gradients** are used; elevation is represented purely by solid color blocks.
- **Timeline**: The signature **StoryStream** vertical feed with mono-uppercase timestamps.

Refer to the full specifications in [DESIGN.md](./DESIGN.md) for color palettes, typographic hierarchies, and layout rules.

---

## 🚀 Project Structure

Inside this Astro project, you will find:

```text
/
├── .agents/skills/    # Installed developer skill files (Tailwind, GSAP, etc.)
├── public/            # Static assets (images, icons)
├── src/
│   ├── pages/         # Routes (e.g., index.astro)
│   └── components/    # Reusable Astro and JS/framework components
├── AGENTS.md          # Coding guidelines and safety rules for AI agents
└── DESIGN.md          # Full design system specifications & tokens
```

---

## 🧞 Developer Commands

All commands are run from the root of the project:

| Command             | Action                                                |
| :------------------ | :---------------------------------------------------- |
| `npm install`       | Installs project dependencies                         |
| `npm run dev`       | Starts the local dev server at `localhost:4321`       |
| `npm run build`     | Builds your production-ready site to `./dist/`        |
| `npm run preview`   | Previews your local production build before deploying |
| `npm run astro ...` | Runs Astro CLI commands (e.g. `astro add`)            |
| `graphify update .` | Rebuilds the codebase knowledge graph                 |

---

## 🤖 Guidelines for AI Assistants

Before modifying any code, all AI assistants **must** read and adhere to:

1. [AGENTS.md](./AGENTS.md) — Universal safety rules, conventional commits, command caching rules, and project-specific developer skills.
2. [DESIGN.md](./DESIGN.md) — Strict visual guidelines, component stylings, and responsive behavior constraints.
