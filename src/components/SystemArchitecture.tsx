"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { systemLayers } from "@/lib/data";

export function SystemArchitecture() {
  const [active, setActive] = useState(systemLayers[0].key);

  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="System Thinking"
          title="How I think about systems."
          subtitle="A request touches every layer of the stack. Hover or select a layer to see what I use to build it."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="rounded-2xl border border-border bg-surface p-2 sm:p-3">
            {systemLayers.map((layer, i) => {
              const isActive = active === layer.key;
              return (
                <button
                  key={layer.key}
                  type="button"
                  onMouseEnter={() => setActive(layer.key)}
                  onFocus={() => setActive(layer.key)}
                  onClick={() => setActive(layer.key)}
                  aria-expanded={isActive}
                  className={
                    "flex w-full flex-col gap-3 rounded-xl px-4 py-4 text-left transition-colors duration-200 sm:flex-row sm:items-center sm:gap-6 sm:px-6 " +
                    (isActive ? "bg-accent-dim" : "hover:bg-surface-raised")
                  }
                >
                  <div className="flex items-center gap-4 sm:w-[280px] sm:shrink-0">
                    <span
                      className={
                        "font-mono-tech text-xs " + (isActive ? "text-accent" : "text-muted-2")
                      }
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={
                        "text-base font-medium " +
                        (isActive ? "text-foreground" : "text-muted")
                      }
                    >
                      {layer.label}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-wrap gap-2">
                    {layer.tech.map((tech) => (
                      <Pill key={tech} tone={isActive ? "accent" : "default"}>
                        {tech}
                      </Pill>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
