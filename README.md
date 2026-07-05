# 🔥 Bonfire BBQ

Welcome to **Bonfire BBQ**, a high-impact, modern web experience for barbecue enthusiasts, backyard grillers, and culinary reviews.

The site is built with [Astro](https://astro.build/) and is visually driven by a bold, dark editorial design system.

> [!WARNING]
> This website is still a work in progress. You may encounter incomplete components, placeholder/unpleasant animations, buggy UI layouts, or temporary visual artifacts while we continue to build and polish the experience.

---

## 🎨 Design System: The Verge (2024)

Bonfire BBQ adopts a premium, high-contrast dark editorial aesthetic inspired by The Verge's 2024 redesign.

- **Canvas**: Near-black editorial canvas (`#131313`) as the default surface.
- **Accents**: Acidic **Jelly Mint** (`#3cffd0`) and **Verge Ultraviolet** (`#5200ff`) used as eye-catching hazard accents (buttons, borders, and timeline tags).
- **Typography**: Heavy, condensed **Bebas Neue** displays for hero headings paired with clean **Space Grotesk** for body and **Space Mono** for uppercase metadata.
- **Tactility**: Rounded-pill everything (20px to 40px corner radii) framed by hairline 1px solid borders (`#ffffff` or accent colors). **No decorative drop-shadows or gradients** are used; elevation is represented purely by solid color blocks.
- **Timeline**: The signature **StoryStream** vertical feed with mono-uppercase timestamps.

Refer to the full specifications in [DESIGN.md](./DESIGN.md) for color palettes, typographic hierarchies, and layout rules.

---

## ✨ Features & Technical Highlights

This project has been thoroughly audited and polished, achieving high-performance interactions, modern styling, and clean state lifecycles:

### ⚡ Performance & Asset Optimization

- **Dynamic Asset Pipeline**: Harnesses Astro's dynamic asset optimizer (`<Image />`) for multi-width WebP generation and layout shift prevention.
- **GSAP Vendor Splitting**: Configured Vite's `manualChunks` to split GSAP core and plugins into a dedicated vendor file, promoting stable browser caching.
- **Layout Thrashing Prevention**: Utilizes `will-change` CSS hints, hardware-accelerated transforms, and `requestAnimationFrame` (RAF) throttling for mousemove parallax animations.
- **Network Optimization**: Built-in preconnect links for Google Fonts and Unsplash images to reduce DNS lookup latency.

### 🎭 Animation & Interactive UI

- **Cinematic Hero**: Staggered character reveal text, radial vignetted smoke layer (preventing hard edge clipping), and mouse-parallax depth with hearth glow backdrops.
- **StoryStream (Timeline)**: Vertical feed documenting Bonfire's journey with ScrollTrigger-reactive animations.
- **Atmosphere Gallery**: Responsive stack reveal gallery (pins and stacks cards on desktop, adapts to a robust grid on mobile devices).
- **Hearth Reservation**: Interactive booking form powered by custom GSAP-animated calendar date/time pickers and custom dropdown selects that replace standard native controls.
- **Global Smooth Scroll**: ScrollSmoother integration covering the entire layout, intercepting anchor links (nav, footer, brand, and CTA buttons) for cinematic scroll transitions.
- **Page Transitions**: Clip-path wipe overlay transitions between pages, driven from the navbar via a shared utility.
- **Hover Effects**: Interactive button hover animations with expanding circle reveals, managed via a dedicated utility.

### 🛡️ Engineering & Accessibility

- **Strict Cleanups**: Automated cleanup of global event listeners using `AbortController` in persistent components.
- **Memory Leak Prevention**: Destruction and garbage collection of orphan GSAP tweens during calendar navigation.
- **Type Safety**: Strictly typed event parameters and explicit TypeScript casts across all components.
- **Modular Utilities**: Shared TypeScript modules for custom dropdowns, hover button effects, and page transition handling.

---

## 🚀 Project Structure

Inside this Astro project, you will find:

```text
/
├── .agents/          # Installed developer skills, rules, and workflows
├── public/           # Static favicon files
├── src/
│   ├── assets/       # Image barrel (images.ts) + 14 PNGs
│   ├── components/   # Reusable Astro components
│   │   ├── Hero.astro, Navbar.astro, About.astro
│   │   ├── SignatureDishes.astro, Gallery.astro
│   │   ├── Reservation.astro, Footer.astro
│   │   ├── Button.astro, LegalModal.astro
│   │   ├── LoadingScreen.astro, PageTransition.astro
│   │   └── reservation/   # CalendarPicker, TimePicker, CustomDropdown, BookingToast, ReservationInfo
│   ├── layouts/      # Layout.astro — page shell, GSAP init, meta
│   ├── pages/        # index.astro — single route, composes all sections
│   ├── scripts/      # Shared vanilla TS (dropdown.ts)
│   ├── styles/       # global.css — Tailwind v4 @theme tokens + utilities
│   └── utils/        # Shared utility modules (hoverButton.ts, navigateWithTransition.ts)
├── AGENTS.md         # Coding guidelines and safety rules for AI agents
├── CLAUDE.md         # Agent configuration (references AGENTS.md)
└── DESIGN.md         # Full design system specifications & tokens
```

---

## 🧞 Developer Commands

All commands are run from the root of the project:

| Command                | Action                                                |
| :--------------------- | :---------------------------------------------------- |
| `npm install`          | Installs project dependencies                         |
| `npm run dev`          | Starts the local dev server at `localhost:4321`       |
| `npm run build`        | Builds your production-ready site to `./dist/`        |
| `npm run preview`      | Previews your local production build before deploying |
| `npm run format`       | Runs Prettier to auto-format src/ components          |
| `npm run format:check` | Verifies code styling formatting                      |
| `npm run astro ...`    | Runs Astro CLI commands (e.g. `astro add`)            |
| `graphify update .`    | Rebuilds the codebase knowledge graph                 |

---

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup instructions, design conventions, commit rules, and optional AI-assisted development tooling.


