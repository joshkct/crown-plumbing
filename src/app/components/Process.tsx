'use client'

/*
  Section 5 — Process ("How We Work")
  Chosen because premium service sites that convert well give clients a clear
  mental model of what to expect before committing. A numbered, step-by-step
  process section directly addresses the "will this be a hassle?" objection —
  one of the most common reasons people delay calling a tradesperson.
  Dark background maintains the alternating pattern after the light Testimonials section.
*/

import { useInView } from '../hooks/useInView'
import Button from './Button'

// ── Data ──────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    number:      '01',
    title:       'Get in Touch',
    description: 'Call or send a message. We gather the details, ask the right questions, and get back to you without delay.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.06 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.1 12.1 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.1 12.1 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    number:      '02',
    title:       'Site Assessment',
    description: 'One of our experienced plumbers visits to properly evaluate the job — no guesswork, just an honest look.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    number:      '03',
    title:       'Clear Quote',
    description: 'You receive a transparent, itemised quote — fair pricing, no hidden costs, no pressure.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number:      '04',
    title:       'Expert Work',
    description: 'We carry out the job with care, precision, and respect for your home — done right the first time.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number:      '05',
    title:       'Peace of Mind',
    description: 'We follow up after the work is complete to make sure everything is running perfectly and you are satisfied.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Process() {
  const { ref: headRef, inView: headIn } = useInView()
  const { ref: gridRef, inView: gridIn  } = useInView()

  return (
    <section
      aria-labelledby="process-heading"
      style={{
        background: 'var(--color-section-light-b)',
        padding:    'var(--section-spacing-y) var(--container-padding-x)',
      }}
    >
      <div data-id="process-container" style={{ maxWidth: 'var(--container-default)', margin: '0 auto' }}>

        {/* Section header */}
        <div
          ref={headRef}
          style={{
            textAlign:    'center',
            marginBottom: 'var(--grid-gap-loose)',
            opacity:      headIn ? 1 : 0,
            transform:    headIn ? 'none' : 'translateY(20px)',
            transition:   'opacity 600ms var(--ease-entrance), transform 600ms var(--ease-entrance)',
          }}
        >
          <p
            style={{
              fontSize:      'var(--text-xs)',
              fontWeight:    'var(--font-weight-semibold)',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              color:         'var(--color-accent)',
              margin:        '0 0 0.75rem',
            }}
          >
            How We Work
          </p>
          <h2
            id="process-heading"
            style={{
              fontSize:   'var(--text-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              color:      'var(--color-section-text)',
              margin:     '0 0 1rem',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Simple. Transparent. Reliable.
          </h2>
          <p
            style={{
              fontSize:     'var(--text-base)',
              color:        'var(--color-section-text-sub)',
              margin:       0,
              maxWidth:     '44ch',
              marginInline: 'auto',
              lineHeight:   'var(--leading-normal)',
            }}
          >
            We believe good work starts with a clear process. Here is exactly what happens when you reach out.
          </p>
        </div>

        {/* Steps grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-5"
          style={{ gap: 'var(--grid-gap)', marginBottom: 'var(--grid-gap-loose)' }}
        >
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              data-id={`process-step-${step.number}`}
              style={{
                display:       'flex',
                flexDirection: 'column',
                gap:           '1rem',
                padding:       'var(--card-padding)',
                borderRadius:  'var(--radius-lg)',
                background:    'var(--color-section-dark-card)',
                border:        '1px solid color-mix(in srgb, var(--color-liquid-glow) 20%, transparent)',
                boxShadow:     '0 8px 40px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.18), inset 0 1px 0 color-mix(in srgb, var(--color-liquid-glow) 10%, transparent)',
                opacity:       gridIn ? 1 : 0,
                transform:     gridIn ? 'none' : 'translateY(24px)',
                transition:    `opacity 600ms var(--ease-entrance), transform 600ms var(--ease-entrance)`,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div data-id={`process-step-${step.number}-header`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontSize:      'var(--text-2xl)',
                    fontWeight:    'var(--font-weight-bold)',
                    color:         'var(--color-accent)',
                    lineHeight:    1,
                    letterSpacing: 'var(--tracking-tight)',
                  }}
                >
                  {step.number}
                </span>
                <span style={{ color: 'color-mix(in srgb, var(--color-liquid-glow) 55%, transparent)' }}>
                  {step.icon}
                </span>
              </div>

              <div style={{ width: '2rem', height: '1px', background: 'color-mix(in srgb, var(--color-accent) 40%, transparent)' }} aria-hidden="true" />

              <h3
                style={{
                  fontSize:   'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color:      'var(--color-text-inverse)',
                  margin:     0,
                  lineHeight: 'var(--leading-snug)',
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontSize:   'var(--text-sm)',
                  color:      'var(--color-section-card-text)',
                  margin:     0,
                  lineHeight: 'var(--leading-normal)',
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div data-id="process-cta" style={{ textAlign: 'center' }}>
          <Button label="Get in Touch" href="/contact" variant="primary" size="lg" />
        </div>

      </div>
    </section>
  )
}
