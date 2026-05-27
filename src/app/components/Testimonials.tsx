'use client'

import { useInView } from '../hooks/useInView'

// ── Data ──────────────────────────────────────────────────────────────────────

const REVIEWS = [
  {
    quote:      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    name:       'Sarah M.',
    descriptor: 'Homeowner, Constantia',
  },
  {
    quote:      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    name:       'James T.',
    descriptor: 'Homeowner, Claremont',
  },
  {
    quote:      'Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    name:       'Linda K.',
    descriptor: 'Property Manager, Sea Point',
  },
]

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: '3px' }} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="var(--color-accent)"
          stroke="var(--color-accent)"
          strokeWidth="1"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const { ref, inView } = useInView()

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      style={{
        background: 'var(--color-contrast-dark)',
        padding:    'var(--section-spacing-y) var(--container-padding-x)',
      }}
    >
      <div data-id="testimonials-container" style={{ maxWidth: 'var(--container-default)', margin: '0 auto' }}>

        {/* Section header */}
        <div
          data-id="testimonials-header"
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
            What Our Clients Say
          </p>
          <h2
            id="testimonials-heading"
            style={{
              fontSize:   'var(--text-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              color:      'var(--color-text-inverse)',
              margin:     0,
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Trusted by Homeowners Across Cape Town
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 'var(--grid-gap)' }}
        >
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              data-id={`testimonial-card-${i}`}
              style={{
                background:    'color-mix(in srgb, var(--color-liquid-glow) 5%, transparent)',
                borderRadius:  'var(--radius-lg)',
                padding:       'var(--card-padding)',
                boxShadow:     'none',
                border:        '1px solid color-mix(in srgb, var(--color-liquid-glow) 12%, transparent)',
                display:       'flex',
                flexDirection: 'column',
                gap:           '1rem',
                opacity:       inView ? 1 : 0,
                transform:     inView ? 'none' : 'translateY(24px)',
                transition:    `opacity 600ms var(--ease-entrance), transform 600ms var(--ease-entrance)`,
                transitionDelay: `${i * 110}ms`,
              }}
            >
              <StarRating />

              <p
                style={{
                  fontSize:   'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color:      'var(--color-section-card-text)',
                  margin:     0,
                  flexGrow:   1,
                }}
              >
                &ldquo;{review.quote}&rdquo;
              </p>

              <div data-id={`testimonial-card-${i}-attribution`}>
                <p
                  style={{
                    fontSize:   'var(--text-sm)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color:      'var(--color-text-inverse)',
                    margin:     '0 0 0.25rem',
                  }}
                >
                  {review.name}
                </p>
                <p
                  style={{
                    fontSize: 'var(--text-xs)',
                    color:    'var(--color-section-card-text)',
                    margin:   0,
                  }}
                >
                  {review.descriptor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
