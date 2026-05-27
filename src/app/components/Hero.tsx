'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// ── Animation state ────────────────────────────────────────────────────────────

interface AnimState {
  cardVisible:    boolean
  contentOpacity: number[]
}

const INIT: AnimState = {
  cardVisible:    false,
  contentOpacity: [0, 0, 0, 0],
}

// ── Hero ───────────────────────────────────────────────────────────────────────

interface HeroProps {
  backgroundImage?: string
}

export default function Hero({ backgroundImage }: HeroProps = {}) {
  const [anim, setAnim] = useState<AnimState>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return {
        ...INIT,
        cardVisible:    true,
        contentOpacity: [1, 1, 1, 1],
      }
    }
    return INIT
  })
  const [isMobile, setIsMobile] = useState(false)
  const timerRefs = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const add = (ms: number, fn: () => void) => {
      timerRefs.current.push(setTimeout(fn, ms))
    }

    // Card entrance
    add(100, () => setAnim(prev => ({ ...prev, cardVisible: true })))

    // Content stagger
    const staggerDelays = [400, 520, 650, 780]
    staggerDelays.forEach((delay, i) => {
      add(delay, () => setAnim(prev => {
        const next = [...prev.contentOpacity]
        next[i] = 1
        return { ...prev, contentOpacity: next }
      }))
    })

    const timers = timerRefs.current
    return () => { timers.forEach(clearTimeout) }
  }, [])

  const ease = 'cubic-bezier(0.16, 0.84, 0.24, 1)'
  const contentTransition = `opacity 700ms ${ease}, transform 700ms ${ease}, filter 700ms ${ease}`

  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        width:    '100%',
        height:   'calc(100vh - 5rem)', /* 5rem = pt-20 body offset */
        overflow: 'clip',
      }}
    >
      {/* Background — image or video */}
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          fill
          priority
          style={{
            objectFit:      'cover',
            objectPosition: 'center',
            zIndex:         0,
          }}
        />
      ) : (
        <video
          src="/videos/hero-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          style={{
            position:       'absolute',
            inset:          0,
            width:          '100%',
            height:         '100%',
            objectFit:      'cover',
            objectPosition: 'center bottom',
            zIndex:         0,
          }}
        />
      )}

      {/* Top gradient overlay — navy fade over top 30% of video */}
      <div
        data-id="hero-gradient-top"
        aria-hidden="true"
        style={{
          position:      'absolute',
          top:           0,
          left:          0,
          right:         0,
          height:        '20%',
          zIndex:        1,
          background:    'linear-gradient(180deg, color-mix(in srgb, var(--color-primary) 60%, transparent) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── The Ledge — full-width frosted glass bar ────────────────────── */}
      <div
        data-id="hero-ledge"
        style={{
          position:             'absolute',
          bottom:               0,
          left:                 0,
          right:                0,
          zIndex:               2,
          background:           'color-mix(in srgb, color-mix(in srgb, var(--color-primary) 30%, var(--color-contrast-dark)) 82%, transparent)',
          backdropFilter:       anim.cardVisible ? 'blur(40px)' : 'blur(4px)',
          WebkitBackdropFilter: anim.cardVisible ? 'blur(40px)' : 'blur(4px)',
          borderTop:            anim.cardVisible
            ? '1px solid color-mix(in srgb, var(--color-liquid-glow) 25%, transparent)'
            : '1px solid color-mix(in srgb, var(--color-liquid-glow) 0%, transparent)',
          boxShadow:            anim.cardVisible
            ? '0 -8px 40px rgba(0,0,0,0.25), inset 0 1px 0 color-mix(in srgb, var(--color-liquid-glow) 12%, transparent)'
            : '0 -8px 40px rgba(0,0,0,0), inset 0 1px 0 color-mix(in srgb, var(--color-liquid-glow) 0%, transparent)',
          opacity:              anim.cardVisible ? 1 : 0,
          transform:            anim.cardVisible ? 'translateY(0)' : 'translateY(100%)',
          transition:           'transform 600ms cubic-bezier(0.16, 0.84, 0.24, 1), opacity 600ms cubic-bezier(0.16, 0.84, 0.24, 1), backdrop-filter 600ms cubic-bezier(0.16, 0.84, 0.24, 1), -webkit-backdrop-filter 600ms cubic-bezier(0.16, 0.84, 0.24, 1), border-color 600ms cubic-bezier(0.16, 0.84, 0.24, 1), box-shadow 600ms cubic-bezier(0.16, 0.84, 0.24, 1)',
        }}
      >
        {/* Inner row — constrained + horizontally centred */}
        <div
          data-id="hero-ledge-inner"
          style={{
            display:       'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems:    'center',
            gap:           isMobile ? 'var(--grid-gap)' : 'var(--grid-gap-loose)',
            maxWidth:      'var(--container-wide)',
            margin:        '0 auto',
            padding:       '2rem var(--section-spacing-y-tight)',
          }}
        >

          {/* Left cluster — eyebrow + title */}
          <div data-id="hero-cluster-left" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flexShrink: 0 }}>

          {/* Eyebrow */}
          <p
            style={{
              opacity:       anim.contentOpacity[0],
              filter:        anim.contentOpacity[0] === 1 ? 'blur(0)' : 'blur(8px)',
              transform:     anim.contentOpacity[0] === 1 ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.98)',
              transition:    contentTransition,
              fontSize:      'var(--text-xs)',
              fontWeight:    'var(--font-weight-semibold)',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              color:         'var(--color-accent)',
              margin:        0,
            }}
          >
            Professional Plumbing Services
          </p>

          {/* Title */}
          <h1
            style={{
              opacity:    anim.contentOpacity[1],
              filter:     anim.contentOpacity[1] === 1 ? 'blur(0)' : 'blur(8px)',
              transform:  anim.contentOpacity[1] === 1 ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.98)',
              transition: contentTransition,
              fontSize:   'var(--text-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--leading-tight)',
              color:      'var(--color-text-inverse)',
              margin:     0,
            }}
          >
            Crown Plumbing
          </h1>
          </div>

          {!isMobile && (
            <div
              data-id="hero-divider"
              aria-hidden="true"
              style={{
                width:           '1px',
                height:          '70px',
                background:      'color-mix(in srgb, var(--color-liquid-glow) 40%, transparent)',
                flexShrink:      0,
                alignSelf:       'center',
                transform:       anim.contentOpacity[2] === 1 ? 'scaleY(1)' : 'scaleY(0)',
                transformOrigin: 'top',
                transition:      'transform 500ms cubic-bezier(0.16, 0.84, 0.24, 1)',
              }}
            />
          )}

          {/* Right cluster — subtitle + CTAs */}
          <div
            data-id="hero-cluster-right"
            style={{
              opacity:       anim.contentOpacity[3],
              filter:        anim.contentOpacity[3] === 1 ? 'blur(0)' : 'blur(8px)',
              transform:     anim.contentOpacity[3] === 1 ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.98)',
              transition:    contentTransition,
              display:       'flex',
              flexDirection: 'column',
              gap:           'var(--grid-gap-tight)',
              maxWidth:      isMobile ? '100%' : '380px',
            }}
          >

          {/* Subtitle */}
          <p
            style={{
              fontSize:   'var(--text-base)',
              lineHeight: 'var(--leading-normal)',
              color:      'color-mix(in srgb, var(--color-liquid-glow) 75%, transparent)',
              margin:     0,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* CTA row */}
          <div data-id="hero-cta-row" style={{ display: 'flex', gap: 'var(--grid-gap-tight)', flexWrap: 'wrap', marginTop: 'var(--grid-gap-tight)' }}>
            {/* CTA 1 — Call Us */}
            <a
              href="tel:+27000000000"
              style={{
                display:        'inline-flex',
                alignItems:     'center',
                background:     'var(--color-accent)',
                color:          'var(--color-text-inverse)',
                paddingBlock:   'var(--btn-padding-y)',
                paddingInline:  'var(--btn-padding-x)',
                borderRadius:   'var(--radius-full)',
                fontWeight:     'var(--btn-font-weight)',
                border:         'none',
                cursor:         'pointer',
                transition:     'var(--btn-transition)',
                boxShadow:      '0 0 16px color-mix(in srgb, var(--color-accent) 30%, transparent)',
                textDecoration: 'none',
                outline:        'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.setProperty('opacity',   'var(--state-hover-opacity)')
                e.currentTarget.style.setProperty('transform', 'var(--state-hover-lift)')
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.removeProperty('opacity')
                e.currentTarget.style.removeProperty('transform')
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline       = 'var(--focus-ring)'
                e.currentTarget.style.outlineOffset = 'var(--focus-ring-offset)'
              }}
              onBlur={(e) => { e.currentTarget.style.outline = 'none' }}
            >
              Call Us
            </a>

            {/* CTA 2 — WhatsApp Us */}
            <a
              href="https://wa.me/placeholder"
              style={{
                display:        'inline-flex',
                alignItems:     'center',
                background:     'color-mix(in srgb, var(--color-liquid-glow) 10%, transparent)',
                color:          'var(--color-text-inverse)',
                paddingBlock:   'var(--btn-padding-y)',
                paddingInline:  'var(--btn-padding-x)',
                borderRadius:   'var(--radius-full)',
                fontWeight:     'var(--btn-font-weight)',
                border:         '1px solid color-mix(in srgb, var(--color-liquid-glow) 25%, transparent)',
                cursor:         'pointer',
                transition:     'var(--btn-transition)',
                textDecoration: 'none',
                outline:        'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'color-mix(in srgb, var(--color-liquid-glow) 18%, transparent)'
                e.currentTarget.style.setProperty('transform', 'var(--state-hover-lift)')
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'color-mix(in srgb, var(--color-liquid-glow) 10%, transparent)'
                e.currentTarget.style.removeProperty('transform')
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline       = 'var(--focus-ring)'
                e.currentTarget.style.outlineOffset = 'var(--focus-ring-offset)'
              }}
              onBlur={(e) => { e.currentTarget.style.outline = 'none' }}
            >
              WhatsApp Us
            </a>
          </div>
          </div>

        </div>
      </div>
    </section>
  )
}
