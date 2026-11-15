"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { RotatingBadge } from "@/components/ui/RotatingBadge";
import { onIntroDone } from "@/components/motion/Preloader";
import { profile } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BIG = "FULL-STACK";
const disciplines = ["Frontend", "Backend", "Systems"];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const turbulence = useRef<SVGFETurbulenceElement>(null);
  const displace = useRef<SVGFEDisplacementMapElement>(null);

  // Entrance + scroll-out parallax
  useGSAP(
    () => {
      const intro = gsap.timeline({ paused: true });
      intro
        .from(".hero-char", {
          yPercent: 110,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.045,
        })
        .from(".hero-sub", { yPercent: 110, duration: 0.9, ease: "expo.out" }, "-=0.8")
        .from(".hero-fade", { autoAlpha: 0, y: 14, duration: 0.8, stagger: 0.06 }, "-=0.6");
      const off = onIntroDone(() => intro.play());

      gsap.to(".hero-inner", {
        yPercent: -18,
        scale: 0.94,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      return off;
    },
    { scope: root },
  );

  // Liquid distortion on the giant word: displacement strength follows how
  // fast the pointer moves across it, then eases back to zero.
  useEffect(() => {
    const word = root.current?.querySelector<HTMLElement>(".hero-word");
    if (!word || !displace.current || !turbulence.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const state = { scale: 0, freq: 0.012 };
    let last = { x: 0, y: 0, t: 0 };
    const apply = () => {
      displace.current?.setAttribute("scale", state.scale.toFixed(2));
      turbulence.current?.setAttribute("baseFrequency", `${state.freq.toFixed(4)} ${(state.freq * 2.2).toFixed(4)}`);
    };
    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      const dt = Math.max(16, now - last.t);
      const speed = Math.hypot(e.clientX - last.x, e.clientY - last.y) / dt;
      last = { x: e.clientX, y: e.clientY, t: now };
      gsap.to(state, {
        scale: Math.min(60, 12 + speed * 40),
        freq: 0.008 + Math.random() * 0.012,
        duration: 0.35,
        ease: "power2.out",
        onUpdate: apply,
        overwrite: true,
        onComplete: () => {
          gsap.to(state, { scale: 0, duration: 1.4, ease: "elastic.out(1, 0.4)", onUpdate: apply });
        },
      });
    };
    word.addEventListener("pointermove", onMove);
    return () => word.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative z-0 flex min-h-[100svh] flex-col overflow-hidden bg-cream text-ink"
    >
      <svg className="absolute h-0 w-0" aria-hidden>
        <filter id="liquid" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence ref={turbulence} type="fractalNoise" baseFrequency="0.012 0.026" numOctaves="2" seed="3" result="noise" />
          <feDisplacementMap ref={displace} in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="hero-inner flex flex-1 flex-col items-center justify-center px-4 pt-24 pb-40 sm:pb-36">
        <h1 className="sr-only">
          {profile.name} — Full-Stack Developer
        </h1>
        <div
          aria-hidden
          className="hero-word select-none overflow-hidden pt-[0.22em] font-display leading-[0.82] tracking-[-0.01em] [filter:url(#liquid)]"
          style={{ fontSize: "clamp(4.5rem, 17.2vw, 22rem)" }}
          data-cursor
        >
          <span className="inline-flex origin-bottom scale-y-[1.18]">
            {BIG.split("").map((c, i) => (
              <span key={i} className="hero-char inline-block">
                {c}
              </span>
            ))}
          </span>
        </div>
        <div aria-hidden className="mt-3 overflow-hidden sm:mt-5">
          <div
            className="hero-sub font-display leading-none"
            style={{ fontSize: "clamp(2.25rem, 5.6vw, 6.5rem)" }}
          >
            DEVELOPER
          </div>
        </div>
        <ul className="hero-fade mt-5 flex items-start gap-6 text-[11px] font-bold uppercase tracking-[0.2em] sm:gap-14 sm:text-xs">
          {disciplines.map((d, i) => (
            <li key={d} className={`flex items-center gap-6 sm:gap-14 ${i === 1 ? "-mt-3" : ""}`}>
              {i > 0 ? <span aria-hidden className="-ml-3 h-1.5 w-1.5 rounded-full bg-ink sm:-ml-7" /> : null}
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-6 sm:px-10 sm:pb-8">
        <div className="hero-fade hidden items-baseline gap-2 text-sm font-bold sm:flex">
          ©2026
          <span className="font-script text-3xl font-normal leading-none">{profile.name.split(" ")[0]}</span>
        </div>

        <a
          href="#about"
          className="hero-fade flex flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] sm:absolute sm:left-1/2 sm:-translate-x-1/2"
        >
          Scroll to explore
          <span aria-hidden className="relative block h-6 w-4 rounded-full border-[1.5px] border-ink">
            <span className="animate-scroll-cue absolute left-1/2 top-1 block h-1.5 w-[1.5px] -translate-x-1/2 bg-ink" />
          </span>
        </a>

        <div className="hero-fade flex flex-col items-center gap-3">
          <Link href="/#contact" aria-label="Let's work together — go to contact" data-cursor-label="Hi!">
            <RotatingBadge text="LET'S WORK TOGETHER • LET'S WORK • " size={96} />
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] sm:text-[11px]">
            Based in {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
