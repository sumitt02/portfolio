"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, profile, social } from "@/lib/data";

/**
 * Fixed top bar rendered with mix-blend-difference so the same white marks
 * read as ink on the cream hero and as white on the dark sections.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop(): void; start(): void } }).__lenis;
    if (open) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[60] text-white mix-blend-difference">
        <nav
          aria-label="Primary"
          className="pointer-events-auto mx-auto flex h-20 items-center justify-between px-5 sm:px-10"
        >
          <Link href="/#top" className="font-script text-4xl leading-none" aria-label={`${profile.name}, home`}>
            {profile.name.split(" ")[0]}
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative text-xs font-bold uppercase tracking-[0.14em]"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="group flex h-10 w-10 flex-col items-end justify-center gap-[5px]"
          >
            <span className={`h-[2px] bg-current transition-all duration-300 ${open ? "w-6 translate-y-[7px] rotate-45" : "w-6"}`} />
            <span className={`h-[2px] bg-current transition-all duration-300 ${open ? "w-0 opacity-0" : "w-4 group-hover:w-6"}`} />
            <span className={`h-[2px] bg-current transition-all duration-300 ${open ? "w-6 -translate-y-[7px] -rotate-45" : "w-5 group-hover:w-6"}`} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 3.5rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3.5rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3.5rem) 2.5rem)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] flex flex-col justify-between bg-night px-5 pb-8 pt-28 sm:px-10"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 font-display text-6xl uppercase leading-[1.05] text-foreground transition-colors hover:text-gold sm:text-8xl"
                  >
                    <span className="text-xs font-sans font-bold tracking-[0.2em] text-gold">0{i + 1}</span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap items-end justify-between gap-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              <a href={social.email} className="hover:text-gold">{profile.email}</a>
              <div className="flex gap-6">
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold">LinkedIn</a>
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-gold">GitHub</a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
