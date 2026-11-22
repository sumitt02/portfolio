"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RotatingBadge } from "@/components/ui/RotatingBadge";
import { ProjectMockup } from "@/components/work/Mockups";
import { projects, techStack } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const disciplines = ["UI Engineering", "Full-Stack Apps", "Mobile + Web", "APIs & Data", "Systems"];

// Drops that ooze off the bottom of the giant word (left %, size px, delay s)
const drips: [number, number, number][] = [
  [9, 18, 0], [17, 12, 1.1], [27, 26, 0.4], [34, 10, 2], [45, 20, 0.8], [52, 14, 1.6],
  [61, 24, 0.2], [70, 12, 1.3], [79, 22, 0.6], [88, 16, 1.9], [94, 10, 0.9],
];

export function Work() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Giant WORK rises and tightens as it scrolls in.
      gsap.fromTo(
        ".work-word",
        { yPercent: 30, scale: 0.86 },
        {
          yPercent: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: ".work-splash", start: "top bottom", end: "center center", scrub: true },
        },
      );

      // The drips run forever through the #goo SVG filter, which re-renders
      // every frame — so only let them run while the splash is on screen.
      const drips = gsap.utils.toArray<HTMLElement>(".drip").map((d) =>
        gsap.fromTo(
          d,
          { y: 0, scale: 1 },
          {
            y: `random(60, 140)`,
            scale: 0,
            duration: `random(1.8, 2.8)`,
            ease: "power2.in",
            repeat: -1,
            delay: Number(d.dataset.delay),
            repeatDelay: 0.4,
            paused: true,
          },
        ),
      );
      ScrollTrigger.create({
        trigger: ".work-word",
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => drips.forEach((t) => (self.isActive ? t.resume() : t.pause())),
      });

      // Stacked cards (desktop only — on phones a card is taller than the
      // screen, so pinning it would hide its lower half): each one shrinks
      // back and dims as the next slides over it. The dimming fades a black
      // overlay rather than animating `filter: brightness()`, which forced the
      // GPU to re-filter several huge layers every frame and could make the
      // screen flash black mid-scroll.
      gsap.matchMedia().add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".work-card");
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;
          const scrollTrigger = {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top 12%",
            scrub: true,
          };
          gsap.to(card, { scale: 0.9, ease: "none", scrollTrigger });
          gsap.to(card.querySelector(".work-shade"), { opacity: 0.55, ease: "none", scrollTrigger });
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="work" className="relative bg-night bg-grid">
      {/* Splash */}
      <div className="work-splash relative overflow-hidden pb-16 pt-24 md:pt-32">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 px-5 text-[11px] font-bold uppercase tracking-[0.16em] text-gold/40">
          {techStack.slice(0, 8).map((t, i) => (
            <li key={t} className={i === 0 ? "text-gold" : ""}>
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-2xl font-light uppercase tracking-tight text-gold/90 sm:text-4xl">Scroll to explore my</p>
          <span aria-hidden className="relative h-8 w-px bg-gold/70">
            <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full border border-gold" />
          </span>
        </div>

        <svg className="absolute h-0 w-0" aria-hidden>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </svg>

        <h2 className="work-word relative mx-auto mt-6 w-fit select-none [filter:url(#goo)]">
          <span
            className="block font-extrabold uppercase leading-[0.8] tracking-[-0.06em] text-gold"
            style={{ fontSize: "clamp(6rem, 27vw, 30rem)" }}
          >
            Work
          </span>
          {drips.map(([left, size, delay], i) => (
            <span
              key={i}
              aria-hidden
              data-delay={delay}
              className="drip absolute rounded-full bg-gold"
              style={{ left: `${left}%`, bottom: "6%", width: size, height: size }}
            />
          ))}
        </h2>

        <div className="relative mt-24 overflow-hidden border-y border-white/10 py-5">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
            {[...disciplines, ...disciplines, ...disciplines, ...disciplines].map((d, i) => (
              <span key={i} className="flex items-center gap-10 text-sm font-extrabold uppercase tracking-[0.08em] text-foreground">
                {d}
                <span aria-hidden className="text-gold">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <Eyebrow index="05">Selected projects</Eyebrow>
          <p className="font-display text-4xl uppercase text-gold sm:text-5xl">My work</p>
        </div>
      </div>

      {/* Stacked project cards */}
      <div className="mx-auto max-w-[1360px] px-3 pb-32 sm:px-10">
        {projects.map((p, i) => (
          <div key={p.slug} className="mb-6 last:mb-0 lg:sticky lg:top-[8vh] lg:mb-[10vh]">
            <div className="work-card group relative grid origin-top lg:min-h-[78vh] grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-[#121212] grain lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              {/* The whole card opens the case study. It's an overlay rather than a
                  wrapper so the live/source links below can be real links too
                  (links can't be nested). The text column lets clicks fall
                  through to it, except on those links. */}
              <Link
                href={`/work/${p.slug}`}
                aria-label={`View case study: ${p.name}`}
                data-cursor-label="View"
                className="absolute inset-0 z-[5] rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-gold"
              />

              {/* big ghost word */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-10 font-display text-[16rem] uppercase leading-none text-white/[0.03] sm:text-[22rem]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="pointer-events-none relative z-10 flex flex-col justify-between gap-10 p-6 sm:p-10 lg:p-14">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span aria-hidden className="h-px w-10 bg-gold/60" />
                    <span className="eyebrow text-gold">
                      {p.kind} · {String(i + 1).padStart(2, "0")}
                    </span>
                    {p.status ? (
                      <span className="flex items-center gap-1.5 rounded-full border border-gold-line bg-gold-soft px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                        {p.status}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-6 text-balance text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-6xl">
                    {p.name}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted">{p.oneLiner}</p>
                </div>

                <div>
                  <ul className="flex flex-wrap gap-2">
                    {p.stack.slice(0, 5).map((t) => (
                      <li key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-foreground/80">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <div className="flex flex-col items-start gap-4">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted">{p.year}</span>
                      {p.liveUrl || p.repoUrl ? (
                        <div className="pointer-events-auto flex flex-wrap gap-2">
                          {p.liveUrl ? (
                            <a
                              href={p.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-black transition-colors hover:bg-foreground"
                            >
                              Live demo <span aria-hidden>↗</span>
                            </a>
                          ) : null}
                          {p.repoUrl ? (
                            <a
                              href={p.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-gold hover:text-gold"
                            >
                              Source code <span aria-hidden>↗</span>
                            </a>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                    <RotatingBadge
                      text="VIEW PROJECT • CASE STUDY • "
                      size={92}
                      tone="light"
                      className="bg-black/60 transition-transform duration-500 group-hover:scale-110 group-hover:border-gold-line group-hover:text-gold"
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center overflow-hidden px-6 pb-14 pt-4 lg:p-12">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(201,178,124,0.18),transparent_60%)]"
                />
                <div className="relative w-full transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03] [&>*]:mx-auto">
                  <ProjectMockup visual={p.visual} />
                </div>
              </div>

              {/* dims the card as the next one stacks over it (see useGSAP) */}
              <span aria-hidden className="work-shade pointer-events-none absolute inset-0 z-20 bg-black opacity-0" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
