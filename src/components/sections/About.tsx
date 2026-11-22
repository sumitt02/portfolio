"use client";

import Image from "next/image";
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
  ["web apps", true],
  ["and the", false],
  ["systems behind them.", true],
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
          {/* Identity card: cut-out portrait over a soft gold glow */}
          <div
            className="about-fade group relative aspect-[4/5] self-start overflow-hidden lg:sticky lg:top-28 rounded-2xl border border-white/10 bg-gradient-to-b from-[#161410] to-black grain"
            data-cursor-label="Hey"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(201,178,124,0.22),transparent_62%)]"
            />
            <Image
              src="/sumit-portrait.png"
              alt={`Portrait of ${profile.name}`}
              width={1116}
              height={1216}
              sizes="(min-width: 1024px) 520px, 100vw"
              className="absolute inset-x-0 bottom-0 h-auto w-full origin-bottom transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/70 to-transparent"
            />
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
                  // kept to the sides so they don't cover the face
                  left: `${[5, 70, 4, 72, 6][i]}%`,
                  top: `${[24, 30, 48, 56, 70][i]}%`,
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
                I&apos;m <span className="text-gold">{profile.name.split(" ")[0]}</span>, a full-stack
                developer from Delhi. I enjoy the parts people tend to skip once the demo works: logins and
                permissions, clean data, and code that doesn&apos;t fall over when real users show up.
              </p>
              <p className="about-fade">
                Day to day I write React on the front end and Node.js or Python on the back end, with
                PostgreSQL or MongoDB underneath. When something gets slow, I usually move it to a background
                queue so the app stays snappy.
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
