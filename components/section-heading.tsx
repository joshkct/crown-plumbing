import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: ReactNode;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, body, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <div className="section-heading__body">{body}</div> : null}
    </div>
  );
}
