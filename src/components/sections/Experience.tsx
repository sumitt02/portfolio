"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { experience } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Experience() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".xp-title-line", {
        yPercent: 105,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
      gsap.utils.toArray<HTMLElement>(".xp-row").forEach((row) => {
        gsap.from(row, {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 85%" },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="experience" className="relative bg-night bg-grid py-24 md:py-32">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-10">
        <Eyebrow index="03">Experience</Eyebrow>
        <h2 className="mt-6 font-display text-[clamp(3.5rem,10vw,9rem)] uppercase leading-[0.9]">
          <span className="block overflow-hidden">
            <span className="xp-title-line block text-white/30">Where I&apos;ve</span>
          </span>
          <span className="block overflow-hidden">
            <span className="xp-title-line block text-foreground">been building</span>
          </span>
        </h2>

        <ol className="mt-16 border-t border-white/10">
          {experience.map((item, i) => (
            <li
              key={item.company}
              className="xp-row group relative grid grid-cols-1 gap-6 border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-[180px_minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:px-6"
            >
              <span aria-hidden className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-gold transition-transform duration-500 group-hover:scale-y-100" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-muted-2">0{i + 1}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-gold">{item.period}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{item.company}</h3>
                  {item.flagship ? (
                    <span className="rounded-full border border-gold-line bg-gold-soft px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-muted">{item.role}</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{item.summary}</p>
              </div>
              <div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                      <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-2">
                  {item.stack.map((t, j) => (
                    <li key={t} className="flex items-center gap-3">
                      {j > 0 ? <span aria-hidden>/</span> : null}
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
