# Crown Plumbing Website Project Brief

## Summary

Client website build for Crown Plumbing — brief details, services, branding, and planning status.

## Details

- **Business name:** Crown Plumbing
- **Tagline:** “FLOWING WITH EXCELLENCE”
- **Branding:** Crown logo; supplied as `crown-logo.png`, `crown-icon.png`, and `crown-logo.svg` in `public/images`. The artwork should be cleaned up or rebuilt later because the current SVG embeds raster artwork rather than providing a truly scalable vector.
- **Brand colours:** Deep blue `#0e3d5d` and orange `#f19c1f`
- **Service areas:** Southern Suburbs, Atlantic Seaboard, Hout Bay, and Cape Town
- **Preferred contact methods:** WhatsApp, phone call, and email
- **Phone and WhatsApp:** `000 000 0000` (placeholder)
- **Work email:** chris@crownplumbing.co.za
- **Opening hours:** Monday to Friday, 08:00–17:00; Saturday and Sunday closed
- **Emergency availability:** 24/7
- **Services offered:**
  - Emergency plumbing
  - Blocked drains
  - Geyser repair and installation
  - Toilet and sewerage services
  - Burst pipes and leaks
  - Maintenance
  - Heat pumps and solar geysers
  - Full plumbing installations for new buildings and developments
- **Business registration date:** 23 September 2020
- **Certifications and memberships:**
  - IOPSA member
  - PIRB registered
  - Plumbing Industry Regulatory Board
  - Institute of Plumbing South Africa
- No team or portrait photos are available yet; the client is open to arranging a photoshoot
- No customer testimonials are available, and the business is not currently listed on Google or other review platforms
- Offers a one-year workmanship guarantee
- Wants prominent WhatsApp and **Call Now** buttons on the site
- Likes the style and copy approach used on the Aquaholic website as a reference point
- The Aquaholic copy was shared as a stylistic reference only and must not be reused
- Required pages: Home, About Us, Services, and Contact Us
- **Target tone:** Professional and commercial, rather than homeowner-friendly or casual
- **Site goals:** Lead generation and brand credibility
- Wants a highly complex build with extensive scroll animations and triggers, referencing GSAP as an example
- Wants to use a Codex → GitHub → Vercel pipeline for this build rather than the usual Windsurf pipeline
- A domain or hosting package may already exist because the client has a working `@crownplumbing.co.za` email address
- The site should still be deployed through Vercel to demonstrate progress to the client
- Stock placeholder images will be used until real photography is available
- Placeholder copy will be used for service descriptions and legal registration details until final copy is supplied
- There will be no contact form
- Approved certification assets are available in `public/images`: `iopsa-logo.png`, `pirb-logo.png`, and `proudly-sa.png`
- Confirmed that Codex will be used for this build
- The Services page will show all eight services in a single grid or list; hovering over a service will open a larger detail view
- A trust bar featuring certifications, the guarantee, and related credibility signals should appear on every page and in the footer
- The most prominent trust-bar treatment may be featured in the Home page hero
- The proposed sitemap and page-purpose structure has been approved

## Sitemap and Page Structure

### 1. Home

**Purpose:** Create a strong first impression and provide the fastest possible path to contact. This page must work hard because most visitors will either have a plumbing emergency or be comparing several companies quickly.

Likely sections:

- **Hero:** Crown Plumbing name and logo, tagline, a strong reliability- or professionalism-led headline, immediate Call and WhatsApp buttons, and the most prominent trust element—such as certifications or the one-year guarantee—because there are no reviews to feature yet
- **Services overview:** A condensed version of the services grid that links to the full Services page
- **Why Crown Plumbing:** Certifications, registration since 2020, service-area coverage, and the workmanship guarantee; this credibility section should do the job that reviews would normally perform
- **Service-area callout:** Southern Suburbs, Atlantic Seaboard, Hout Bay, and Cape Town, allowing visitors to self-qualify
- **Closing CTA:** Repeat the Call and WhatsApp buttons before the footer

### 2. About Us

**Purpose:** Build trust and communicate professionalism, especially because there are no testimonials to rely on. This page carries much of the brand-credibility goal.

Likely sections:

- **Company story:** Registered in 2020 and what the business stands for
- **Certifications and registrations:** Briefly explain IOPSA, PIRB, and the Plumbing Industry Regulatory Board because not every visitor will know what they mean
- **Team or owner section:** Use a placeholder until photography is available
- **Guarantee and workmanship section**
- **CTA:** Direct visitors to Services or Contact Us

### 3. Services

**Purpose:** Present the full range of work clearly and allow visitors to identify the service they need.

Structure:

- A grid of all eight services, represented by an icon and short label
- On hover, open an expanded panel or modal with fuller details for each service
- Use the expanded view for professional specifics that require explanation, such as CoC issuance and RPZ valve installation
- Include a contextual CTA in each expanded service view, such as “Request a quote for this service”

### 4. Contact Us

**Purpose:** Convert visitors. Every other page should funnel visitors here or directly to the Call and WhatsApp actions.

Likely sections:

- Clearly present the three contact methods: Call, WhatsApp, and email at chris@crownplumbing.co.za
- Confirm the service areas again
- Do not include a contact form; use direct Call, WhatsApp, and Email actions instead
- Repeat the trust bar as final reassurance before a visitor commits

## Cross-Page Elements

- A trust bar featuring certifications, the workmanship guarantee, service areas, or similar credibility signals on every page and in the footer
- Persistent WhatsApp and Call buttons, likely in a sticky header or as floating actions, reflecting the lead-generation priority
