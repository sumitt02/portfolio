import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { CRMPreview } from "@/components/CRMPreview";
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
          <Pill tone="accent">{project.flagship ? "Featured Project" : "Project"}</Pill>
          <span className="font-mono-tech text-xs text-muted-2">{project.year}</span>
        </div>

        <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>

        {project.slug === "enterprise-crm-platform" ? (
          <div className="mt-12">
            <CRMPreview />
          </div>
        ) : null}

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
              ? "Links below."
              : project.flagship
                ? "This is a production system built for an employer and isn't publicly hosted, so there's no public repo or live demo to link to."
                : "No public repository or live demo is linked for this project yet."}
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
