"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HeroArchitecture } from "@/components/HeroArchitecture";
import { profile } from "@/lib/data";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] opacity-[0.5]" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="font-mono-tech text-xs font-medium uppercase tracking-[0.18em] text-accent"
            >
              Full-Stack Developer · SDE-1
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: easeOut }}
              className="mt-6 text-balance text-[2.6rem] leading-[1.08] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-[3.75rem]"
            >
              I build production software, from interface to infrastructure.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: easeOut }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              Full-stack developer with hands-on experience shipping production
              web applications across React, Node.js, Python, PostgreSQL,
              MongoDB, and distributed background-processing systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: easeOut }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent-line hover:bg-accent-dim"
              >
                Let&apos;s Connect
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34, ease: easeOut }}
              className="mt-12 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Currently building at {profile.currentlyBuildingAt}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
            className="hidden lg:block"
          >
            <HeroArchitecture />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
