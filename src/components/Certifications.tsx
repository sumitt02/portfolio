import { Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading eyebrow="Certifications" title="Continued learning." />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.05}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-2">
                  <Award size={16} />
                </span>
                <div>
                  <h3 className="text-sm font-medium text-foreground">{cert.name}</h3>
                  <p className="mt-1 text-xs text-muted">
                    {cert.issuer}
                    {cert.date ? ` · ${cert.date}` : ""}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
