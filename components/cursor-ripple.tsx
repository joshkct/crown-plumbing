"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const interactiveSelector =
  "a[href], button:not([disabled]), summary, [role='button'], input[type='button'], input[type='submit'], label[for]";

export function CursorRipple() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorElement = cursor.current;
    const supportsCursor = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!cursorElement || !supportsCursor.matches || reduceMotion.matches) return;

    const ripples = cursorElement.querySelectorAll<HTMLElement>(".cursor-ripple__wave");
    const moveX = gsap.quickTo(cursorElement, "x", {
      duration: 0.16,
      ease: "power3.out",
    });
    const moveY = gsap.quickTo(cursorElement, "y", {
      duration: 0.16,
      ease: "power3.out",
    });

    let hasPosition = false;
    let activeInteractive: Element | null = null;

    const findInteractive = (target: EventTarget | null) =>
      target instanceof Element ? target.closest(interactiveSelector) : null;

    const playRipple = () => {
      gsap.killTweensOf(ripples);
      gsap.fromTo(
        ripples,
        { autoAlpha: 0.58, scale: 0.72 },
        {
          autoAlpha: 0,
          scale: 2.3,
          duration: 0.68,
          stagger: 0.09,
          ease: "power2.out",
          overwrite: true,
        },
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!hasPosition) {
        gsap.set(cursorElement, { x: event.clientX, y: event.clientY });
        cursorElement.classList.add("is-visible");
        hasPosition = true;
        return;
      }

      moveX(event.clientX);
      moveY(event.clientY);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const interactive = findInteractive(event.target);
      if (!interactive || interactive === activeInteractive) return;

      activeInteractive = interactive;
      cursorElement.classList.add("is-interactive");
      playRipple();
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!activeInteractive) return;

      const nextInteractive = findInteractive(event.relatedTarget);
      if (nextInteractive === activeInteractive) return;

      activeInteractive = null;
      cursorElement.classList.remove("is-interactive");
    };

    const handlePointerLeave = () => {
      cursorElement.classList.remove("is-visible", "is-interactive");
      activeInteractive = null;
      hasPosition = false;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("pointerout", handlePointerOut, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      gsap.killTweensOf([cursorElement, ...ripples]);
    };
  }, []);

  return (
    <div className="cursor-ripple" ref={cursor} aria-hidden="true">
      <span className="cursor-ripple__ring" />
      <span className="cursor-ripple__wave" />
      <span className="cursor-ripple__wave" />
    </div>
  );
}
