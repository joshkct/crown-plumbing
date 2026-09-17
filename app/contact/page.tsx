import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { InnerPageMotion } from "@/components/inner-page-motion";
import { PageHero } from "@/components/page-hero";
import { TrustBar } from "@/components/trust-bar";
import { contact, serviceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Crown Plumbing",
  description:
    "Call, WhatsApp, or email Crown Plumbing for plumbing services across Cape Town’s Southern Suburbs, Atlantic Seaboard, and Hout Bay.",
};

const methods = [
  {
    label: "Call",
    title: "Call Crown Plumbing",
    body: "The most direct option for an urgent requirement or a quick initial discussion.",
    action: contact.phoneDisplay,
    href: contact.phoneHref,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    title: "Send the details",
    body: "Share a description, your location, and relevant photographs where available.",
    action: "Start a conversation",
    href: contact.whatsappHref,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Email",
    title: "Send an email",
    body: "Suitable for planned work, maintenance enquiries, and detailed project requirements.",
    action: contact.email,
    href: contact.emailHref,
    icon: Mail,
  },
];

export default function ContactPage() {
  return (
    <InnerPageMotion>
      <PageHero
        eyebrow="Contact Crown Plumbing"
        title="Speak directly to a plumbing professional."
        body="Contact us with a short description of the plumbing requirement and your location. We’ll discuss the issue and the appropriate next step."
        aside={
          <div className="page-hero__availability">
            <strong className="page-hero__availability-time">24/7</strong>
            <span>Emergency plumbing support</span>
            <p>Available 24 hours a day, 7 days a week</p>
          </div>
        }
      />
      <TrustBar />

      <section className="section contact-methods-section">
        <div className="shell">
          <div className="contact-methods" data-stagger-group>
            {methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  className="contact-method"
                  href={method.href}
                  key={method.label}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noreferrer" : undefined}
                  data-stagger-item
                >
                  <span className="contact-method__number">0{index + 1}</span>
                  <Icon aria-hidden="true" />
                  <p className="eyebrow">{method.label}</p>
                  <h2>{method.title}</h2>
                  <p>{method.body}</p>
                  <strong>{method.action}</strong>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section contact-info-section">
        <div className="shell contact-info-section__grid" data-stagger-group>
          <div className="contact-info-card contact-info-card--hours" data-stagger-item>
            <Clock3 aria-hidden="true" />
            <p className="eyebrow eyebrow--orange">Opening hours</p>
            <h2>Standard hours</h2>
            <dl>
              <div><dt>Monday–Friday</dt><dd>08:00–17:00</dd></div>
              <div><dt>Saturday</dt><dd>Closed</dd></div>
              <div><dt>Sunday</dt><dd>Closed</dd></div>
              <div className="is-emergency"><dt>Emergency plumbing</dt><dd>Available 24/7</dd></div>
            </dl>
          </div>
          <div className="contact-info-card" data-stagger-item>
            <MapPin aria-hidden="true" />
            <p className="eyebrow">Service coverage</p>
            <h2>Working across Cape Town.</h2>
            <p>Contact us to confirm coverage and availability for your property or development.</p>
            <ul className="contact-area-list">
              {serviceAreas.map((area) => <li key={area}>{area}</li>)}
            </ul>
          </div>
          <div className="contact-info-card" data-stagger-item>
            <ShieldCheck aria-hidden="true" />
            <p className="eyebrow">Before you contact us</p>
            <h2>Details that help.</h2>
            <p>Include the property location, a concise description of the issue, when it started, and photographs where they help show the affected area.</p>
            <p className="contact-info-card__trust">IOPSA member · PIRB registered · One-year workmanship guarantee</p>
          </div>
        </div>
      </section>
    </InnerPageMotion>
  );
}
