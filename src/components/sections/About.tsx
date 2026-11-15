"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { certifications, education, profile, projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Headline split into [text, highlighted] pairs so gold words stay data-driven.
const headline: [string, boolean][] = [
  ["I build", false],
  ["production software", true],
  ["from", false],
  ["interface", true],
  ["to", false],
  ["infrastructure.", true],
];

const stats = [
  { label: "Based", value: profile.location },
  { label: "Role", value: `SDE-1 · ${profile.currentlyBuildingAt}` },
  { label: "Focus", value: "Full-stack / Systems" },
  { label: "Education", value: "B.Tech CSE (IoT), MUJ" },
  { label: "Projects", value: String(projects.length).padStart(2, "0") },
  { label: "Certified", value: `${certifications.length} credentials` },
];

const floatingTags = ["React", "Node.js", "PostgreSQL", "Redis", "FastAPI"];

export function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Gold rule sags like a rope, then pulls taut as the section arrives.
      gsap.fromTo(
        ".about-rope",
        { attr: { d: "M0,6 Q500,70 1000,6" } },
        {
          attr: { d: "M0,6 Q500,6 1000,6" },
          ease: "none",
          scrollTrigger: { trigger: ".about-rope", start: "top 95%", end: "top 35%", scrub: 0.6 },
        },
      );

      gsap.from(".about-title", {
        yPercent: 100,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: ".about-title", start: "top 90%" },
      });

      // Headline words light up as you read down.
      gsap.fromTo(
        ".about-word",
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: { trigger: ".about-headline", start: "top 80%", end: "bottom 45%", scrub: true },
        },
      );

      gsap.from(".about-fade", {
        y: 24,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".about-body", start: "top 80%" },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="about"
      className="relative z-10 -mt-px overflow-hidden bg-black pb-24 pt-24 md:pb-32 md:pt-32"
    >
      <div className="mx-auto max-w-[1360px] px-5 sm:px-10">
        <div className="flex flex-col items-center text-center">
          <Eyebrow index="02">The person behind the code</Eyebrow>
          <div className="overflow-hidden">
            <h2 className="about-title mt-4 text-5xl font-extrabold uppercase tracking-[-0.03em] text-gold sm:text-7xl">
              About me
            </h2>
          </div>
          <svg viewBox="0 0 1000 80" className="mt-6 h-12 w-full max-w-xl overflow-visible" aria-hidden>
            <path className="about-rope" d="M0,6 Q500,70 1000,6" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="about-body mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16">
          {/* Identity card — a typographic stand-in for a portrait */}
          <div
            className="about-fade group relative aspect-[4/5] self-start overflow-hidden lg:sticky lg:top-28 rounded-2xl border border-white/10 bg-gradient-to-b from-[#161410] to-black grain"
            data-cursor-label="Hey"
          >
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center font-display text-[13rem] leading-none text-transparent transition-transform duration-700 ease-out [-webkit-text-stroke:1.5px_var(--gold)] group-hover:scale-110 sm:text-[16rem]"
            >
              SS
            </span>
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center font-display text-[13rem] leading-none text-gold opacity-0 transition-all duration-700 [clip-path:inset(100%_0_0_0)] group-hover:opacity-100 group-hover:[clip-path:inset(0_0_0_0)] sm:text-[16rem]"
            >
              SS
            </span>
            <div className="absolute left-5 top-5 text-lg font-bold uppercase tracking-wide text-foreground">
              {profile.name}
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              <span>{profile.title}</span>
              <span className="text-gold">● Available</span>
            </div>
            {floatingTags.map((t, i) => (
              <span
                key={t}
                aria-hidden
                className="absolute rounded-full border border-gold-line bg-black/70 px-3 py-1 text-[11px] font-semibold text-gold opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100"
                style={{
                  left: `${[10, 58, 6, 62, 34][i]}%`,
                  top: `${[22, 30, 62, 68, 82][i]}%`,
                  transitionDelay: `${i * 60}ms`,
                  transform: `translateY(${i % 2 ? 12 : -12}px)`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <Eyebrow className="about-fade">Who am I ?</Eyebrow>
            <p className="about-headline mt-5 text-3xl font-extrabold uppercase leading-[1.08] tracking-[-0.02em] sm:text-5xl">
              {headline.map(([text, gold], i) => (
                <span key={i} className={gold ? "text-gold" : "text-foreground"}>
                  {text.split(" ").map((w, j) => (
                    <span key={j} className="about-word inline-block">
                      {w}&nbsp;
                    </span>
                  ))}
                </span>
              ))}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 text-sm leading-relaxed text-muted md:grid-cols-2 md:gap-10">
              <p className="about-fade">
                I&apos;m <span className="text-gold">{profile.name.split(" ")[0]}</span> — a full-stack
                developer who cares about what happens after the demo: authentication, authorization,
                data integrity, and code that survives contact with real usage.
              </p>
              <p className="about-fade">
                I move between React interfaces, Node.js and Python services, and PostgreSQL / MongoDB
                data models — and push heavy work onto background queues so the request path stays fast.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="about-fade">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">{s.label}</dt>
                  <dd className="mt-1.5 text-xs font-bold uppercase tracking-[0.08em] text-gold">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="about-fade mt-10 rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-2">Education</p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {education.degree} <span className="text-muted">· {education.school} · {education.period}</span>
              </p>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-2">Certifications</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <li key={c.name} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                    {c.name} <span className="text-muted-2">· {c.issuer.split(" ·")[0]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
