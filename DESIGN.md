# Design System: Bonfire Barbecue (Riso-Print Editorial)

## 1. Visual Theme & Atmosphere

Bonfire Barbecue's design system is an authentic **Riso-print (Risograph) editorial broadsheet** (`Hallmark theme: Riso`, `shape: Photographic §08`, axes: `light/grotesk-heavy/chromatic-pink`). Rather than a dark digital UI or a standard restaurant template, the site is conceived as a two-drum physical print publication fresh off the press. It captures the raw craft of Indian coal and clay ovens — clay tandoors, open iron sigree grills, and slow-steaming handis — using the tactile graphic language of an artisanal print shop.

The canvas is a warm, unbleached paper stock (`oklch(97% 0.011 90)`), printed in two primary ink drums: a deep **Indian Coal Blue** (`oklch(40% 0.165 265)`) and a vibrant **Chromatic Pink** (`oklch(68% 0.235 356)`). The visual identity is flat, tactile, and typographic, relying on physical print artifacts rather than software-rendered glows or dropshadows.

### Core Visual Signatures
- **Tactile Paper Grain (`.grain`)**: An SVG fractal noise texture (`opacity: 0.08`) applied to sections, cards, and image plates, evoking physical paper specks where ink skips.
- **The Misregistered Word (`.misreg`)**: The system's unique brand signature — the hero headline word "Bonfire" is printed a hair out of register, with a chromatic pink drum copy nudged 2–3px down and right behind the solid blue ink.
- **Two-Ink Overprint (`.overprint`, `.fig-overprint`)**: When the pink drum overlaps the blue ink drum, `mix-blend-mode: multiply` creates an unmixed deep purple shadow.
- **Solid Ink Bands (`.band-ink`)**: High-contrast blue drum blocks knocking out paper-colored text to stock — used in the hero headline block and the reservation statement.
- **Duotone Photographic Plates (`[data-slot]:has(> img)`)**: All photography is processed in a custom two-ink duotone (grayscale, 1.14 contrast, multiply blend over a pink-tinted paper screen, with a 55% lighten blue ink floor).
- **Sharp Print Edges**: Strict 2px border radii (`--radius-card: 2px`) and hairline borders (`1px` to `1.5px`), giving cards, forms, and buttons the feel of cut paper sheets, job tickets, and stamped coasters.
- **Flat Depth**: Zero box-shadows (`--shadow-card: none`). Elevation is achieved exclusively through color screens, ink borders, solid bands, and overprint layers.

---

## 2. Color Palette & Roles

The palette is calibrated in modern **OKLCH** color space in `src/styles/tokens.css`, maintaining consistent perceptual contrast and gamut across devices.

### The Two Print Drums (Inks)

| Color Name | Token / Value | Role & Usage |
|---|---|---|
| **Indian Coal Blue** (Drum 1) | `--color-ink`<br>`oklch(40% 0.165 265)` | Primary ink drum. Headlines, body text, primary borders, hairline rules, outline buttons, and solid ink bands. |
| **Secondary Blue** | `--color-ink-2`<br>`oklch(45% 0.15 265)` | Lighter blue drum layer. Used for page transition halo wipe, secondary interactive states. |
| **Chromatic Pink** (Drum 2) | `--color-accent`<br>`oklch(68% 0.235 356)` | Second ink drum. Primary CTA button fills, misregistration echo, link underline hover, loading bar, overprint blocks. |
| **Deep Contrast Ink** | `--color-accent-ink`<br>`oklch(27% 0.13 265)` | High-contrast dark ink for text placed on chromatic pink fills and hero paper caption strips. |
| **Muted Ink** | `--color-muted`<br>`oklch(50% 0.115 265)` | Secondary metadata, timestamps, dish tags, captions, form labels, and percentage counters. |
| **Hairline Rule** | `--color-rule`<br>`oklch(85% 0.045 265)` | Hairline divider rules (1px), subtle container separators, and progress bar track. |

### Paper & Screen Surfaces

| Paper Name | Token / Value | Role & Usage |
|---|---|---|
| **Warm Stock Canvas** | `--color-paper`<br>`oklch(97% 0.011 90)` | The default background for the entire page. Tactile, warm, unbleached paper tone. |
| **Pink Screen Sheet** | `--color-paper-2`<br>`oklch(93.5% 0.034 356)` | Light pink tinted paper screen. Full-width menu sheet background, duotone photo base, quiet button hover. |
| **Deep Screen Tone** | `--color-paper-3`<br>`oklch(84% 0.11 356)` | Saturated paper screen tone used in gradient fallbacks for photo slots. |

