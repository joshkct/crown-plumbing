<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

---

<!-- BEGIN:crown-plumbing-rules -->

# Crown Plumbing — Project Rules & Current State

Read and internalise this file before making any changes.
These rules are non-negotiable and apply to every file, component, and line of code.

---

## PROJECT STACK

- Next.js (App Router)
- Tailwind CSS v4
- TypeScript
- CSS-first design tokens (`src/styles/tokens.css`)
- No component libraries (no shadcn, no MUI, no Chakra)
- No animation libraries (no framer-motion, no GSAP)
- No icon libraries (no Lucide, no Heroicons, no FontAwesome)

---

## PROJECT COLOURS

| Token                          | Light Value | Dark Override |
| ------------------------------ | ----------- | ------------- |
| `--color-primary`              | `#0f1d5c`   | —             |
| `--color-accent`               | `#d45d35`   | —             |
| `--color-liquid-glow`          | `#b8d7ea`   | —             |
| `--color-contrast-dark`        | `#12202b`   | —             |
| `--color-background-main`      | `#f7f5f2`   | `#12202b`     |
| `--color-background-secondary` | `#eeebe6`   | `#182d3a`     |
| `--color-surface-frost`        | `#dfe5ea`   | `#1e3448`     |
| `--color-surface-raised`       | `#ffffff`   | `#243c50`     |
| `--color-text-primary`         | `#1f2a33`   | `#eae7e2`     |
| `--color-text-secondary`       | `#5f6b76`   | `#8fa0ad`     |
| `--color-text-inverse`         | `#ffffff`   | —             |
| `--color-border-soft`          | `#d6dde3`   | `#243c50`     |
| `--color-success`              | `#2d7a52`   | —             |
| `--color-warning`              | `#c07b14`   | —             |
| `--color-danger`               | `#bf3b2a`   | —             |

### Static Section Palette (no dark-mode override — defined in `:root` only)

These tokens were added to support always-light sections that must not invert in dark mode.

| Token                       | Value     | Usage                            |
| --------------------------- | --------- | -------------------------------- |
| `--color-section-light-a`   | `#f7f5f2` | Light section background A       |
| `--color-section-light-b`   | `#eeebe6` | Light section background B       |
| `--color-section-text`      | `#1f2a33` | Headings on light sections       |
| `--color-section-text-sub`  | `#5f6b76` | Body text on light sections      |
| `--color-section-border`    | `#d6dde3` | Borders on light sections        |
| `--color-section-dark-card` | `#182d3a` | Dark cards inside light sections |
| `--color-section-card-text` | `#eae7e2` | Paragraph text on dark cards     |

---

## DESIGN TOKEN SYSTEM

All styling must reference tokens from `src/styles/tokens.css`.
Tokens are imported globally via `src/app/globals.css`.
Tailwind CSS v4 reads `:root` tokens directly.

Token categories:

