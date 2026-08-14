import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { WorkflowStrip } from "@/components/WorkflowStrip";
import type { Project } from "@/lib/data";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={`/work/${project.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-line hover:shadow-xl hover:shadow-accent/5 sm:p-7"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {project.name}
          </h3>
          <span className="font-mono-tech text-xs text-muted-2">{project.year}</span>
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.oneLiner}</p>

        {project.workflow ? (
          <div className="mt-5 overflow-x-auto">
            <WorkflowStrip steps={project.workflow} />
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>

        <div className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
          Explore project
          <ArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </Link>
    </Reveal>
  );
}
