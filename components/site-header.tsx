"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/lib/site-data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButton.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <p className="utility-emergency"><strong>24/7</strong><span>Emergency plumbing available</span></p>
          <p className="utility-bar__areas">Southern Suburbs · Atlantic Seaboard · Hout Bay · Cape Town</p>
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="shell site-header__inner">
          <Link className="brand" href="/" aria-label="Crown Plumbing home" onClick={() => setOpen(false)}>
            <Image
              src="/images/crown-logo.png"
              alt="Crown Plumbing Services"
              width={220}
              height={71}
              priority
            />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                className={pathname === link.href ? "is-active" : undefined}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-call" href={contact.phoneHref}>
              <Phone aria-hidden="true" />
              <span>Call now</span>
            </a>
            <a
              className="header-whatsapp"
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        <nav
          className={`mobile-nav${open ? " is-open" : ""}`}
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          <div className="shell mobile-nav__inner">
            {links.map((link) => (
              <Link
                key={link.href}
                className={pathname === link.href ? "is-active" : undefined}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <p>Mon–Fri 08:00–17:00<br />24/7 emergency availability</p>
          </div>
        </nav>
      </header>
    </>
  );
}
