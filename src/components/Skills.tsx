"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skills, type SkillCategory } from "@/lib/data";

function SkillsCard({ category, delay = 0 }: { category: SkillCategory; delay?: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = category.items[activeIndex];

  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
        <h3 className="font-mono-tech text-xs font-medium uppercase tracking-[0.14em] text-accent">
          {category.category}
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {category.items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
              className={
                "rounded-full border px-3 py-1.5 text-sm transition-colors duration-150 " +
                (activeIndex === i
                  ? "border-accent-line bg-accent-dim text-accent"
                  : "border-border text-foreground/85 hover:border-border-strong")
              }
            >
              {item.name}
            </button>
          ))}
        </div>

        <p className="mt-6 min-h-[2.5rem] border-t border-border pt-4 text-sm leading-relaxed text-muted">
          <span className="text-foreground">{active.name}</span> — {active.note}
        </p>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technical Skills"
          title="A working technical ecosystem."
          subtitle="Not a proficiency score — the tools and patterns I actually reach for when building."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, i) => (
            <SkillsCard key={category.category} category={category} delay={i * 0.05} />
          ))}
        </div>
      </Container>
    </section>
  );
}
