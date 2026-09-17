# Crown Plumbing Website

Responsive multi-page website for Crown Plumbing, built with Next.js, React, TypeScript, Tailwind CSS, and GSAP.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Routes

- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/contact` — Contact Us

## Current status

- Approved responsive visual system implemented
- All four page layouts implemented
- Local Barlow Condensed and Poppins fonts bundled
- IOPSA and PIRB trust signals included site-wide
- Eight service areas implemented, including new buildings and developments
- Direct Call, WhatsApp, and Email actions implemented
- Contact form intentionally omitted
- Accessible tap/click service-detail expansion implemented
- Mobile sticky Call and WhatsApp actions implemented
- Reduced-motion foundation included
- Production build passing
- Production media derivatives generated; original high-resolution assets preserved in `source-assets/`
- GSAP motion system implemented across the Home, About, Services, and Contact pages
- Inner-page hero reveals, grouped content staggers, image masks, service-detail transitions, and global CTA/footer motion included
- Site-wide Lenis smooth scrolling integrated with GSAP ScrollTrigger and reduced-motion preferences

Motion is progressively enhanced and respects each visitor's reduced-motion preference.

## Placeholders to replace

- Phone and WhatsApp number: `000 000 0000`
- Legal business name and registration number
- Final owner/team biography and photography
- Final guarantee terms
- IOPSA/PIRB registration identifiers if required

## Project documents

- [Project brief](./PROJECT_BRIEF.md)
- [Site plan](./SITE_PLAN.md)
- [Page copy](./PAGE_COPY.md)
