'use client'

import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import Button from './Button'

// ── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title:       'Emergency Plumbing',
    description: 'Day or night, we respond fast. When a plumbing crisis hits, you need someone reliable on the line immediately.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title:       'Geyser Repair & Installation',
    description: 'Expert diagnosis, same-day repairs, and full geyser replacements — keeping your hot water running smoothly.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title:       'Blocked Drains',
    description: 'From stubborn sink blockages to full-line inspections, we clear and maintain your drains the right way.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
  },
  {
    title:       'Burst Pipes & Leaks',
    description: 'Rapid detection and repair before water damage takes hold. We act quickly and work cleanly.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
  },
  {
    title:       'Heat Pumps & Solar Geysers',
    description: 'Energy-efficient heating solutions that lower your bills and reduce your carbon footprint long-term.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title:       'Maintenance',
    description: 'Scheduled inspections and proactive upkeep to catch small issues before they become expensive ones.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Services() {
  const { ref, inView }           = useInView()
  const [hoveredCard, setHovered] = useState<number | null>(null)

  return (
    <section
      aria-labelledby="services-heading"
      style={{
        background: 'var(--color-contrast-dark)',
        padding:    'var(--section-spacing-y) var(--container-padding-x)',
      }}
    >
      <div data-id="services-container" style={{ maxWidth: 'var(--container-default)', margin: '0 auto' }}>

        {/* Section header */}
        <div
          data-id="services-header"
          style={{
            textAlign:    'center',
            marginBottom: 'var(--grid-gap-loose)',
            opacity:      inView ? 1 : 0,
            transform:    inView ? 'none' : 'translateY(20px)',
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
            What We Do
          </p>
          <h2
            id="services-heading"
            style={{
              fontSize:   'var(--text-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              color:      'var(--color-text-inverse)',
              margin:     '0 0 1rem',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              fontSize:  'var(--text-base)',
              color:     'color-mix(in srgb, var(--color-liquid-glow) 70%, transparent)',
              margin:    0,
              maxWidth:  '44ch',
              marginInline: 'auto',
              lineHeight: 'var(--leading-normal)',
            }}
          >
            From urgent call-outs to long-term care, we cover every aspect of residential and light commercial plumbing.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 'var(--grid-gap)' }}
        >
          {SERVICES.map((service, i) => {
            const hovered = hoveredCard === i
            return (
              // Outer wrapper — entrance animation only (opacity + translateY)
              <div
                key={service.title}
                data-id={`service-card-wrapper-${i}`}
                style={{
                  opacity:         inView ? 1 : 0,
                  transform:       inView ? 'none' : 'translateY(24px)',
                  transition:      `opacity 600ms var(--ease-entrance), transform 600ms var(--ease-entrance)`,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
              {/* Inner card — hover effects only (lift + shadow) */}
              <div
                data-id={`service-card-${i}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display:       'flex',
                  flexDirection: 'column',
                  borderRadius:  'var(--radius-lg)',
                  background:    'color-mix(in srgb, var(--color-liquid-glow) 5%, transparent)',
                  border:        '1px solid color-mix(in srgb, var(--color-liquid-glow) 12%, transparent)',
                  boxShadow:     hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                  overflow:      'hidden',
                  transform:     hovered ? 'var(--state-hover-lift)' : 'none',
                  transition:    'box-shadow var(--transition-hover), transform var(--transition-hover)',
                  height:        '100%',
                }}
              >
                {/* Placeholder image area */}
                <div
                  data-id={`service-card-${i}-image`}
                  aria-hidden="true"
                  style={{
                    height:         '160px',
                    background:     'color-mix(in srgb, var(--color-liquid-glow) 8%, transparent)',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    flexShrink:     0,
                  }}
                >
                  <span style={{ color: 'var(--color-accent)', opacity: hovered ? 1 : 0.7, transition: 'opacity var(--transition-hover)' }}>
                    {service.icon}
                  </span>
                </div>

                {/* Content */}
                <div
                  data-id={`service-card-${i}-content`}
                  style={{
                    padding:       'var(--card-padding)',
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           '0.75rem',
                    flexGrow:      1,
                  }}
                >
                  <h3
                    style={{
                      fontSize:   'var(--text-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color:      'var(--color-text-inverse)',
                      margin:     0,
                      lineHeight: 'var(--leading-tight)',
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize:   'var(--text-sm)',
                      color:      'var(--color-section-card-text)',
                      margin:     0,
                      lineHeight: 'var(--leading-normal)',
                      flexGrow:   1,
                    }}
                  >
                    {service.description}
                  </p>

                  <div style={{ paddingTop: '0.5rem' }}>
                    <Button label="Learn More" href="/services" variant="primary" size="sm" />
                  </div>
                </div>
              </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
