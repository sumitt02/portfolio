import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { ProjectMockup } from "@/components/work/Mockups";
import { WorkflowStrip } from "@/components/WorkflowStrip";
import { SocialLink } from "@/components/ui/SocialLink";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.oneLiner,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container className="max-w-4xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
        >
          <ArrowLeft size={15} />
          Back to work
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Pill tone="accent">{project.kind}</Pill>
          {project.status ? <Pill tone="accent">{project.status}</Pill> : null}
          <span className="font-mono-tech text-xs text-muted-2">{project.year}</span>
        </div>

        <h1 className="mt-5 text-balance text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-6xl">
          {project.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>

        <div className="relative mt-12 flex justify-center overflow-hidden rounded-2xl border border-border bg-[#121212] px-6 py-12 sm:px-12">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(201,178,124,0.16),transparent_60%)]"
          />
          <div className="relative w-full [&>*]:mx-auto">
            <ProjectMockup visual={project.visual} />
          </div>
        </div>

        {project.workflow ? (
          <div className="mt-12">
            <h2 className="mb-4 font-mono-tech text-xs uppercase tracking-[0.14em] text-muted-2">
              Workflow
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border bg-surface p-5">
              <WorkflowStrip steps={project.workflow} />
            </div>
          </div>
        ) : null}

        <div className="mt-12">
          <h2 className="mb-5 font-mono-tech text-xs uppercase tracking-[0.14em] text-muted-2">
            At a glance
          </h2>
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <div key={h.label} className="border-l-2 border-border pl-4">
                <dt className="font-mono-tech text-[10px] uppercase tracking-wide text-muted-2">
                  {h.label}
                </dt>
                <dd className="mt-1 text-sm text-foreground">{h.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-muted">
            {project.repoUrl || project.liveUrl
              ? "Have a look:"
              : project.flagship
                ? "I built this at work, so the code and the app aren't public."
                : project.status
                  ? "Still building this one. I'll add links once it's live."
                  : "This was client work, so I can't share the code or a public demo."}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <SocialLink href={project.liveUrl}>Live demo</SocialLink>
            <SocialLink href={project.repoUrl}>Source code</SocialLink>
          </div>
        </div>
      </Container>
    </main>
  );
}
