import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { principles } from "@/lib/data";

export function EngineeringPrinciples() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Philosophy" title="More than writing code." />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7 transition-colors duration-200 hover:border-border-strong">
                <span className="font-mono-tech text-xs text-muted-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{principle.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
