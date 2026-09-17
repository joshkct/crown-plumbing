"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      anchors: {
        offset: 0,
        lerp: 0.09,
      },
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
    });

    lenisRef.current = lenis;

    const updateScrollTrigger = () => ScrollTrigger.update();
    const updateLenis = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      lenisRef.current = null;
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    let settleTimer = 0;

    const scrollToRouteDestination = () => {
      const hash = window.location.hash;

      if (hash && document.querySelector(hash)) {
        lenis.scrollTo(hash, { offset: 0, immediate: true, force: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        lenis.scrollTo(0, { immediate: true, force: true });
      }

      ScrollTrigger.refresh();
    };

    const frame = window.requestAnimationFrame(() => {
      scrollToRouteDestination();
      settleTimer = window.setTimeout(scrollToRouteDestination, 80);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
    };
  }, [pathname]);

  return null;
}
