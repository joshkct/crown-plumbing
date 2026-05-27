'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = [
  { href: '/services',     label: 'Services'     },
  { href: '/about',        label: 'About'        },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact',      label: 'Contact'      },
] as const

// TODO: Replace placeholder paths with real SVG paths from
// public/images/crown-logo.svg once available.
// Ensure all fill and stroke values use currentColor.
// Update viewBox to match the real SVG dimensions.
interface LogoProps {
  color: string
}

function CrownLogo({ color }: LogoProps) {
  return (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ height: '36px', width: 'auto', color, transition: 'color var(--transition-interact)' }}
    >
      {/* PLACEHOLDER PATH — replace with real paths when SVG is ready */}
      <path
        d="M10 32L18 12L30 24L40 8L50 24L62 12L70 32H10Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 32H70"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ── FloatingNavbar ────────────────────────────────────────────────────────────

function FloatingNavbar() {
  const pathname                                      = usePathname()
  const [scrolled,         setScrolled]               = useState(false)
  const [isDark,           setIsDark]                 = useState(true)
  const [menuOpen,         setMenuOpen]               = useState(false)
  const [hovered,          setHovered]                = useState(false)
  const [hoveredLink,      setHoveredLink]            = useState<string | null>(null)
  const [hoveredMobileLink, setHoveredMobileLink]     = useState<string | null>(null)
  const [dropletStyles,    setDropletStyles]          = useState<Record<string, React.CSSProperties>>({})
  const glowRef        = useRef<HTMLDivElement>(null)
  const timeoutRefs    = useRef<Record<string, ReturnType<typeof setTimeout>>>({})
  const pointerDownRef = useRef(false)

  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY > 96
      setScrolled(scrolled)
      setIsDark(window.scrollY > 60)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const timeouts = timeoutRefs.current
    return () => { Object.values(timeouts).forEach(clearTimeout) }
  }, [])

  useEffect(() => {
    if (!hoveredLink) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const href = hoveredLink
    const refs = timeoutRefs.current
    const t1 = setTimeout(() => {
      setDropletStyles(prev => ({
        ...prev,
        [href]: { opacity: 1, transform: 'translateY(0)', transition: 'none' },
      }))
      const t2 = setTimeout(() => {
        setDropletStyles(prev => ({
          ...prev,
          [href]: { opacity: 0, transform: 'translateY(32px)', transition: 'opacity 500ms ease-out, transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' },
        }))
        const t3 = setTimeout(() => {
          setDropletStyles(prev => ({
            ...prev,
            [href]: { opacity: 0, transform: 'translateY(0)', transition: 'none' },
          }))
        }, 550)
        refs[`${href}_reset`] = t3
      }, 30)
      refs[`${href}_fade`] = t2
    }, 320)
    refs[`${href}_start`] = t1
    return () => {
      clearTimeout(t1)
      clearTimeout(refs[`${href}_fade`])
      clearTimeout(refs[`${href}_reset`])
    }
  }, [hoveredLink])

  const logoColor          = isDark ? 'var(--color-text-inverse)' : 'var(--color-primary)'
  const navTextColor       = isDark ? 'rgba(234, 231, 226, 0.85)' : 'var(--color-text-primary)'
  const navTextActiveColor = isDark ? 'var(--color-text-inverse)' : 'var(--color-primary)'
  const navTextHoverColor  = isDark ? 'var(--color-text-inverse)' : 'var(--color-primary)'

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!glowRef.current) return
    const r = e.currentTarget.getBoundingClientRect()
    glowRef.current.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
  }

  return (
    <>
      {/* ── Pill ────────────────────────────────────────────────────────── */}
      <header
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position:             'fixed',
          top:                  '24px',
          left:                 '50%',
          transform:            scrolled ? 'translateX(-50%) scale(0.97)' : 'translateX(-50%)',
          zIndex:               100,
          width:                'calc(100% - 48px)',
          maxWidth:             'var(--container-wide)',
          height:               '72px',
          borderRadius:         'var(--radius-full)',
          overflow:             'visible',
          background:           isDark
            ? 'color-mix(in srgb, var(--color-primary) 35%, transparent)'
            : 'color-mix(in srgb, var(--color-primary) 8%, transparent)',
          backdropFilter:       'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border:               isDark
            ? '1px solid color-mix(in srgb, var(--color-liquid-glow) 30%, transparent)'
            : '1px solid color-mix(in srgb, var(--color-liquid-glow) 35%, transparent)',
          boxShadow:            scrolled
            ? '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 color-mix(in srgb, var(--color-liquid-glow) 20%, transparent), 0 0 40px color-mix(in srgb, var(--color-liquid-glow) 8%, transparent), 0 16px 48px rgba(0,0,0,0.4)'
            : '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 color-mix(in srgb, var(--color-liquid-glow) 20%, transparent), 0 0 40px color-mix(in srgb, var(--color-liquid-glow) 8%, transparent)',
          transition:           'background var(--transition-interact), border-color var(--transition-interact), box-shadow var(--transition-hover), transform var(--transition-interact)',
        }}
      >
        {/* Layer 2 — Cursor glow */}
        <div
          data-id="navbar-cursor-glow"
          ref={glowRef}
          style={{
            position:      'absolute',
            inset:         0,
            borderRadius:  'var(--radius-full)',
            clipPath:      'inset(0 round var(--radius-full))',
            pointerEvents: 'none',
            background:    'radial-gradient(circle at var(--mx, 50%) 50%, color-mix(in srgb, var(--color-liquid-glow) 22%, transparent) 0%, color-mix(in srgb, var(--color-accent) 10%, transparent) 20%, transparent 35%)',
            opacity:       hovered ? 1 : 0,
            transition:    'opacity var(--transition-hover)',
          }}
        />

        {/* Layer 3 — Top highlight */}
        <div
          style={{
            position:      'absolute',
            top:           0,
            left:          0,
            right:         0,
            height:        '50%',
            borderRadius:  'var(--radius-full) var(--radius-full) 0 0',
            clipPath:      'inset(0 round var(--radius-full))',
            pointerEvents: 'none',
            background:    'linear-gradient(180deg, color-mix(in srgb, var(--color-liquid-glow) 15%, transparent) 0%, transparent 100%)',
          }}
        />

        {/* Inner layout */}
        <div
          data-id="navbar-inner"
          style={{
            position:       'relative',
            zIndex:         2,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            height:         '100%',
            padding:        '0 var(--btn-padding-x)',
          }}
        >
          {/* Logo */}
          <Link href="/" aria-label="Crown Plumbing — home" style={{ display: 'flex', alignItems: 'center' }}>
            <CrownLogo color={logoColor} />
          </Link>

          {/* Right side */}
          <div data-id="navbar-right" style={{ display: 'flex', alignItems: 'center', gap: 'var(--grid-gap-tight)' }}>

            {/* Desktop nav links */}
            <nav
              aria-label="Main navigation"
              className="hidden md:flex"
              style={{ alignItems: 'center', gap: 'var(--grid-gap)' }}
            >
              {NAV_LINKS.map(({ href, label }) => {
                const active    = pathname === href
                const isHovered = hoveredLink === href
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      position:       'relative',
                      color:          active ? navTextActiveColor : navTextColor,
                      fontWeight:     active ? 'var(--nav-active-font-weight)' : 'var(--nav-font-weight)',
                      transition:     'color var(--transition-interact)',
                      textDecoration: 'none',
                      outline:        'none',
                    }}
                    onPointerDown={() => { pointerDownRef.current = true }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = navTextHoverColor
                      setHoveredLink(href)
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = active ? navTextActiveColor : navTextColor
                      setHoveredLink(null)
                      setDropletStyles({})
                    }}
                    onFocus={(e) => {
                      if (pointerDownRef.current) { pointerDownRef.current = false; return }
                      e.currentTarget.style.outline       = 'var(--focus-ring)'
                      e.currentTarget.style.outlineOffset = 'var(--focus-ring-offset)'
                    }}
                    onBlur={(e) => { e.currentTarget.style.outline = 'none' }}
                  >
                    {label}
                    <span
                      aria-hidden="true"
                      style={{
                        position:        'absolute',
                        bottom:          '-3px',
                        left:            0,
                        width:           '100%',
                        height:          '1.5px',
                        background:      'var(--color-liquid-glow)',
                        borderRadius:    'var(--radius-full)',
                        transform:       isHovered ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: isHovered ? 'left center' : 'right center',
                        transition:      isHovered ? 'transform 400ms var(--ease-entrance)' : 'transform 300ms var(--ease-exit)',
                      }}
                    />
                    <span
                      aria-hidden="true"
                      style={{
                        position:        'absolute',
                        bottom:          '-10px',
                        right:           0,
                        width:           '6px',
                        height:          '9px',
                        borderRadius:    '50% 50% 50% 50% / 70% 70% 30% 30%',
                        background:      'var(--color-liquid-glow)',
                        boxShadow:       '0 0 4px color-mix(in srgb, var(--color-liquid-glow) 60%, transparent)',
                        transform:       'translateY(0)',
                        transformOrigin: 'center top',
                        opacity:         0,
                        pointerEvents: 'none',
                        ...dropletStyles[href],
                      }}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/#contact"
              className="hidden md:inline-flex"
              style={{
                alignItems:     'center',
                background:     'var(--color-accent)',
                color:          'var(--color-text-inverse)',
                paddingBlock:   'var(--btn-padding-y)',
                paddingInline:  'var(--btn-padding-x)',
                borderRadius:   'var(--radius-full)',
                fontWeight:     'var(--btn-font-weight)',
                transition:     'var(--btn-transition)',
                textDecoration: 'none',
                whiteSpace:     'nowrap',
                boxShadow:      '0 0 16px color-mix(in srgb, var(--color-accent) 30%, transparent)',
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
              Get a Quote
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              className="flex items-center md:hidden"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              style={{
                background: 'none',
                border:     'none',
                cursor:     'pointer',
                color:      'var(--color-text-inverse)',
                padding:    '4px',
                outline:    'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline       = 'var(--focus-ring)'
                e.currentTarget.style.outlineOffset = 'var(--focus-ring-offset)'
              }}
              onBlur={(e) => { e.currentTarget.style.outline = 'none' }}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu panel ─────────────────────────────────────────────── */}
      <div
        data-id="mobile-menu-panel"
        id="mobile-menu"
        aria-hidden={!menuOpen}
        style={{
          position:             'fixed',
          top:                  'calc(24px + 72px + 8px)',
          left:                 '50%',
          transform:            'translateX(-50%)',
          width:                'calc(100% - 48px)',
          background:           'color-mix(in srgb, var(--color-primary) 75%, transparent)',
          backdropFilter:       'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius:         'var(--radius-lg)',
          border:               '1px solid color-mix(in srgb, var(--color-liquid-glow) 20%, transparent)',
          zIndex:               99,
          overflow:             'hidden',
          maxHeight:            menuOpen ? '320px' : '0',
          opacity:              menuOpen ? 1 : 0,
          transition:           'max-height var(--transition-interact), opacity var(--transition-interact)',
        }}
      >
        <nav
          aria-label="Mobile navigation"
          style={{
            display:       'flex',
            flexDirection: 'column',
            gap:           'var(--grid-gap)',
            padding:       'var(--card-padding)',
          }}
        >
          {NAV_LINKS.map(({ href, label }) => {
            const active    = pathname === href
            const isHovered = hoveredMobileLink === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  position:       'relative',
                  color:          active ? navTextActiveColor : navTextColor,
                  fontWeight:     active ? 'var(--nav-active-font-weight)' : 'var(--nav-font-weight)',
                  transition:     'color var(--transition-interact)',
                  textDecoration: 'none',
                }}
                onMouseEnter={() => setHoveredMobileLink(href)}
                onMouseLeave={() => setHoveredMobileLink(null)}
              >
                {label}
                <span
                  aria-hidden="true"
                  style={{
                    position:        'absolute',
                    bottom:          '-3px',
                    left:            0,
                    width:           '100%',
                    height:          '1.5px',
                    background:      'var(--color-liquid-glow)',
                    borderRadius:    'var(--radius-full)',
                    transform:       isHovered ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: isHovered ? 'left center' : 'right center',
                    transition:      isHovered ? 'transform 400ms var(--ease-entrance)' : 'transform 300ms var(--ease-exit)',
                  }}
                />
              </Link>
            )
          })}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              background:     'var(--color-accent)',
              color:          'var(--color-text-inverse)',
              paddingBlock:   'var(--btn-padding-y)',
              paddingInline:  'var(--btn-padding-x)',
              borderRadius:   'var(--radius-full)',
              fontWeight:     'var(--btn-font-weight)',
              transition:     'var(--btn-transition)',
              textDecoration: 'none',
              marginTop:      'var(--grid-gap-tight)',
            }}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </>
  )
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function ChatBubbleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.06 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

