"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type InnerPageMotionProps = {
  children: ReactNode;
};

export function InnerPageMotion({ children }: InnerPageMotionProps) {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (pathname !== "/services") return;

    const revealHashedService = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;

      const target = document.getElementById(decodeURIComponent(hash));
      if (!(target instanceof HTMLDetailsElement) || !target.matches("[data-service-card]")) return;

      document.querySelectorAll<HTMLDetailsElement>("details[data-service-card]").forEach((detail) => {
        detail.open = detail === target;
      });

      window.requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    revealHashedService();
    window.addEventListener("hashchange", revealHashedService);

    return () => window.removeEventListener("hashchange", revealHashedService);
  }, [pathname]);

  useLayoutEffect(() => {
    if (!root.current) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const detailCleanups: Array<() => void> = [];
    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: { duration: 0.8, ease: "power3.out" },
      });

      gsap.set(
        "[data-page-hero-eyebrow], [data-page-hero-title], [data-page-hero-body], [data-page-hero-aside]",
        { autoAlpha: 0, y: 32 },
      );
      gsap.set("[data-page-hero-grid]", { autoAlpha: 0 });

      heroTimeline
        .to("[data-page-hero-grid]", { autoAlpha: 1, duration: 1.1 }, 0)
        .to("[data-page-hero-eyebrow]", { autoAlpha: 1, y: 0 }, 0.12)
        .to("[data-page-hero-title]", { autoAlpha: 1, y: 0, duration: 1 }, 0.22)
        .to("[data-page-hero-body]", { autoAlpha: 1, y: 0 }, 0.48)
        .to("[data-page-hero-aside]", { autoAlpha: 1, y: 0 }, 0.58);

      gsap.from("[data-trust-item]", {
        autoAlpha: 0,
        y: 26,
        stagger: 0.09,
        duration: 0.72,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".trust-bar",
          start: "top 90%",
          once: true,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 44,
          duration: 0.88,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger-group]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");
        if (!items.length) return;

        gsap.from(items, {
          autoAlpha: 0,
          y: 52,
          stagger: 0.1,
          duration: 0.82,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 82%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((element) => {
        const image = element.querySelector("img");
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: true,
          },
        });

        timeline
          .fromTo(
            element,
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 1.05, ease: "power3.inOut" },
          )
          .fromTo(image, { scale: 1.1 }, { scale: 1, duration: 1.2, ease: "power2.out" }, 0.08);
      });

      gsap.utils.toArray<HTMLDetailsElement>("details[data-service-card]").forEach((detail) => {
        const content = detail.querySelector<HTMLElement>(".service-detail__content");
        if (!content) return;

        const animateOpen = () => {
          if (!detail.open) return;
          gsap.fromTo(
            content.children,
            { autoAlpha: 0, y: 18 },
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.07,
              duration: 0.48,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
              onComplete: () => ScrollTrigger.refresh(),
            },
          );
        };

        detail.addEventListener("toggle", animateOpen);
        detailCleanups.push(() => detail.removeEventListener("toggle", animateOpen));
      });

      ScrollTrigger.refresh();
    }, root);

    return () => {
      detailCleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, [pathname]);

  return (
    <div className="inner-page-motion" ref={root}>
      {children}
    </div>
  );
}