- Colours: `--color-*`
- Typography: `--text-*`, `--font-weight-*`, `--leading-*`, `--tracking-*`
- Spacing: `--spacing`, `--section-spacing-*`, `--container-*`, `--grid-gap-*`
- Radius: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`
- Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
- Motion: `--duration-*`, `--ease-*`, `--transition-*`
- Z-index: `--z-header`, `--z-overlay`, `--z-modal`, `--z-toast`
- Components: `--btn-*`, `--input-*`, `--card-*`, `--nav-*`
- Layout: `--container-*`, `--grid-*`
- Interaction: `--state-*`, `--focus-ring*`, `--transition-*`

---

## STYLING RULES — STRICTLY ENFORCED

**DO:**

- Reference every colour, spacing, font size, shadow, radius, and transition via `var()` CSS token references
- Use `style={{ }}` with `var()` for all component styling
- Use Tailwind utility classes only where they map directly to a token
- Use `color-mix(in srgb, var(--token) N%, transparent)` for opacity variants
- Use `rgba(0,0,0,N)` for shadow blacks only — this is the one acceptable hardcoded value
- Use `currentColor` on all inline SVG icons
- Keep all transitions within the token system

**DO NOT:**

- Hardcode any hex colour values anywhere in components
- Hardcode any pixel or rem spacing values — use tokens
- Hardcode any font sizes — use `var(--text-*)` tokens
- Hardcode any transition timing — use token references
- Use CSS modules, styled-components, or Tailwind arbitrary values e.g. `text-[22px]`
- Modify `src/styles/tokens.css` unless explicitly instructed
- Modify `src/app/globals.css` unless explicitly instructed
- Install new packages without explicit instruction

---

## COMPONENT RULES

Every component must:

- Be a `.tsx` file in `src/app/components/`
- Be fully typed — no `any` types
- Have `"use client"` directive only if it uses `useState`, `useEffect`, `useRef`, or any browser API
- Be mobile-first responsive
- Use semantic HTML elements
- Handle its own loading and error states if it fetches data

### Reusable Global Components

| Component | Path                               |
| --------- | ---------------------------------- |
| Navbar    | `src/app/components/Navbar.tsx`    |
| Hero      | `src/app/components/Hero.tsx`      |
| Button    | `src/app/components/Button.tsx`    |
| CrownLogo | `src/app/components/CrownLogo.tsx` |
| Footer    | `src/app/components/Footer.tsx`    |

### Button Component

Every CTA and button on the site must use `src/app/components/Button.tsx`.
Never create a one-off button outside this component.

- Variants: `primary` | `secondary` | `ghost`
- Sizes: `sm` | `md` | `lg`
- Supports: `href` (renders as Link or `<a>`), `onClick`, `fullWidth`, `disabled`, `type`, `ariaLabel`, `newTab`

### Hero Component

`Hero` accepts an optional `backgroundImage?: string` prop.

- When provided: renders a Next.js `<Image fill priority />` as the background
- When omitted: renders the `<video>` background

---

## NAMING CONVENTION — `data-id` ATTRIBUTES

All key structural `div` elements carry a `data-id` attribute for DevTools identification.

| Component    | Key `data-id` values                                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Navbar       | `navbar-inner`, `navbar-right`, `navbar-cursor-glow`, `mobile-menu-panel`, `mobile-sticky-ctas`                                                                    |
| Hero         | `hero-ledge`, `hero-ledge-inner`, `hero-cluster-left`, `hero-divider`, `hero-cluster-right`, `hero-cta-row`, `hero-gradient-top`                                   |
| TrustSignals | `trust-signals-container`, `trust-signals-card-{n}`                                                                                                                |
| Services     | `services-container`, `services-header`, `service-card-wrapper-{n}`, `service-card-{n}`, `service-card-{n}-image`, `service-card-{n}-content`                      |
| AboutSnippet | `about-container`, `about-grid`, `about-text`, `about-body`, `about-image`                                                                                         |
| Testimonials | `testimonials-container`, `testimonials-header`, `testimonial-card-{n}`, `testimonial-card-{n}-attribution`                                                        |
| Process      | `process-container`, `process-step-{n}`, `process-step-{n}-header`, `process-cta`                                                                                  |
| Footer       | `footer-container`, `footer-grid`, `footer-brand`, `footer-social`, `footer-services`, `footer-contact`, `footer-contact-details`, `footer-bottom`, `footer-legal` |

---

## ICONS

- Use inline SVG only — no icon libraries
- All SVG icons must use `currentColor` for fill/stroke
- Set `aria-hidden="true"` on all decorative icons
- Set `aria-label` on all icon-only interactive elements
- Standard icon size: 24×24px, `viewBox="0 0 24 24"`

---

## ANIMATIONS

Motion tokens:

- `--duration-fast: 150ms`
- `--duration-base: 260ms`
- `--duration-slow: 420ms`
- `--ease-standard: cubic-bezier(0.32, 0.08, 0.24, 1)`
- `--ease-entrance: cubic-bezier(0.16, 0.84, 0.24, 1)`
- `--ease-exit: cubic-bezier(0.48, 0.00, 0.72, 0.32)`

Rules:

- Scroll animations use `IntersectionObserver` only — use the `useInView` hook at `src/app/hooks/useInView.ts`
- Reduced motion must always be respected
- Clean up all event listeners and timeouts in `useEffect` return functions
- Do not use pulsating rings or looping ambient animations
- Apply scroll animations to section headings and card groups only — not every child element

---

## GLASSMORPHISM SYSTEM

The navbar and hero establish the glass visual language.

Standard glass element:

- Background: `color-mix(in srgb, var(--color-primary) N%, transparent)` where N is 8–35%
- Backdrop filter: `blur(16px)` to `blur(24px)`
- Border: `1px solid color-mix(in srgb, var(--color-liquid-glow) 25%, transparent)`
- Box shadow: `0 8px 32px rgba(0,0,0,0.3)` minimum
- Use `overflow: clip` not `overflow: hidden` on glass containers

**Hero ledge exception:** Uses a nested mix for a dark-but-transparent effect:

```
color-mix(in srgb, color-mix(in srgb, var(--color-primary) 30%, var(--color-contrast-dark)) 82%, transparent)
```

---

## DARK/LIGHT SECTION ALTERNATION — CURRENT STATE

| Section      | Theme     | Background Token                | Notes                                                          |
| ------------ | --------- | ------------------------------- | -------------------------------------------------------------- |
| Hero         | Dark      | `hero-img.jpg` image background | Ledge uses nested glass mix                                    |
| TrustSignals | **Light** | `--color-section-light-a`       | Dark cards (`--color-section-dark-card`) with hover animations |
| Services     | **Dark**  | `--color-contrast-dark`         | Dark-tinted cards                                              |
| AboutSnippet | **Light** | `--color-section-light-a`       | Image placeholder uses `--color-section-light-b`               |
| Testimonials | **Dark**  | `--color-contrast-dark`         | Dark-tinted cards                                              |
| Process      | **Light** | `--color-section-light-b`       | Dark cards (`--color-section-dark-card`)                       |
| Footer       | Dark      | `--color-contrast-dark`         | —                                                              |

### Dark section text colours

- Headings: `var(--color-text-inverse)`
- Eyebrow: `var(--color-accent)`
- Card paragraph text: `var(--color-section-card-text)` (`#eae7e2`)

