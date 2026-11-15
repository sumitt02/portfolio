"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Custom cursor: a small dot that swells into a disc over anything
 * interactive. It uses mix-blend-difference so it reads on both the cream
 * hero and the dark sections. Only mounts behaviour on fine pointers.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dot.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    document.documentElement.classList.add("has-cursor");
    const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

    let shown = false;
    const onMove = (e: PointerEvent) => {
      if (!shown) {
        gsap.set(el, { x: e.clientX, y: e.clientY });
        gsap.to(el, { autoAlpha: 1, duration: 0.3 });
        shown = true;
      }
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as Element | null;
      const hot = target?.closest("a, button, input, textarea, [data-cursor]");
      const label = hot?.getAttribute("data-cursor-label");
      el.dataset.state = hot ? (label ? "label" : "hover") : "idle";
      const text = el.querySelector("span");
      if (text) text.textContent = label ?? "";
    };
    const onLeave = () => {
      gsap.to(el, { autoAlpha: 0, duration: 0.2 });
      shown = false;
    };
    const onDown = () => gsap.to(el, { scale: 0.8, duration: 0.15 });
    const onUp = () => gsap.to(el, { scale: 1, duration: 0.25 });

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden
      data-state="idle"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-0 mix-blend-difference transition-[width,height] duration-300 ease-out [@media(hover:hover)_and_(pointer:fine)]:flex data-[state=hover]:h-14 data-[state=hover]:w-14 data-[state=idle]:h-3 data-[state=idle]:w-3 data-[state=label]:h-24 data-[state=label]:w-24"
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black" />
    </div>
  );
}
