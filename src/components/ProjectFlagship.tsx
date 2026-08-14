import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CRMPreview } from "@/components/CRMPreview";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/lib/data";

export function ProjectFlagship({ project }: { project: Project }) {
  return (
    <Reveal>
      <Link
        href={`/work/${project.slug}`}
        className="group block rounded-2xl border border-border-strong bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-line hover:shadow-2xl hover:shadow-accent/5 sm:p-8 lg:p-10"
      >
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Pill tone="accent">Featured Project</Pill>
          <span className="font-mono-tech text-xs text-muted-2">{project.year}</span>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <div key={h.label} className="border-l-2 border-border pl-3">
                  <dt className="font-mono-tech text-[10px] uppercase tracking-wide text-muted-2">
                    {h.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{h.detail}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              Explore case study
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>

          <div className="flex items-center transition-transform duration-300 group-hover:scale-[1.015]">
            <CRMPreview />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
