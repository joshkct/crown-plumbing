'use client'

import { useState } from 'react'
import { useInView } from '../hooks/useInView'

// ── Data ──────────────────────────────────────────────────────────────────────

const SIGNALS = [
  {
    heading:    '10+ Years Experience',
    descriptor: 'Trusted by Cape Town homeowners since 2014',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
      </svg>
    ),
  },
  {
    heading:    '500+ Jobs Completed',
    descriptor: 'From emergency call-outs to full installations',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    heading:    '24/7 Emergency Service',
    descriptor: "We answer the call when others don't",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.06 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.1 12.1 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.1 12.1 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function TrustSignals() {
  const { ref, inView } = useInView()
  const [hoveredCard, setHovered] = useState<number | null>(null)

  return (
    <section
      aria-label="Why choose Crown Plumbing"
      style={{
        background: 'var(--color-section-light-a)',
        padding:    'var(--section-spacing-y) var(--container-padding-x)',
      }}
    >
      <div data-id="trust-signals-container" style={{ maxWidth: 'var(--container-default)', margin: '0 auto' }}>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 'var(--grid-gap)' }}
        >
          {SIGNALS.map((signal, i) => {
            const hovered = hoveredCard === i
            return (
              // Outer — entrance animation only
              <div
                key={signal.heading}
                data-id={`trust-signals-card-${i}`}
                style={{
                  opacity:         inView ? 1 : 0,
                  transform:       inView ? 'none' : 'translateY(24px)',
                  transition:      `opacity 600ms var(--ease-entrance), transform 600ms var(--ease-entrance)`,
                  transitionDelay: `${i * 130}ms`,
                }}
              >
                {/* Inner — hover effects */}
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display:       'flex',
                    flexDirection: 'column',
                    alignItems:    'center',
                    textAlign:     'center',
                    gap:           '1.25rem',
                    padding:       'var(--card-padding)',
                    borderRadius:  'var(--radius-lg)',
                    background:    'var(--color-section-dark-card)',
                    border:        hovered
                      ? '1px solid color-mix(in srgb, var(--color-liquid-glow) 40%, transparent)'
                      : '1px solid color-mix(in srgb, var(--color-liquid-glow) 20%, transparent)',
                    boxShadow:     hovered
                      ? '0 16px 56px rgba(0,0,0,0.36), 0 4px 12px rgba(0,0,0,0.24), inset 0 1px 0 color-mix(in srgb, var(--color-liquid-glow) 18%, transparent)'
                      : '0 8px 40px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.18), inset 0 1px 0 color-mix(in srgb, var(--color-liquid-glow) 10%, transparent)',
                    transform:     hovered ? 'translateY(-6px)' : 'none',
                    transition:    'transform var(--transition-hover), box-shadow var(--transition-hover), border-color var(--transition-hover)',
                    height:        '100%',
                  }}
                >
                  <span
                    style={{
                      color:      'var(--color-accent)',
                      display:    'flex',
                      transform:  hovered ? 'scale(1.15)' : 'scale(1)',
                      transition: 'transform var(--transition-hover)',
                    }}
                  >
                    {signal.icon}
                  </span>

                  <h2
                    style={{
                      fontSize:   'var(--text-2xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color:      'var(--color-text-inverse)',
                      margin:     0,
                      lineHeight: 'var(--leading-tight)',
                    }}
                  >
                    {signal.heading}
                  </h2>

                  <p
                    style={{
                      fontSize:   'var(--text-sm)',
                      color:      'var(--color-section-card-text)',
                      margin:     0,
                      lineHeight: 'var(--leading-normal)',
                    }}
                  >
                    {signal.descriptor}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