### Light section text colours

- Headings: `var(--color-section-text)`
- Body: `var(--color-section-text-sub)`
- Eyebrow: `var(--color-accent)`

### Dark cards inside light sections (TrustSignals, Process)

- Background: `var(--color-section-dark-card)` (`#182d3a`)
- Border: `1px solid color-mix(in srgb, var(--color-liquid-glow) 20%, transparent)`
- Box shadow: `0 8px 40px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.18), inset 0 1px 0 color-mix(...)`
- Heading: `var(--color-text-inverse)`
- Paragraph: `var(--color-section-card-text)`
- Hover: lift `translateY(-6px)`, boosted shadow, border glow to 40%, icon scale 1.15×
- Entrance animation on outer wrapper; hover effects on inner wrapper (never mix on same div)

---

## LAYOUT SYSTEM

- All sections: `padding: var(--section-spacing-y) var(--container-padding-x)`
- Standard container: `maxWidth: var(--container-default)`
- Wide container: `maxWidth: var(--container-wide)` (hero/full bleed)
- Prose container: `maxWidth: var(--container-prose)` (text-only sections)
- Grid gaps: `var(--grid-gap)` / `var(--grid-gap-tight)` / `var(--grid-gap-loose)`

---

## TYPOGRAPHY HIERARCHY

| Role                 | Token                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| Page title (H1)      | `var(--text-4xl)` or `var(--text-5xl)`                                                                    |
| Section heading (H2) | `var(--text-3xl)`                                                                                         |
| Sub-heading (H3)     | `var(--text-2xl)`                                                                                         |
| Section intro        | `var(--text-xl)`                                                                                          |
| Eyebrow label        | `var(--text-xs)`, uppercase, `var(--tracking-wide)`, `var(--font-weight-semibold)`, `var(--color-accent)` |
| Body copy            | `var(--text-base)`, `var(--leading-normal)`                                                               |
| Secondary text       | `var(--text-sm)`                                                                                          |
| Micro labels         | `var(--text-2xs)`                                                                                         |

Font weights: `--font-weight-normal` / `--font-weight-medium` / `--font-weight-semibold` / `--font-weight-bold`

---

## ACCESSIBILITY

- Every interactive element must have a visible focus ring: `outline: var(--focus-ring)`, `outlineOffset: var(--focus-ring-offset)`
- Semantic HTML: use `<section>`, `<nav>`, `<header>`, `<footer>`, `<main>`, `<article>`, `<h1>`–`<h6>` correctly
- Only one `<h1>` per page
- All images: descriptive `alt` text, or `alt=""` if decorative
- All icon-only buttons: `aria-label`
- All decorative SVGs: `aria-hidden="true"`
- Colour contrast must meet WCAG AA minimum
- All form inputs need associated `<label>` elements
- Videos must have `autoPlay muted loop playsInline aria-hidden="true"`

---

## DARK MODE

- Dark mode is OS-driven — no toggle
- Activated by `data-theme="dark"` on `<html>` set by the inline script in `layout.tsx`
- All standard token references handle dark mode automatically via `:root[data-theme="dark"]`
- Static section tokens (`--color-section-*`) intentionally have NO dark mode override
- Never use Tailwind `dark:` classes

---

## FILE STRUCTURE

```
src/
  app/
    components/
      Navbar.tsx
      Hero.tsx           ← accepts backgroundImage?: string prop
      Button.tsx
      CrownLogo.tsx
      Footer.tsx
      TrustSignals.tsx
      Services.tsx
      AboutSnippet.tsx
      Testimonials.tsx
      Process.tsx
      [new components here]
    hooks/
      useInView.ts
    page.tsx
    layout.tsx
    globals.css
    services/
      page.tsx
  styles/
    tokens.css
    utilities.css
    animations.css
public/
  images/
    crown-logo.svg
    grain.png
    hero-img.jpg         ← active hero background (home + services pages)
  videos/
    hero-vid.mp4         ← available but not currently in use
scripts/
  generate-grain.mjs
```

---

## CODE QUALITY

- TypeScript throughout — no `any` types
- All props interfaces explicitly defined
- No `console.log` statements in production components
- Clean up all event listeners and timeouts on unmount
- Use `const` over `let` where possible
- Keep components focused — one responsibility per file
- Extract repeated logic into hooks in `src/app/hooks/`

---

## BEFORE STARTING ANY TASK

1. Read this file
2. Read every file listed as relevant to the task
3. Ask clarifying questions if anything is ambiguous
4. State what you are going to do before doing it
5. Make surgical changes only — do not refactor unrelated code
6. Do not modify `tokens.css` or `globals.css` unless explicitly instructed
7. Do not install packages unless explicitly instructed
8. After completing, list every file created or modified and summarise any autonomous decisions made
<!-- END:crown-plumbing-rules -->
