"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type HomeMotionProps = {
  children: ReactNode;
};

export function HomeMotion({ children }: HomeMotionProps) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: { duration: 0.85, ease: "power3.out" },
      });

      gsap.set("[data-hero-line]", { yPercent: 112 });
      gsap.set(
        "[data-hero-eyebrow], [data-hero-body], [data-hero-actions], [data-hero-proof], [data-scroll-cue]",
        { autoAlpha: 0, y: 24 },
      );

      heroTimeline
        .fromTo("[data-hero-media]", { scale: 1.08 }, { scale: 1, duration: 1.6, ease: "power2.out" })
        .to("[data-hero-eyebrow]", { autoAlpha: 1, y: 0 }, 0.18)
        .to("[data-hero-line]", { yPercent: 0, stagger: 0.11, duration: 1 }, 0.28)
        .to("[data-hero-body]", { autoAlpha: 1, y: 0 }, 0.62)
        .to("[data-hero-actions]", { autoAlpha: 1, y: 0 }, 0.78)
        .to("[data-hero-proof]", { autoAlpha: 1, y: 0 }, 0.88)
        .to("[data-scroll-cue]", { autoAlpha: 1, y: 0 }, 1.05);

      gsap.to("[data-hero-media]", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.from("[data-trust-item]", {
        autoAlpha: 0,
        y: 28,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".trust-bar",
          start: "top 88%",
          once: true,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 48,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.from("[data-card-reveal]", {
        autoAlpha: 0,
        y: 64,
        stagger: 0.09,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-card-grid]",
          start: "top 80%",
          once: true,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((element) => {
        const image = element.querySelector("img");
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            once: true,
          },
        });

        timeline
          .fromTo(
            element,
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 1.05, ease: "power3.inOut" },
          )
          .fromTo(image, { scale: 1.12 }, { scale: 1, duration: 1.2, ease: "power2.out" }, 0.08);
      });

      gsap.from("[data-proof-row]", {
        autoAlpha: 0,
        x: 42,
        stagger: 0.09,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".proof-list",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from("[data-area-row]", {
        autoAlpha: 0,
        x: 50,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".area-list",
          start: "top 82%",
          once: true,
        },
      });

      const capabilityImage = document.querySelector<HTMLElement>("[data-capability-media]");
      if (capabilityImage) {
        gsap.fromTo(
          capabilityImage,
          { yPercent: -7, scale: 1.08 },
          {
            yPercent: 7,
            scale: 1.02,
            ease: "none",
            scrollTrigger: {
              trigger: ".capability-banner",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          },
        );
      }

      ScrollTrigger.refresh();
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div className="home-motion-root" ref={root}>
      {children}
    </div>
  );
}
