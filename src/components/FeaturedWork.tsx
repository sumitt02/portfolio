import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectFlagship } from "@/components/ProjectFlagship";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export function FeaturedWork() {
  const flagship = projects.find((p) => p.flagship)!;
  const rest = projects.filter((p) => !p.flagship);

  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="A few systems I've designed and built."
          subtitle="Production-oriented projects spanning enterprise CRM workflows, AI-assisted hiring pipelines, and role-based clinical operations."
        />

        <div className="mt-14 flex flex-col gap-6">
          <ProjectFlagship project={flagship} />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.slug} project={project} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
