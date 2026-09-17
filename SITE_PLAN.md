# Crown Plumbing — Sitemap, Wireframes, and Visual Direction

> **Status:** Approved for development on 16 September 2026.

## 1. Experience Strategy

The site should feel like a capable commercial contractor: precise, established, responsive, and technically credible. It should avoid the friendly DIY aesthetic common to residential trade websites. Visitors should reach a direct contact action within one interaction from any page. Emergency plumbing is available 24/7; standard opening hours are Monday to Friday, 08:00–17:00, with Saturday and Sunday closed.

Primary conversion actions:

1. Call Crown Plumbing
2. Start a WhatsApp conversation
3. Send an email

There will be no contact form. The placeholder phone and WhatsApp number is `000 000 0000` until the final number is supplied.

## 2. Sitemap

```text
Home
├── Services overview → Services
├── Company credibility → About Us
└── Call / WhatsApp / Email → Contact Us

About Us
├── Company story
├── Accreditations
├── Workmanship guarantee
└── Services / Contact CTA

Services
├── Eight-service grid
├── Expandable service detail panels
└── Contextual Call / WhatsApp CTA

Contact Us
├── Call
├── WhatsApp
├── Email
└── Service-area confirmation
```

Global elements:

- Sticky navigation
- Persistent Call and WhatsApp actions
- Cross-page trust bar
- Footer with navigation, contact details, service areas, certifications, and guarantee

## 3. Global Page Framework

```text
┌──────────────────────────────────────────────────────────────┐
│ Utility strip: Emergency service • service areas • phone    │
├──────────────────────────────────────────────────────────────┤
│ Logo        Home  About  Services  Contact    Call | WhatsApp│
├──────────────────────────────────────────────────────────────┤
│ PAGE-SPECIFIC CONTENT                                        │
├──────────────────────────────────────────────────────────────┤
│ Trust bar: IOPSA | PIRB | 1-year guarantee | Cape Town      │
├──────────────────────────────────────────────────────────────┤
│ Closing CTA: Need a qualified plumber?  Call | WhatsApp     │
├──────────────────────────────────────────────────────────────┤
│ Footer: logo, links, services, areas, contact, trust marks   │
└──────────────────────────────────────────────────────────────┘
```

On mobile, the navigation collapses into a menu while Call and WhatsApp remain visible as a compact sticky action dock. Hover-only behavior must become tap-to-expand behavior on touch devices.

## 4. Page Wireframes

### Home

```text
┌──────────────────────────────────────────────────────────────┐
│ HERO — full viewport                                         │
│ Eyebrow: Registered plumbing professionals                   │
│ Headline: Commercial standards. Responsive plumbing.         │
│ Supporting copy                                              │
│ [Call now] [WhatsApp]                                        │
│ Trust proof: IOPSA • PIRB • 1-year workmanship guarantee    │
│ Background: supplied video or hero image                     │
├──────────────────────────────────────────────────────────────┤
│ TRUST MARQUEE / BAR                                           │
├──────────────────────────────────────────────────────────────┤
│ SERVICES INTRO                                                │
│ Large statement + 4 featured service cards                   │
│ Cards reveal concise details as the user moves through them  │
│ [View all services]                                           │
├──────────────────────────────────────────────────────────────┤
│ WHY CROWN PLUMBING                                            │
│ 2020 | Registered & accredited | 1-year guarantee | Coverage │
├──────────────────────────────────────────────────────────────┤
│ IMAGE-LED CAPABILITY SECTION                                  │
│ Commercial tone, project imagery, controlled scroll reveal  │
├──────────────────────────────────────────────────────────────┤
│ SERVICE AREAS                                                 │
│ Southern Suburbs • Atlantic Seaboard • Hout Bay • Cape Town │
├──────────────────────────────────────────────────────────────┤
│ CLOSING CTA + FOOTER                                          │
└──────────────────────────────────────────────────────────────┘
```

### About Us

