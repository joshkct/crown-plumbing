import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, body, aside }: PageHeroProps) {
  return (
    <section className="page-hero" data-page-hero>
      <div className="page-hero__grid-lines" data-page-hero-grid aria-hidden="true" />
      <div className="shell page-hero__inner">
        <div>
          <p className="eyebrow eyebrow--orange" data-page-hero-eyebrow>{eyebrow}</p>
          <h1 data-page-hero-title>{title}</h1>
          <p className="page-hero__body" data-page-hero-body>{body}</p>
        </div>
        {aside ? <div className="page-hero__aside" data-page-hero-aside>{aside}</div> : null}
      </div>
    </section>
  );
}