### Semantic & Interaction

| State | Token / Value | Role & Usage |
|---|---|---|
| **Keyboard Focus** | `--color-focus`<br>`oklch(44% 0.2 265)` | 2px solid outline with 2px offset on all interactive elements (`:focus-visible`). |
| **Error** | `--color-error`<br>`oklch(52% 0.19 27)` | Form validation errors and alerts. |
| **Success** | `--color-success`<br>`oklch(50% 0.12 150)` | Successful reservation confirmation. |
| **Selection** | `color-mix(in oklab, var(--color-accent) 22%, transparent)` | Text highlight selection background with blue ink text. |

---

## 3. Typography System

The project relies entirely on **self-hosted web fonts** in `public/fonts/` (WOFF2 format), eliminating external CDN dependencies and font flash.

### Font Families
1. **Cabinet Grotesk** (`weight: 800`, format: `woff2`)
   - **Role**: Brand wordmark, hero headline, section titles (H2), card titles (H3), price figures, tabular live totals, and button text.
   - **Characteristics**: Industrial, ultra-heavy, tight-tracking geometric sans-serif. Shouts editorial confidence and artisanal craft.
2. **Literata** (`weights: 400, 500`, format: `woff2`)
   - **Role**: Body copy, lead sentences, pull quotes, fire day descriptions, tabular hours, captions, and form labels.
   - **Characteristics**: Refined literary serif designed for continuous reading, offering print-magazine rhythm against the heavy grotesque headlines.

### Typography Hierarchy

| Role | Font | Size / Token | Weight | Line Height | Tracking | Notes |
|---|---|---|---|---|---|---|
| **Hero Headline** | Cabinet Grotesk | `clamp(4.5rem, 11vw, 9rem)` | 800 | 0.92 | -0.025em | Knocked out of blue band in hero with pink misregistration |
| **Display (H1 Default)** | Cabinet Grotesk | `--text-display`<br>`clamp(2.75rem, 5vw + 1rem, 5.25rem)` | 800 | 1.05 | -0.025em | Main page / section feature display |
| **Section Head (H2)** | Cabinet Grotesk | `--text-section`<br>`clamp(2rem, 2.5vw + 1rem, 3.5rem)` | 800 | 1.05 | -0.025em | "The storystream", "Signature dishes", "The soul of the hearth" |
| **Card / Dish Title (H3)** | Cabinet Grotesk | `--text-title`<br>`clamp(1.25rem, 0.75vw + 0.875rem, 1.625rem)` | 800 | 1.20 | -0.025em | Dish names, story row headings |
| **Lead Paragraph** | Literata | `--text-lead`<br>`clamp(1.125rem, 0.35vw + 1rem, 1.375rem)` | 400 / 500 | 1.45 | Normal | Hero tagline strip, section intros |
| **Body Standard** | Literata | `--text-md` (1rem / 16px) | 400 | 1.55 | Normal | Descriptions, philosophy quote, colophon details |
| **Tabular Numbers / Prices** | Cabinet Grotesk / Literata | `2xl` to `4xl` (`font-variant-numeric: tabular-nums`) | 800 | 1.00 | Normal | Menu prices (₹450), live board total (₹3,990), time (08:00) |
| **Metadata / Dish Tags** | Literata | `--text-sm` (0.875rem / 14px) | 500 | 1.40 | Normal | "Spice blending", "Dum pukht", "The fire philosophy" |
| **Button Text** | Cabinet Grotesk | 0.9375rem (15px) | 800 | 1.00 | Normal | All button labels (primary and outline) |

---

## 4. Component Stylings & Anatomies

### Buttons (`Button.astro` / `.btn`)

- **Primary Button (`.btn`, `.btn-primary`)**:
  - Background: `var(--color-accent)` (Chromatic Pink)
  - Text: `var(--color-accent-ink)` (Deep Blue Ink)
  - Border: `1.5px solid transparent`
  - Border Radius: `var(--radius-card)` (2px — sharp ticket cut)
  - Minimum Height: `48px`
  - Padding: `0 var(--space-lg)` (0 24px)
  - Font: Cabinet Grotesk 800, 15px / line-height 1
  - Hover: Background shifts to `var(--color-accent-ink)`, text shifts to `var(--color-paper)`
  - Active: `transform: translate(1px, 1px)`
  - Focus: `outline: 2px solid var(--color-focus); outline-offset: 2px`
