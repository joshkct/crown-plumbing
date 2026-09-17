import { ContactActions } from "@/components/contact-actions";

export function ClosingCta() {
  return (
    <section className="closing-cta">
      <div className="closing-cta__texture" aria-hidden="true" />
      <div className="shell closing-cta__inner">
        <div>
          <p className="eyebrow eyebrow--orange">Speak directly to Crown Plumbing</p>
          <h2>Plumbing support,<br />handled professionally.</h2>
        </div>
        <div className="closing-cta__action">
          <p>Tell us what you need and where you are. We’ll discuss the issue and the appropriate next step.</p>
          <ContactActions />
        </div>
      </div>
    </section>
  );
}
