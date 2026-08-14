import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
          <SectionHeading eyebrow="About" title="A little about me." />

          <Reveal delay={0.1}>
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted">
              <p>
                I&apos;m a full-stack developer who cares about what happens after the
                demo — the parts of a system that make it production-ready:
                authentication, authorization, data integrity, and code that
                survives contact with real usage.
              </p>
              <p>
                Most of my time is spent moving between the frontend, the API
                layer, and the database — building React interfaces backed by
                Node.js and Python services, modeled on PostgreSQL and MongoDB,
                and offloading heavy or bulk work to background workers instead
                of blocking the request path.
              </p>
              <p>
                I&apos;m currently building a large role-based enterprise CRM at
                PanScience Innovation, and most of what I know about
                production engineering has come from building things end to
                end — not just the feature, but the system around it.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
