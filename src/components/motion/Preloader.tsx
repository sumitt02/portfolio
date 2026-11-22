"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { PRELOADER_SEEN_KEY as SEEN_KEY } from "@/lib/preloader";


/** Fires once the intro is out of the way (immediately if it was skipped). */
export function onIntroDone(cb: () => void) {
  const w = window as unknown as { __introDone?: boolean };
  if (w.__introDone) {
    cb();
    return () => {};
  }
  window.addEventListener("intro:done", cb, { once: true });
  return () => window.removeEventListener("intro:done", cb);
}

function finish() {
  (window as unknown as { __introDone?: boolean }).__introDone = true;
  window.dispatchEvent(new Event("intro:done"));
}


/**
 * Gold percentage counter + ring that draws as it "loads", then a handwritten
 * "hello", then the panel lifts away to reveal the hero. Shown once per tab.
 */
export function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const ring = useRef<SVGCircleElement>(null);
  const hello = useRef<HTMLSpanElement>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    // Already hidden by CSS before paint; just release anything waiting on it.
    // The skip script in the layout only runs on a full page load, so on client-side
    // navigation back to "/" we also check the session flag here.
    let seen = false;
    try {
      seen = !!sessionStorage.getItem(SEEN_KEY);
    } catch {}
    if (seen || document.documentElement.dataset.loader === "skip") {
      document.documentElement.dataset.loader = "skip";
      finish();
      return;
    }

    const lenis = (window as unknown as { __lenis?: { stop(): void; start(): void } }).__lenis;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const state = { v: 0 };
    const circumference = 2 * Math.PI * 46;
    const tl = gsap.timeline({
      onComplete: () => {
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {}
        // Keeps the loader hidden (via CSS, before paint) if the homepage
        // remounts later in this tab, e.g. coming back from a project page.
        document.documentElement.dataset.loader = "skip";
        document.body.style.overflow = "";
        lenis?.start();
        setGone(true);
      },
    });

    tl.to(state, {
      v: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (count.current) count.current.textContent = `${Math.round(state.v)}%`;
        ring.current?.setAttribute(
          "stroke-dashoffset",
          String(circumference * (1 - state.v / 100)),
        );
      },
    })
      .to(".pl-counter", { yPercent: -40, autoAlpha: 0, duration: 0.5, ease: "power3.in" })
      .fromTo(
        hello.current,
        { clipPath: "inset(0 100% 0 0)", autoAlpha: 1 },
        { clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "power2.inOut" },
        "-=0.1",
      )
      .to(hello.current, { autoAlpha: 0, duration: 0.35 }, "+=0.35")
      .add(finish)
      .to(el, { yPercent: -100, duration: 0.9, ease: "expo.inOut" }, "<");

    return () => {
      tl.kill();
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={root}
      aria-hidden
      className="fixed inset-0 z-[90] flex items-center justify-center bg-night text-gold [[data-loader=skip]_&]:hidden"
    >
      <div className="pl-counter flex flex-col items-center gap-6">
        <span ref={count} className="font-display text-7xl leading-none sm:text-8xl">
          0%
        </span>
        <svg width="104" height="104" viewBox="0 0 104 104" className="-rotate-90">
          <circle cx="52" cy="52" r="46" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="10" />
          <circle
            ref={ring}
            cx="52"
            cy="52"
            r="46"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 46}
            strokeDashoffset={2 * Math.PI * 46}
          />
        </svg>
      </div>
      <span
        ref={hello}
        className="invisible absolute inset-0 flex items-center justify-center font-script text-[22vw] leading-none sm:text-[12rem]"
      >
        hello
      </span>
    </div>
  );
}
