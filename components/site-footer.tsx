import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { contact, serviceAreas, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="footer-brand">
          <Image src="/images/crown-logo.png" alt="Crown Plumbing Services" width={230} height={75} />
          <p>Professional plumbing, maintenance, repair, and installation services across Cape Town.</p>
          <div className="footer-badges">
            <Image src="/images/iopsa-logo.png" alt="IOPSA member" width={118} height={37} />
            <Image src="/images/pirb-logo.webp" alt="PIRB registered" width={118} height={43} />
          </div>
        </div>
        <div>
          <h2>Navigate</h2>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </div>
        <div className="footer-services">
          <h2>Services</h2>
          <ul>
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}><Link href={`/services#${service.slug}`}>{service.shortTitle}</Link></li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <a href={contact.phoneHref}><Phone aria-hidden="true" />{contact.phoneDisplay}</a>
          <a href={contact.emailHref}><Mail aria-hidden="true" />{contact.email}</a>
          <p><MapPin aria-hidden="true" />{serviceAreas.join(" · ")}</p>
          <p className="footer-hours">Mon–Fri 08:00–17:00<br />Emergency plumbing available 24/7</p>
          <Link className="footer-link" href="/contact">Contact details <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>
          © {new Date().getFullYear()} Crown Plumbing. All rights reserved. ·{" "}
          <a className="footer-credit" href="https://jkmedia.co.za" target="_blank" rel="noreferrer">Powered by JK Media</a>
        </p>
        <p>Legal business name · Registration no. [placeholder]</p>
      </div>
    </footer>
  );
}
