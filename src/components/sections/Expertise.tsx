"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Code2, Database, Layers, Server } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { techStack } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  {
    icon: Code2,
    area: "Frontend",
    title: "Frontend Engineering",
    body: "Interfaces that work on any screen, built from small reusable components with state that's easy to follow.",
    tags: ["React", "Redux Toolkit", "React Query"],
  },
  {
    icon: Server,
    area: "Backend",
    title: "Backend & APIs",
    body: "REST APIs with proper login and permissions, so every user only sees what they're meant to.",
    tags: ["Node.js", "Express", "FastAPI", "JWT / RBAC"],
  },
  {
    icon: Database,
    area: "Data",
    title: "Data & Databases",
    body: "Database schemas that match how the business actually works, with constraints and indexes where they count.",
    tags: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    icon: Layers,
    area: "Systems",
    title: "Async & Infrastructure",
    body: "Slow, heavy jobs go to background queues so the app stays quick. Then it all gets tested and shipped in Docker.",
    tags: ["BullMQ", "Redis", "Celery", "Docker", "Jest"],
  },
];

// Chips that drift around the section and dodge the cursor.
// Positions keep them in the open space around the copy, not on top of it.
const floaters: [string, number, number][] = [
  ["React", 30, 9],
  ["Node.js", 43, 34],
  ["PostgreSQL", 2, 95],
  ["Redis", 92, 3],
  ["FastAPI", 44, 70],
  ["Docker", 93, 96],
];

export function Expertise() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".exp-line", {
        yPercent: 105,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.from(".exp-item", {
        x: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".exp-list", start: "top 80%" },
      });
      gsap.utils.toArray<HTMLElement>(".floater").forEach((el, i) => {
        gsap.to(el, {
          x: `random(-40, 40)`,
          y: `random(-30, 30)`,
          rotation: `random(-14, 14)`,
          duration: `random(3, 5)`,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
          delay: i * 0.2,
        });
      });
    },
    { scope: root },
  );

  // Push floaters away from the pointer.
  useEffect(() => {
    const section = root.current;
    if (!section || !window.matchMedia("(hover: hover)").matches) return;
    const chips = Array.from(section.querySelectorAll<HTMLElement>(".floater-wrap"));
    const onMove = (e: PointerEvent) => {
      chips.forEach((chip) => {
        const r = chip.getBoundingClientRect();
        const dx = r.left + r.width / 2 - e.clientX;
        const dy = r.top + r.height / 2 - e.clientY;
        const d = Math.hypot(dx, dy);
        const push = d < 160 ? (160 - d) / 160 : 0;
        gsap.to(chip, { x: (dx / (d || 1)) * push * 70, y: (dy / (d || 1)) * push * 70, duration: 0.6, ease: "power3.out" });
      });
    };
    section.addEventListener("pointermove", onMove);
    return () => section.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section ref={root} id="expertise" className="relative overflow-hidden bg-night bg-grid py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden opacity-70 lg:block">
        {floaters.map(([f, left, top]) => (
          <span key={f} className="floater-wrap absolute" style={{ left: `${left}%`, top: `${top}%` }}>
            <span className="floater block rounded-lg border border-gold-line bg-black/60 px-3 py-1.5 text-xs font-bold text-gold shadow-[0_8px_30px_rgba(201,178,124,0.12)] backdrop-blur">
              {f}
            </span>
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1360px] grid-cols-1 gap-16 px-5 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <Eyebrow index="04">Expertise</Eyebrow>
          <h2 className="mt-10 text-[clamp(3.25rem,6.6vw,6.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em]">
            <span className="block overflow-hidden">
              <span className="exp-line block text-white/35">My</span>
            </span>
            <span className="block overflow-hidden">
              <span className="exp-line block text-foreground">Expertise</span>
            </span>
          </h2>
          <p className="mt-8 max-w-md text-2xl leading-snug text-foreground/90">
            I like working on the whole thing: <b className="font-bold text-gold">the UI, the API and the database</b>.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            I&apos;m happiest when I can follow a feature all the way through, from the button someone clicks to the
            worker that handles their upload, and fix whatever breaks along the way.
          </p>
          <ul className="mt-8 flex max-w-md flex-wrap gap-2">
            {techStack.map((t) => (
              <li key={t} className="border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <ol className="exp-list self-center border-t border-white/10">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="exp-item group relative grid grid-cols-[2rem_3rem_minmax(0,1fr)] items-start gap-4 border-b border-white/10 py-7 transition-colors duration-500 hover:bg-white/[0.03] sm:grid-cols-[2.5rem_3.5rem_minmax(0,1fr)] sm:gap-6 sm:px-4"
            >
              <span aria-hidden className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-gold transition-transform duration-500 group-hover:scale-y-100" />
              <span className="pt-4 text-xs font-bold text-muted-2">0{i + 1}</span>
              <span className="flex h-12 w-12 items-center justify-center border border-white/15 text-gold transition-all duration-500 group-hover:rotate-[-8deg] group-hover:border-gold-line group-hover:bg-gold-soft">
                <s.icon size={18} strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-2">
                  0{i + 1} / {s.area}
                </p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{s.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{s.body}</p>
                <ul className="mt-3 flex flex-wrap gap-x-3 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-2">
                  {s.tags.map((t, j) => (
                    <li key={t} className="flex gap-3">
                      {j > 0 ? <span aria-hidden>·</span> : null}
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
