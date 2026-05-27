'use client'

import { useInView } from '../hooks/useInView'
import Button from './Button'

// ── Component ─────────────────────────────────────────────────────────────────

export default function AboutSnippet() {
  const { ref: textRef, inView: textIn } = useInView()
  const { ref: imgRef,  inView: imgIn  } = useInView()

  const ease = 'var(--ease-entrance)'

  return (
    <section
      aria-labelledby="about-heading"
      style={{
        background: 'var(--color-section-light-a)',
        padding:    'var(--section-spacing-y) var(--container-padding-x)',
      }}
    >
      <div
        data-id="about-container"
        style={{
          maxWidth: 'var(--container-default)',
          margin:   '0 auto',
        }}
      >
        <div
          data-id="about-grid"
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 'var(--grid-gap-loose)', alignItems: 'center' }}
        >

          {/* Left — text content */}
          <div
            data-id="about-text"
            ref={textRef}
            style={{
              display:       'flex',
              flexDirection: 'column',
              gap:           'var(--grid-gap)',
              opacity:       textIn ? 1 : 0,
              transform:     textIn ? 'none' : 'translateY(24px)',
              transition:    `opacity 600ms ${ease}, transform 600ms ${ease}`,
            }}
          >
            <p
              style={{
                fontSize:      'var(--text-xs)',
                fontWeight:    'var(--font-weight-semibold)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color:         'var(--color-accent)',
                margin:        0,
              }}
            >
              Who We Are
            </p>

            <h2
              id="about-heading"
              style={{
                fontSize:   'var(--text-3xl)',
                fontWeight: 'var(--font-weight-bold)',
                color:      'var(--color-section-text)',
                margin:     0,
                lineHeight: 'var(--leading-tight)',
              }}
            >
              Crown Plumbing —<br />Built on Trust
            </h2>

            <div data-id="about-body" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p
                style={{
                  fontSize:   'var(--text-base)',
                  lineHeight: 'var(--leading-normal)',
                  color:      'var(--color-section-text-sub)',
                  margin:     0,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation.
              </p>
              <p
                style={{
                  fontSize:   'var(--text-base)',
                  lineHeight: 'var(--leading-normal)',
                  color:      'var(--color-section-text-sub)',
                  margin:     0,
                }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>

            <div>
              <Button label="About Us" href="/about" variant="primary" />
            </div>
          </div>

          {/* Right — placeholder image */}
          <div
            data-id="about-image"
            ref={imgRef}
            style={{
              aspectRatio: '4/3',
              width:       '100%',
              borderRadius: 'var(--radius-lg)',
              background:  'var(--color-section-light-b)',
              display:     'flex',
              alignItems:  'center',
              justifyContent: 'center',
              opacity:     imgIn ? 1 : 0,
              transform:   imgIn ? 'none' : 'translateY(24px)',
              transition:  `opacity 700ms ${ease}, transform 700ms ${ease}`,
              transitionDelay: '120ms',
            }}
          >
            <p
              aria-hidden="true"
              style={{
                fontSize:      'var(--text-xs)',
                fontWeight:    'var(--font-weight-semibold)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color:         'var(--color-section-text-sub)',
                margin:        0,
              }}
            >
              Image placeholder
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
