import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, MapPin } from "lucide-react";
import { ContactActions } from "@/components/contact-actions";
import { HomeMotion } from "@/components/home-motion";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { serviceAreas, services } from "@/lib/site-data";

export default function HomePage() {
  return (
    <HomeMotion>
      <section className="home-hero">
        <video
          className="home-hero__media"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-img.webp"
          preload="metadata"
          aria-hidden="true"
          data-hero-media
        >
          <source src="/videos/hero-vid.m4v" type="video/mp4" />
        </video>
        <div className="home-hero__veil" />
        <div className="home-hero__grid" aria-hidden="true" />
        <div className="shell home-hero__inner">
          <div className="home-hero__copy">
            <p className="eyebrow eyebrow--orange" data-hero-eyebrow>IOPSA member · PIRB registered · Cape Town</p>
            <h1>
              <span className="hero-line-mask"><span className="hero-line" data-hero-line>Plumbing delivered</span></span>
              <span className="hero-line-mask"><span className="hero-line" data-hero-line>to a <em>higher</em> standard.</span></span>
            </h1>
            <p className="home-hero__body" data-hero-body>
              Responsive repairs, full plumbing installations, and dependable maintenance for properties and developments across Cape Town—with emergency support available 24/7.
            </p>
            <div data-hero-actions><ContactActions /></div>
          </div>
          <div className="home-hero__proof" data-hero-proof>
            <span>01</span>
            <p>Registered plumbing professionals</p>
            <span>02</span>
            <p>One-year workmanship guarantee</p>
          </div>
          <a className="scroll-cue" href="#services" data-scroll-cue>
            <span>Explore</span><ArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <TrustBar />

      <section className="section services-preview" id="services">
        <div className="shell">
          <div className="section-split-heading">
            <SectionHeading
              eyebrow="Our services"
              title="Complete plumbing capability, from urgent repairs to new developments."
            />
            <div className="section-split-heading__body" data-reveal>
              <p>From urgent leaks and blocked drains to planned installations and complete new-build plumbing, every project is approached with care, clarity, and professional accountability.</p>
              <Link className="text-link" href="/services">Explore all services <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="service-preview-grid" data-card-grid>
            {services.slice(0, 6).map((service, index) => {
              const Icon = service.icon;
              return (
                <Link className="service-preview-card" href={`/services#${service.slug}`} key={service.slug} data-card-reveal>
                  <span className="service-preview-card__number">0{index + 1}</span>
                  <Icon aria-hidden="true" />
                  <h3>{service.shortTitle}</h3>
                  <p>{service.summary}</p>
                  <span className="service-preview-card__arrow"><ArrowUpRight aria-hidden="true" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="shell proof-section__grid">
          <div className="proof-section__image" data-image-reveal>
            <Image
              src="/images/pic-3.webp"
              alt="Contemporary bathroom interior — placeholder image"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className="proof-section__stamp">
              <strong>Since</strong>
              <span>2020</span>
            </div>
          </div>
          <div className="proof-section__content">
            <SectionHeading
              eyebrow="Why Crown Plumbing"
              title="Credibility built into the work."
              body={<p>Good plumbing is measured by more than a short-term fix. It requires sound judgement, accountable workmanship, and respect for the property, system, and people involved.</p>}
            />
            <div className="proof-list">
              {[
                ["01", "Established", "Registered in 2020"],
                ["02", "Recognised", "IOPSA member and PIRB registered"],
                ["03", "Guaranteed", "One-year workmanship guarantee"],
                ["04", "Available", "Emergency plumbing support 24/7"],
              ].map(([number, title, copy]) => (
                <div className="proof-list__item" key={number} data-proof-row>
                  <span>{number}</span>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                  <Check aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section capability-banner">
        <div className="capability-banner__media" data-capability-media>
          <Image src="/images/pic-5.webp" alt="Modern plumbing installation — placeholder image" fill sizes="100vw" />
        </div>
        <div className="shell capability-banner__inner" data-reveal>
          <p className="eyebrow eyebrow--orange">Professional from first contact to completion</p>
          <h2>Clear advice.<br />Considered solutions.<br /><em>Work completed with care.</em></h2>
          <p>We assess the situation, explain the recommended course of action, and complete the agreed work with a focus on long-term performance.</p>
          <Link className="button button--light" href="/about">About Crown Plumbing <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section service-areas-section">
        <div className="shell service-areas-section__grid">
          <SectionHeading
            eyebrow="Where we work"
            title="Plumbing services across key Cape Town areas."
            body={<p>Contact us to confirm availability for your property or development.</p>}
          />
          <div className="area-list">
            {serviceAreas.map((area, index) => (
              <div key={area} data-area-row>
                <span>0{index + 1}</span>
                <MapPin aria-hidden="true" />
                <strong>{area}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </HomeMotion>
  );
}
