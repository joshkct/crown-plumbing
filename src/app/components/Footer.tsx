'use client'

import Link from 'next/link'
import { useState } from 'react'
import Button from './Button'

// ── Copied from Navbar.tsx — will be replaced with real SVG when provided ─────

function CrownLogo() {
  return (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ height: '32px', width: 'auto', color: 'var(--color-text-inverse)' }}
    >
      <path d="M10 32L18 12L30 24L40 8L50 24L62 12L70 32H10Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 32H70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function FooterLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  const [hovered, setHovered] = useState(false)
  const shared: React.CSSProperties = {
    fontSize:       'var(--text-sm)',
    color:          hovered ? 'var(--color-text-inverse)' : 'color-mix(in srgb, var(--color-liquid-glow) 65%, transparent)',
    textDecoration: 'none',
    transition:     'color var(--transition-hover)',
    outline:        'none',
  }
  if (external) {
    return (
      <a href={href} style={shared} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {label}
      </a>
    )
  }
  return (
    <Link href={href} style={shared} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {label}
    </Link>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width:          '40px',
        height:         '40px',
        borderRadius:   'var(--radius-md)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        background:     hovered
          ? 'color-mix(in srgb, var(--color-liquid-glow) 16%, transparent)'
          : 'color-mix(in srgb, var(--color-liquid-glow) 8%, transparent)',
        border:         '1px solid color-mix(in srgb, var(--color-liquid-glow) 15%, transparent)',
        color:          'color-mix(in srgb, var(--color-liquid-glow) 75%, transparent)',
        transition:     'background var(--transition-hover), color var(--transition-hover)',
        outline:        'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

// ── Column heading style ──────────────────────────────────────────────────────

const colHeading: React.CSSProperties = {
  fontSize:      'var(--text-sm)',
  fontWeight:    'var(--font-weight-semibold)',
  letterSpacing: 'var(--tracking-wide)',
  textTransform: 'uppercase',
  color:         'var(--color-text-inverse)',
  margin:        '0 0 1.25rem',
}

const colBase: React.CSSProperties = {
  display:       'flex',
  flexDirection: 'column',
  gap:           '0.75rem',
}

// ── Footer ────────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        background: 'var(--color-contrast-dark)',
        padding:    'var(--section-spacing-y-tight) var(--container-padding-x)',
        borderTop:  '1px solid color-mix(in srgb, var(--color-liquid-glow) 10%, transparent)',
      }}
    >
      <div data-id="footer-container" style={{ maxWidth: 'var(--container-default)', margin: '0 auto' }}>

        {/* Main grid */}
        <div
          data-id="footer-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 'var(--grid-gap-loose)', paddingBottom: 'var(--section-spacing-y-tight)' }}
        >

          {/* Col 1 — Brand */}
          <div data-id="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link href="/" aria-label="Crown Plumbing — home">
              <CrownLogo />
            </Link>
            <p
              style={{
                fontSize:   'var(--text-sm)',
                lineHeight: 'var(--leading-normal)',
                color:      'color-mix(in srgb, var(--color-liquid-glow) 55%, transparent)',
                margin:     0,
                maxWidth:   '22ch',
              }}
            >
              Where premium builds meet flawless execution.
            </p>
            <div data-id="footer-social" style={{ display: 'flex', gap: '0.75rem' }}>
              <SocialLink href="https://facebook.com" label="Crown Plumbing on Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://instagram.com" label="Crown Plumbing on Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialLink>
              <SocialLink href="https://linkedin.com" label="Crown Plumbing on LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <nav aria-label="Footer navigation">
            <p style={colHeading}>Quick Links</p>
            <div style={colBase}>
              <FooterLink href="/services"     label="Services"     />
              <FooterLink href="/about"        label="About"        />
              <FooterLink href="/testimonials" label="Testimonials" />
              <FooterLink href="/contact"      label="Contact"      />
            </div>
          </nav>

          {/* Col 3 — Services */}
          <div data-id="footer-services">
            <p style={colHeading}>Services</p>
            <div style={colBase}>
              <FooterLink href="/services" label="Emergency Plumbing"    />
              <FooterLink href="/services" label="Geyser Repair"         />
              <FooterLink href="/services" label="Blocked Drains"        />
              <FooterLink href="/services" label="Burst Pipes & Leaks"   />
              <FooterLink href="/services" label="Heat Pumps & Solar"    />
              <FooterLink href="/services" label="Maintenance"           />
            </div>
          </div>

          {/* Col 4 — Contact + CTA */}
          <div data-id="footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div data-id="footer-contact-details">
              <p style={colHeading}>Contact</p>
              <div style={colBase}>
                <FooterLink href="tel:+27000000000"            label="+27 00 000 0000"         external />
                <FooterLink href="mailto:info@crownplumbing.co.za" label="info@crownplumbing.co.za" external />
                <p style={{ fontSize: 'var(--text-sm)', color: 'color-mix(in srgb, var(--color-liquid-glow) 65%, transparent)', margin: 0 }}>
                  Cape Town, Western Cape
                </p>
              </div>
            </div>
            <Button label="Get a Quote" href="/contact" variant="primary" size="sm" />
          </div>

        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          style={{
            height:     '1px',
            background: 'color-mix(in srgb, var(--color-liquid-glow) 10%, transparent)',
            margin:     '0 0 1.5rem',
          }}
        />

        {/* Bottom bar */}
        <div
          data-id="footer-bottom"
          className="flex flex-col md:flex-row"
          style={{ gap: '0.75rem', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <p
            style={{
              fontSize: 'var(--text-xs)',
              color:    'color-mix(in srgb, var(--color-liquid-glow) 40%, transparent)',
              margin:   0,
            }}
          >
            &copy; {new Date().getFullYear()} Crown Plumbing. All rights reserved.
          </p>
          <div data-id="footer-legal" style={{ display: 'flex', gap: '1.5rem' }}>
            <FooterLink href="/privacy-policy" label="Privacy Policy" />
            <FooterLink href="/terms"          label="Terms of Use"   />
          </div>
        </div>

      </div>
    </footer>
  )
}
