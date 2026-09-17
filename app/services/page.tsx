import type { Metadata } from "next";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { InnerPageMotion } from "@/components/inner-page-motion";
import { PageHero } from "@/components/page-hero";
import { TrustBar } from "@/components/trust-bar";
import { contact, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Plumbing Services & New Developments Cape Town",
  description:
    "Emergency, drain, geyser, sewerage, leak, maintenance, energy-efficient hot-water, and new-development plumbing services in Cape Town.",
};

export default function ServicesPage() {
  return (
    <InnerPageMotion>
      <PageHero
        eyebrow="Plumbing services"
        title="The right capability for the work at hand."
        body="Responsive repairs, planned maintenance, and complete professional installations across Cape Town. Select a service for details or contact us directly."
        aside={<div className="page-hero__stat"><strong>08</strong><span>Service disciplines</span></div>}
      />
      <TrustBar />

      <section className="section service-catalogue">
        <div className="shell">
          <div className="service-catalogue__intro" data-reveal>
            <p className="eyebrow">Our capabilities</p>
            <h2>Repair, maintenance, and installation services.</h2>
            <p>Our capabilities cover urgent faults, everyday plumbing requirements, specialist hot-water systems, ongoing maintenance, and complete installations for new developments.</p>
          </div>
          <div className="service-catalogue__grid" data-stagger-group>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <details
                  className="service-detail"
                  id={service.slug}
                  key={service.slug}
                  data-service-card
                  data-stagger-item
                  suppressHydrationWarning
                >
                  <summary>
                    <span className="service-detail__number">{String(index + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" />
                    <span className="service-detail__title">{service.title}</span>
                    <span className="service-detail__open"><ArrowUpRight aria-hidden="true" /></span>
                  </summary>
                  <div className="service-detail__content">
                    <p>{service.detail}</p>
                    <ul>
                      {service.capabilities.map((capability) => (
                        <li key={capability}><Check aria-hidden="true" />{capability}</li>
                      ))}
                    </ul>
                    <a className="button button--primary" href={contact.phoneHref}>
                      <Phone aria-hidden="true" />{service.cta}
                    </a>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section service-help">
        <div className="shell service-help__inner" data-stagger-group>
          <div data-stagger-item>
            <p className="eyebrow eyebrow--orange">Need direction?</p>
            <h2>Not sure which service applies?</h2>
          </div>
          <div data-stagger-item>
            <p>Describe the issue by phone or WhatsApp. We’ll help identify the most appropriate next step.</p>
            <a className="text-link text-link--light" href={contact.phoneHref}>Call Crown Plumbing <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </InnerPageMotion>
  );
}