// ── MobileStickyCTAs ──────────────────────────────────────────────────────────

function MobileStickyCTAs() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > window.innerHeight)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const fabStyle: React.CSSProperties = {
    width:                '56px',
    height:               '56px',
    borderRadius:         'var(--radius-full)',
    background:           'color-mix(in srgb, var(--color-primary) 50%, transparent)',
    backdropFilter:       'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border:               '1px solid color-mix(in srgb, var(--color-liquid-glow) 20%, transparent)',
    boxShadow:            '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 color-mix(in srgb, var(--color-liquid-glow) 15%, transparent)',
    transition:           'var(--btn-transition)',
    cursor:               'pointer',
    display:              'flex',
    alignItems:           'center',
    justifyContent:       'center',
    color:                'var(--color-text-inverse)',
    overflow:             'hidden',
    position:             'relative',
    textDecoration:       'none',
    outline:              'none',
  }

  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.setProperty('transform', 'var(--state-hover-lift)')
    e.currentTarget.style.boxShadow =
      '0 8px 28px rgba(0,0,0,0.35), inset 0 1px 0 color-mix(in srgb, var(--color-liquid-glow) 25%, transparent), 0 0 20px color-mix(in srgb, var(--color-accent) 20%, transparent)'
  }
  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.removeProperty('transform')
    e.currentTarget.style.boxShadow =
      '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 color-mix(in srgb, var(--color-liquid-glow) 15%, transparent)'
  }
  const onFabFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.outline       = 'var(--focus-ring)'
    e.currentTarget.style.outlineOffset = 'var(--focus-ring-offset)'
  }
  const onFabBlur = (e: React.FocusEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.outline = 'none'
  }

  return (
    <div
      data-id="mobile-sticky-ctas"
      className="flex md:hidden"
      style={{
        position:      'fixed',
        bottom:        '24px',
        left:          '50%',
        transform:     `translateX(-50%) translateY(${visible ? '0px' : '8px'})`,
        zIndex:        200,
        gap:           'var(--grid-gap-tight)',
        opacity:       visible ? 1 : 0,
        transition:    'opacity var(--transition-interact), transform var(--transition-interact)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <Link
        href="https://wa.me/placeholder"
        aria-label="Contact us on WhatsApp"
        style={fabStyle}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onFabFocus}
        onBlur={onFabBlur}
      >
        <ChatBubbleIcon />
      </Link>

      <Link
        href="tel:+27000000000"
        aria-label="Call us"
        style={fabStyle}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onFabFocus}
        onBlur={onFabBlur}
      >
        <PhoneIcon />
      </Link>
    </div>
  )
}

// ── Default export ────────────────────────────────────────────────────────────

export default function NavbarWrapper() {
  return (
    <>
      <FloatingNavbar />
      <MobileStickyCTAs />
    </>
  )
}