```text
┌──────────────────────────────────────────────────────────────┐
│ PAGE HERO: Built on accountable workmanship                  │
├──────────────────────────────────────────────────────────────┤
│ COMPANY STORY                                                 │
│ Founded/registered 2020 + placeholder legal details          │
├──────────────────────────────────────────────────────────────┤
│ PRINCIPLES                                                    │
│ Professionalism | Compliance | Responsiveness | Quality      │
├──────────────────────────────────────────────────────────────┤
│ ACCREDITATIONS                                                │
│ IOPSA + PIRB cards with plain-language explanations          │
│ Proudly South African mark used only if contextually suitable│
├──────────────────────────────────────────────────────────────┤
│ TEAM / OWNER PLACEHOLDER                                      │
│ Reserved for future portrait and short biography             │
├──────────────────────────────────────────────────────────────┤
│ ONE-YEAR WORKMANSHIP GUARANTEE                                │
├──────────────────────────────────────────────────────────────┤
│ CTA + TRUST BAR + FOOTER                                      │
└──────────────────────────────────────────────────────────────┘
```

### Services

```text
┌──────────────────────────────────────────────────────────────┐
│ PAGE HERO: Plumbing capability, clearly defined              │
├──────────────────────────────────────────────────────────────┤
│ FILTER/INTRO: Residential • Commercial • Emergency           │
├──────────────────────────────────────────────────────────────┤
│ SERVICE GRID                                                  │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                       │
│ │ Emergency│ │ Drains   │ │ Geysers  │                       │
│ └──────────┘ └──────────┘ └──────────┘                       │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                       │
│ │ Toilet & │ │ Leaks &  │ │ Maint.   │                       │
│ │ sewerage │ │ bursts   │ │          │                       │
│ └──────────┘ └──────────┘ └──────────┘                       │
│ ┌──────────┐ ┌───────────────────────────────────┐           │
│ │ Heat &   │ │ New builds & developments        │           │
│ │ solar    │ │                                   │           │
│ └──────────┘ └───────────────────────────────────┘           │
├──────────────────────────────────────────────────────────────┤
│ EXPANDED DETAIL PANEL                                         │
│ Service summary, placeholder specifics, related image        │
│ [Call about this service] [WhatsApp]                          │
├──────────────────────────────────────────────────────────────┤
│ TRUST BAR + FOOTER                                            │
└──────────────────────────────────────────────────────────────┘
```

Desktop cards can preview information on hover, but opening and closing the full panel must also work by click and keyboard. Mobile uses tap-to-expand or an accordion rather than hover.

### Contact Us

```text
┌──────────────────────────────────────────────────────────────┐
│ PAGE HERO: Speak directly to Crown Plumbing                  │
├──────────────────────────────────────────────────────────────┤
│ THREE LARGE CONTACT ACTIONS                                   │
│ [Call 000 000 0000] [WhatsApp] [Email Chris]                 │
├──────────────────────────────────────────────────────────────┤
│ AVAILABILITY / RESPONSE EXPECTATION PLACEHOLDER              │
├──────────────────────────────────────────────────────────────┤
│ SERVICE AREA CONFIRMATION                                     │
│ Southern Suburbs • Atlantic Seaboard • Hout Bay • Cape Town │
├──────────────────────────────────────────────────────────────┤
│ TRUST / ACCREDITATION BLOCK                                   │
├──────────────────────────────────────────────────────────────┤
│ FOOTER                                                        │
└──────────────────────────────────────────────────────────────┘
```

## 5. Visual Direction

### Creative Concept: Engineered Flow

The visual system combines strong architectural grids with fluid motion. The grid communicates commercial reliability; curved masks, line work, and image transitions reference water flow without using obvious droplets, cartoon pipes, or trade-site clichés.

### Colour System

| Role | Colour | Use |
|---|---|---|
| Primary | `#0e3d5d` | Navigation, headings, dark sections, footer |
| Accent | `#f19c1f` | Primary CTAs, active states, key highlights |
| Canvas | `#f4f6f5` | Main page background |
| Surface | `#ffffff` | Cards and elevated content |
| Ink | `#10242f` | Body copy |
| Muted | `#667983` | Secondary text |
| Line | `#d7e0e3` | Rules, borders, and grid lines |

