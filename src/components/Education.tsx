import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted">
                <GraduationCap size={18} />
              </span>
              <div>
                <h3 className="text-base font-medium text-foreground">{education.degree}</h3>
                <p className="mt-0.5 text-sm text-muted">{education.school}</p>
              </div>
            </div>
            <span className="font-mono-tech text-xs text-muted-2">{education.period}</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
