"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function GlobalMotion() {
  const pathname = usePathname();
  const progress = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const updateProgress = () => {
      if (!progress.current) return;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scale = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;
      gsap.set(progress.current, { scaleX: scale });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    ScrollTrigger.addEventListener("refresh", updateProgress);

    const context = gsap.context(() => {
      const closingCta = document.querySelector<HTMLElement>(".closing-cta__inner");
      if (closingCta) {
        gsap.from(closingCta.children, {
          autoAlpha: 0,
          y: 52,
          stagger: 0.13,
          duration: 0.86,
          ease: "power3.out",
          scrollTrigger: {
            trigger: closingCta,
            start: "top 82%",
            once: true,
          },
        });
      }

      const footerGrid = document.querySelector<HTMLElement>(".site-footer__grid");
      if (footerGrid) {
        gsap.from(footerGrid.children, {
          autoAlpha: 0,
          y: 36,
          stagger: 0.09,
          duration: 0.76,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerGrid,
            start: "top 90%",
            once: true,
          },
        });
      }

      const footerBottom = document.querySelector<HTMLElement>(".site-footer__bottom");
      if (footerBottom) {
        gsap.from(footerBottom, {
          autoAlpha: 0,
          y: 20,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerBottom,
            start: "top 96%",
            once: true,
          },
        });
      }

      ScrollTrigger.refresh();
      updateProgress();
    });

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      ScrollTrigger.removeEventListener("refresh", updateProgress);
      context.revert();
    };
  }, [pathname]);

  return <div className="scroll-progress" ref={progress} aria-hidden="true" />;
}