Orange buttons should use deep-blue text for strong contrast. White is used on deep blue. The palette should be applied consistently to a cleaned-up logo asset later.

### Typography

- **Display:** A confident condensed or geometric sans serif for headlines, with tight line height and bold weights
- **Body/UI:** A highly legible modern grotesk sans serif
- **Treatment:** Large editorial headings, short line lengths, uppercase micro-labels, and tabular numerals for dates and credibility statistics
- **Avoid:** Script type, rounded playful fonts, excessive all-caps body copy, and faux-industrial stencil fonts

A practical build pairing is `Barlow Condensed` for display and `Poppins` for body/UI, with local/system fallbacks configured to avoid layout shifts.

### Photography

- Use the supplied bright architectural bathroom and fixture photography as temporary material
- Apply controlled crops and darker blue overlays where text sits on imagery
- Mix wide environment shots with tight fixture details
- Replace generic luxury-bathroom imagery with real team, vehicle, tools, and completed-work photography after the photoshoot
- Avoid presenting stock imagery as Crown Plumbing’s completed work

### Texture and Graphic Language

- Use `grain.png` very subtly over large colour fields
- Use fine technical rules, measurement-like ticks, and restrained line animation
- Reuse the crown geometry as a mask or framing device without repeating the full logo excessively
- Prefer square or lightly rounded corners; avoid overly soft pill-shaped cards

## 6. Motion Direction

Motion should reinforce hierarchy and the idea of controlled flow, not delay contact actions.

Recommended sequence:

1. Hero content reveals immediately; primary CTAs remain interactive throughout
2. A subtle video/image scale settles as the page loads
3. Trust marks move in a slow, continuous marquee or stepped reveal
4. Section headings clip upward as they enter the viewport
5. Service cards stack, pin, or expand through a controlled scroll sequence on desktop
6. Image masks travel horizontally or along a simple crown-derived angle
7. The closing CTA resolves into a quiet, mostly static state

Rules:

- Build the complete experience without animation first
- Respect `prefers-reduced-motion`
- Avoid scroll hijacking
- Keep navigation, Call, and WhatsApp actions stable and immediately usable
- Use GSAP only for sequences that benefit from timelines or ScrollTrigger; use CSS for simple hover and entrance states
- Reduce or remove pinned sequences on smaller screens

## 7. Core Components

- `SiteHeader`
- `MobileMenu`
- `ContactActions`
- `Hero`
- `TrustBar`
- `SectionIntro`
- `ServiceCard`
- `ServiceDetailPanel`
- `CredentialCard`
- `ImageReveal`
- `ServiceAreas`
- `ClosingCTA`
- `SiteFooter`

## 8. Asset Assessment

Available assets:

- `crown-logo.png`: wide wordmark
- `crown-icon.png`: crown icon lockup
- `source-assets/images/crown-logo.svg`: preserved original; a very large SVG wrapper containing embedded raster artwork and not suitable as a clean production vector without rebuilding
- `iopsa-logo.png`: approved for use
- `public/images/pirb-logo.webp`: optimized PIRB logo approved for use; the original is preserved in `source-assets/images`
- `proudly-sa.png`: optional; use only where it supports the final message and complies with its brand guidance
- `hero-img.webp`, `pic-1.webp` to `pic-6.webp`: optimized temporary stock imagery
- `hero-vid.m4v`: optimized 720p hero background video; the original and a 1080p derivative are preserved in `source-assets/videos`
- `grain.png`: subtle surface texture

Before launch, optimize oversized images, create responsive formats, add meaningful alt text, and replace placeholders where final material becomes available.

## 9. Approved Direction

The following direction has been approved for the full build:

- Creative concept: **Engineered Flow**
- Colour palette and proposed font pairing
- Home page section order
- Services interaction: hover preview plus click/tap detail panel
- Use of the hero video versus a static hero image
- Whether the Proudly South African logo belongs in the primary trust bar or only in the footer/About page

The next step is page copy followed by the Next.js implementation.
