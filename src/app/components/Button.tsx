'use client'

import Link from 'next/link'
import { useState } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────

interface ButtonProps {
  label:      string
  href?:      string
  onClick?:   () => void
  variant?:   'primary' | 'ghost'
  size?:      'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?:  boolean
  type?:      'button' | 'submit' | 'reset'
  ariaLabel?: string
  newTab?:    boolean
}

// ── Button ────────────────────────────────────────────────────────────────────

export default function Button({
  label,
  href,
  onClick,
  variant   = 'primary',
  size      = 'md',
  fullWidth = false,
  disabled  = false,
  type      = 'button',
  ariaLabel,
  newTab    = false,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive,  setIsActive]  = useState(false)

  // ── Size ─────────────────────────────────────────────────────────────────────
  const paddingBlock  = size === 'sm' ? '0.5rem'          : size === 'lg' ? '1rem'           : 'var(--btn-padding-y)'
  const paddingInline = size === 'sm' ? '1rem'            : size === 'lg' ? '2rem'           : 'var(--btn-padding-x)'
  const fontSize      = size === 'sm' ? 'var(--text-sm)'  : size === 'lg' ? 'var(--text-lg)' : 'var(--text-base)'

  // ── Variant ───────────────────────────────────────────────────────────────────
  const background = variant === 'primary'
    ? 'var(--color-accent)'
    : isHovered
      ? 'color-mix(in srgb, var(--color-liquid-glow) 16%, transparent)'
      : 'color-mix(in srgb, var(--color-liquid-glow) 6%, transparent)'

  const border = variant === 'primary'
    ? 'none'
    : '1px solid color-mix(in srgb, var(--color-liquid-glow) 32%, transparent)'

  const boxShadow = variant === 'primary'
    ? isHovered
      ? '0 0 28px color-mix(in srgb, var(--color-accent) 52%, transparent)'
      : '0 0 16px color-mix(in srgb, var(--color-accent) 28%, transparent)'
    : 'none'

  const transform = isActive
    ? 'var(--state-active-press)'
    : isHovered
      ? 'var(--state-hover-lift)'
      : 'none'

  // ── Root style ────────────────────────────────────────────────────────────────
  const rootStyle: React.CSSProperties = {
    position:       'relative',
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    width:          fullWidth ? '100%' : undefined,
    paddingBlock,
    paddingInline,
    fontSize,
    fontWeight:     'var(--btn-font-weight)',
    color:          'var(--color-text-inverse)',
    background,
    textDecoration: 'none',
    whiteSpace:     'nowrap',
    borderRadius:   'var(--radius-full)',
    border,
    overflow:       'hidden',
    cursor:         disabled ? 'var(--cursor-disabled)' : 'var(--cursor-action)',
    pointerEvents:  disabled ? 'none' : undefined,
    opacity:        disabled ? ('var(--state-disabled-opacity)' as unknown as number) : 1,
    transition:     'var(--btn-transition)',
    transform,
    boxShadow,
    outline:        'none',
  }

  // ── Handlers ──────────────────────────────────────────────────────────────────
  const onEnter = () => { if (!disabled) setIsHovered(true) }
  const onLeave = () => { setIsHovered(false); setIsActive(false) }
  const onDown  = () => { if (!disabled) setIsActive(true) }
  const onUp    = () => setIsActive(false)

  const onFocus = (e: React.FocusEvent<HTMLElement>) => {
    ;(e.currentTarget as HTMLElement).style.outline       = 'var(--focus-ring)'
    ;(e.currentTarget as HTMLElement).style.outlineOffset = 'var(--focus-ring-offset)'
  }
  const onBlur = (e: React.FocusEvent<HTMLElement>) => {
    ;(e.currentTarget as HTMLElement).style.outline = 'none'
  }

  // ── Text slide ────────────────────────────────────────────────────────────────
  const spanBase: React.CSSProperties = {
    position:   'absolute',
    top:        0,
    left:       0,
    right:      0,
    textAlign:  'center',
    transition: 'transform var(--transition-hover)',
  }

  const content = (
    <span style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1.4em', width: fullWidth ? '100%' : undefined }}>
      <span style={{ ...spanBase, transform: isHovered ? 'translateY(-110%)' : 'translateY(0)' }}>
        {label}
      </span>
      <span aria-hidden="true" style={{ ...spanBase, transform: isHovered ? 'translateY(0)' : 'translateY(110%)' }}>
        {label}
      </span>
    </span>
  )

  // ── Render path ───────────────────────────────────────────────────────────────
  const isProtocol = href?.startsWith('tel:') || href?.startsWith('https://wa.me') || href?.startsWith('mailto:')

  if (href && !isProtocol) {
    return (
      <Link
        href={href}
        style={rootStyle}
        aria-label={ariaLabel ?? label}
        target={newTab ? '_blank'             : undefined}
        rel={   newTab ? 'noopener noreferrer' : undefined}
        onMouseEnter={onEnter} onMouseLeave={onLeave}
        onMouseDown={onDown}   onMouseUp={onUp}
        onFocus={onFocus as React.FocusEventHandler<HTMLAnchorElement>}
        onBlur={onBlur   as React.FocusEventHandler<HTMLAnchorElement>}
      >
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        style={rootStyle}
        aria-label={ariaLabel ?? label}
        target={newTab ? '_blank'             : undefined}
        rel={   newTab ? 'noopener noreferrer' : undefined}
        onMouseEnter={onEnter} onMouseLeave={onLeave}
        onMouseDown={onDown}   onMouseUp={onUp}
        onFocus={onFocus as React.FocusEventHandler<HTMLAnchorElement>}
        onBlur={onBlur   as React.FocusEventHandler<HTMLAnchorElement>}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      style={rootStyle}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      onMouseEnter={onEnter} onMouseLeave={onLeave}
      onMouseDown={onDown}   onMouseUp={onUp}
      onFocus={onFocus as React.FocusEventHandler<HTMLButtonElement>}
      onBlur={onBlur   as React.FocusEventHandler<HTMLButtonElement>}
    >
      {content}
    </button>
  )
}