- **Quiet / Outline Button (`.btn--quiet`)**:
  - Background: `transparent` (or `var(--color-paper)` when placed over photographic plates)
  - Text: `var(--color-ink)` (or `var(--color-accent-ink)`)
  - Border: `1.5px solid var(--color-ink)`
  - Border Radius: `var(--radius-card)` (2px)
  - Hover: Background shifts to `var(--color-paper-2)` (or `var(--color-accent)` in hero)
  - Active: `transform: translate(1px, 1px)`

### Navigation (`Navbar.astro`)

- **Floating Printed Chip**:
  - Pinned floating header (`.navbar-chip`) resting on top of the sheet with grain texture, 1px border, and paper background.
  - Brand logo "Bonfire" in Cabinet Grotesk 800 (text-2xl).
  - Vertical 1px rule separators (`bg-rule`).
  - Desktop nav links in Literata font-medium, transitioning to `--color-ink` on hover.
  - Right-aligned compact outline button ("Book a table").
  - Mobile: Collapses into hamburger button with an off-canvas drawer (`.mobile-drawer`) on the right.

### Hero Section (`Hero.astro`)

- **Archetype**: Full-bleed print poster (`min-height: 100dvh`).
- **Photographic Plate**: High-res tandoor photograph (`heroTandoor`) treated with grain and two-drum duotone filter.
- **Solid Blue Head Band (`.hero-head`)**:
  - Background: `var(--color-ink)`
  - Text: `var(--color-paper)`
  - Headline: "Bonfire" with `.misreg` effect. Pink shadow settles into `translate(2px, 3px)` (desktop) or `translate(1.5px, 2px)` (mobile).
- **Paper Strips**: Lead sentence and "Est. 2026." corner caption are set on white paper strips with 1px ink borders, preventing washout over the photo highlights.

### StoryStream Timeline (`About.astro`)

- **Layout**: Two-column editorial spread (7 columns timeline, 5 columns sticky philosophy aside).
- **The Fire Day**: 5 hairline rows (`border-b border-rule`) with tabular hours (`08:00` to `21:00`).
- **Overprint Time**: Featured fire milestones (11:00 Tandoor fires, 18:00 Sigree ignition) display time in Cabinet Grotesk 800 with `.fig-overprint` purple shadow.
- **The Fire Philosophy Aside**: Bordered quote block (`border-[1.5px] border-ink p-6 md:p-8`) with Literata italic quote and a solid pink accent overprint bar.

### Signature Dishes Price List (`SignatureDishes.astro`)

- **Sheet Surface**: Full-width light pink screen (`.menu-sheet bg-paper-2`), running edge to edge.
- **Price Rows**: Interactive rows separated by blue hairline rules (`color-mix(in oklab, var(--color-ink) 14%, transparent)`).
- **Featured Dish (`.featured-row`)**: Stood out on white stock (`bg-paper`) with `1.5px` solid blue ink border.
- **Live Board Total (`.menu-total`)**: Bordered panel displaying live board figure ("₹3,990") with `.fig-overprint` multiply swatch.
- **Animation**: Staggered scroll-triggered fade up using GSAP ScrollTrigger.

### Atmospheric Showcase (`Gallery.astro`)

- **Section**: "The soul of the hearth"
- **Photographic Pulls**:
  1. Full-bleed tandoor plate (`galleryTandoor`) up to 640px height.
  2. Side-by-side pair: Open sigree grill (`gallerySigree`) & stone-ground spices (`gallerySpices`) at 4:5 aspect ratio.
  3. Wide dum biryani handi (`galleryBiryani`) at 16:9 aspect ratio.
- **Captions**: Positioned beneath each frame in Literata text-sm text-muted.

### Reservation Sheet (`Reservation.astro` + subcomponents)

- **Two-Column Spread**:
  - **Left**: Solid blue ink band (`.band-ink`) with knocked out paper typography, listing kitchen facts with pink square bullets.
  - **Right**: Stock paper booking sheet framed in `1.5px` blue border (`border-ink`).
- **Form Controls**:
  - Inputs, calendar picker, time picker, and custom dropdowns all share `rounded-[2px]`, `border-[1.5px] border-ink`, and `bg-paper`.
  - Floating interactive `BookingToast.astro` with confirmation details.

### Colophon Footer (`Footer.astro`)

