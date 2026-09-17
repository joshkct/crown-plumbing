import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, CheckCircle2, Compass, Scale, ShieldCheck } from "lucide-react";
import { InnerPageMotion } from "@/components/inner-page-motion";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { credentials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Crown Plumbing’s professional approach, industry registrations, one-year workmanship guarantee, and Cape Town service coverage.",
};

const principles = [
  { title: "Professionalism", body: "Direct communication, clear expectations, and respect for every property and project.", icon: BadgeCheck },
  { title: "Accountability", body: "We stand behind our workmanship and take responsibility for the agreed scope.", icon: ShieldCheck },
  { title: "Compliance", body: "Professional registrations inform an approach grounded in accepted industry practice.", icon: Scale },
  { title: "Practical judgement", body: "We assess the requirement and recommend an appropriate, proportionate solution.", icon: Compass },
];

export default function AboutPage() {
  return (
    <InnerPageMotion>
      <PageHero
        eyebrow="About Crown Plumbing"
        title="Accountable workmanship. Professional standards."
        body="Crown Plumbing provides repair, maintenance, and installation services with a clear focus on reliability, compliance, and work that stands up over time."
        aside={<div className="page-hero__stat"><strong>2020</strong><span>Registered in</span></div>}
      />
      <TrustBar />

      <section className="section story-section">
        <div className="shell story-section__grid">
          <div className="story-section__content">
            <SectionHeading
              eyebrow="Our company"
              title="Built to provide a more dependable plumbing service."
            />
            <div className="prose-large" data-reveal>
              <p>Registered in 2020, Crown Plumbing was established to deliver considered solutions and a consistently professional client experience.</p>
              <p>Reliable service starts with understanding the requirement properly, communicating clearly, and taking responsibility for the quality of the finished work.</p>
            </div>
            <p className="legal-placeholder" data-reveal>Legal business name · Registration number [placeholder]</p>
          </div>
          <div className="story-section__image" data-image-reveal>
            <Image src="/images/pic-1.webp" alt="Contemporary bathroom interior — placeholder image" fill sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="shell">
          <SectionHeading eyebrow="How we work" title="Principles that shape every project." light />
          <div className="principles-grid" data-stagger-group>
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <article key={principle.title} data-stagger-item>
                  <span>0{index + 1}</span>
                  <Icon aria-hidden="true" />
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section credentials-section">
        <div className="shell">
          <div className="section-split-heading">
            <SectionHeading eyebrow="Professional recognition" title="Standards clients can verify." />
            <p data-reveal>Industry membership and registration provide an important layer of accountability and demonstrate commitment to professional practice.</p>
          </div>
          <div className="credential-grid" data-stagger-group>
            {credentials.map((credential) => (
              <article key={credential.title} data-stagger-item>
                <div className="credential-grid__logo">
                  <Image src={credential.image} alt={credential.imageAlt} width={240} height={90} />
                </div>
                <div>
                  <p className="eyebrow">Verified credential</p>
                  <h3>{credential.title}</h3>
                  <p>{credential.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="shell team-section__grid">
          <div className="team-section__image" data-image-reveal>
            <Image src="/images/pic-6.webp" alt="Modern plumbing fixture — placeholder image" fill sizes="(max-width: 900px) 100vw, 45vw" />
            <span>Team portrait to follow</span>
          </div>
          <div>
            <SectionHeading
              eyebrow="The people behind the work"
              title="A professional service built on personal accountability."
              body={<p>Crown Plumbing is committed to knowledgeable support, straightforward communication, and workmanship completed with care.</p>}
            />
            <Link className="text-link" href="/contact" data-reveal>Speak to Crown Plumbing <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section guarantee-section">
        <div className="shell guarantee-section__inner" data-stagger-group>
          <div className="guarantee-section__lead" data-stagger-item>
            <div className="guarantee-section__mark"><CheckCircle2 aria-hidden="true" /></div>
            <div>
              <p className="eyebrow eyebrow--orange">Our guarantee</p>
              <h2>One year of confidence in our workmanship.</h2>
            </div>
          </div>
          <p data-stagger-item>If an issue arises that relates directly to the workmanship completed, contact us so it can be assessed and addressed in line with the guarantee terms.</p>
        </div>
      </section>
    </InnerPageMotion>
  );
}