- **Structure**: Masthead row with brand name + 3-column colophon (Navigation with `.underlined-link`, Hearth address, Service hours).
- **Print Imprint**: Explicit print technical specification declaring the two inks and stock:
  *"Printed in two inks: Primary Drum (Indian Coal Blue, OKLCH 40% 0.165 265), Second Drum (Chromatic Pink, OKLCH 68% 0.235 356) on warm stock (OKLCH 97% 0.011 90)."*
- **Legal Modal**: Interactive modal (`LegalModal.astro`) with Privacy Policy, Terms, and Allergens.

---

## 5. Layout & Spacing Principles

### Spacing Scale (`src/styles/tokens.css`)

```css
--space-3xs: 2px;
--space-2xs: 4px;
--space-xs:  8px;
--space-sm:  12px;
--space-md:  16px;
--space-lg:  24px;
--space-xl:  40px;
--space-2xl: 64px;
--space-3xl: 96px;
--space-4xl: 144px;
```

### Section & Container Rhythms

- **Max Container Width**: `1440px` (`--container: 1440px`).
- **Desktop Gutter**: `64px` (`--gutter: 64px`).
- **Tablet Gutter (<= 60rem / 960px)**: `24px`.
- **Mobile Gutter (<= 40rem / 640px)**: `16px`.
- **Vertical Section Spacing**:
  - Standard Section Gap: `144px` (`--section-gap: 144px`) -> `96px` (tablet) -> `72px` (mobile).
  - Small Section Gap: `120px` (`--section-gap-s: 120px`) -> `80px` (tablet) -> `56px` (mobile).
  - Large Section Gap: `176px` (`--section-gap-l: 176px`) -> `120px` (tablet) -> `96px` (mobile).

### Border Radius Scale

```css
--radius-card: 2px;
--radius-pill: 2px;
```

Every container, button, card, input trigger, and tag adheres strictly to the **2px radius scale**. Large pill shapes or rounded cards are strictly forbidden — the design philosophy demands sharp, freshly trimmed paper edges.

---

## 6. Depth & Elevation

| Depth Level | Visual Technique | Application |
|---|---|---|
| **Flat Stock (0)** | Seamless paper surface | Default background (`--color-paper`) |
| **Divided (1)** | 1px hairline rule (`--color-rule`) | Story rows, menu row dividers, navbar separator |
| **Tint Screen (2)** | Pink paper fill (`--color-paper-2`) | Full-width menu sheet, quiet button hover |
| **Framed Sheet (3)** | `1.5px solid var(--color-ink)` | Philosophy block, booking form card, calendar dropdown |
| **Solid Drum Band (4)** | Solid ink band (`.band-ink`) | Hero title background, reservation left column |
| **Overprint (5)** | `mix-blend-mode: multiply` on pink/blue | `.misreg` hero text, `.fig-overprint` numbers |
| **Atmospheric (6)** | Dual-drum duotone filter | Hero plate and gallery photographic slots |

**Zero Drop Shadows**: The CSS property `box-shadow` is disallowed for elevation (`--shadow-card: none`). Depth is communicated purely through color contrast, paper screens, and ink frames.

---

## 7. Do's and Don'ts

### Do
- **Do** maintain the warm paper stock (`--color-paper`) as the default canvas.
- **Do** use Cabinet Grotesk 800 for display headings, brand marks, prices, and button text.
- **Do** use Literata for body text, descriptions, pullquotes, and tabular hours.
- **Do** enforce `2px` border radius across all buttons, cards, tags, and form fields.
- **Do** frame elevated cards with `1.5px solid var(--color-ink)`.
- **Do** process all photography with the standard duotone slot styles (`[data-slot]:has(> img)`).
- **Do** keep the `.misreg` effect reserved as the hero brand signature — use it only once on the hero "Bonfire" heading.
- **Do** ensure all numerical figures use tabular numerals (`.num` / `font-variant-numeric: tabular-nums`).
- **Do** provide full `<noscript>` styles so content is 100% readable without JavaScript.

### Don't
- **Don't** use a dark canvas or pure black (`#000000`). The theme is strictly light riso-print.
- **Don't** use box shadows, glowing effects, or soft atmospheric blurs.
- **Don't** use round pill buttons (24px/40px radius) — buttons are sharp 2px rectangles.
- **Don't** use gradient washes for backgrounds (solid color blocks or tinted paper screens only).
- **Don't** load fonts from Google Fonts or external CDNs; use the self-hosted WOFF2 assets in `public/fonts/`.
- **Don't** use external stock photos; all imagery is imported from `src/assets/images.ts`.
- **Don't** use saturated mint (`#3cffd0`) or ultraviolet (`#5200ff`) from the legacy dark theme.
- **Don't** add complex 3D flips or pinned horizontal scroll decks — keep scroll progression natural and editorial.

---

## 8. Motion, Interaction & Responsive Principles

### GSAP Animation Guidelines
- **Philosophy**: Restrained and purposeful. Animations should feel like a printing press stamping paper, not bouncy UI widgets.
- **ScrollSmoother**: Enabled on desktop (`min-width: 768px`) with `smooth: 0.6`. Automatically paused during the loading screen and cleaned up on unmount.
- **Entrance Staggers**: Subtle upward reveals (`y: 16` to `20px`, `duration: 0.55`–`0.6s`, `ease: "power3.out"`).
- **Page Transitions (`PageTransition.astro`)**:
  - Three-layer circular clip-path wipe from click origin:
    1. Layer 1: Blue drum halo (`#pt-halo`, `--color-ink-2`)
    2. Layer 2: Pink leading wave (`#pt-accent`, `--color-accent`)
    3. Layer 3: Solid blue wipe (`#pt-wipe`, `--color-ink`) with SplitText "Bonfire" reveal
- **Loading Screen (`LoadingScreen.astro`)**:
  - Dual-ring spinner representing the blue and pink ink drums.
  - Progress bar filling in chromatic pink, handing off cleanly to the hero entrance via `bonfire:hero-entrance` custom event.
- **Reduced Motion**:
  - Full support via `prefers-reduced-motion: reduce`.
  - Disables GSAP timelines, replaces page transition with a simple 100ms fade, and renders the misregistered hero drum immediately in place.

### Responsive Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| **Mobile** | `< 640px` (`40rem`) | Single-column layout. Hero headline scales down cleanly via `clamp()`. Floating navbar switches to hamburger drawer. Section padding contracts to `56px–72px`. |
| **Tablet** | `640px – 1024px` (`40rem – 60rem`) | 2-column layouts for story rows and gallery frame pairs. Section padding sets to `80px–96px`. |
| **Desktop** | `>= 1024px` (`60rem`) | Full 12-column grid spreads. Sticky philosophy aside and sticky reservation column activate. Full 144px section spacing. ScrollSmoother active. |

---

## 9. Developer & Agent Implementation Guide

### Quick Token Reference

```css
/* Surface */
--color-paper: oklch(97% 0.011 90);        /* Warm stock */
--color-paper-2: oklch(93.5% 0.034 356);    /* Pink screen */

/* Inks */
--color-ink: oklch(40% 0.165 265);          /* Indian Coal Blue */
--color-accent: oklch(68% 0.235 356);       /* Chromatic Pink */
--color-accent-ink: oklch(27% 0.13 265);    /* Dark contrast ink */
--color-muted: oklch(50% 0.115 265);        /* Metadata gray-blue */
--color-rule: oklch(85% 0.045 265);         /* Hairline dividers */
--color-focus: oklch(44% 0.2 265);          /* Focus outline */

/* Geometry */
--radius-card: 2px;
--radius-pill: 2px;
--shadow-card: none;
```

### Component Snippet Patterns

1. **Primary Button**:
   ```html
   <button class="btn btn-primary">Book a table</button>
   ```
2. **Quiet / Outline Button**:
   ```html
   <button class="btn btn--quiet">The menu</button>
   ```
3. **Framed Editorial Card**:
   ```html
   <div class="border-[1.5px] border-ink bg-paper p-6 md:p-8 rounded-[2px]">
     <span class="font-body text-sm font-medium text-muted">Category</span>
     <h3 class="font-display text-xl font-extrabold text-ink mt-2">Card Title</h3>
     <p class="font-body text-sm text-ink mt-3">Content description in Literata serif.</p>
   </div>
   ```
4. **Solid Ink Band**:
   ```html
   <div class="band-ink p-8 md:p-10">
     <h2 class="font-display text-paper font-extrabold text-3xl">Band Title</h2>
     <p class="font-body text-paper italic mt-3">White knocked-out body copy.</p>
   </div>
   ```
5. **Hairline Table Row**:
   ```html
   <li class="border-b border-rule py-6 flex items-baseline justify-between">
     <span class="font-display text-lg font-extrabold text-ink">Item Name</span>
     <span class="num font-display text-xl font-extrabold text-ink">₹450</span>
   </li>
   ```
