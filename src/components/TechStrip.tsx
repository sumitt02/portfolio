import { Container } from "@/components/ui/Container";
import { techStack } from "@/lib/data";

export function TechStrip() {
  const loop = [...techStack, ...techStack];

  return (
    <section aria-label="Technology stack" className="border-y border-border py-8">
      <Container>
        <p className="mb-6 font-mono-tech text-[11px] uppercase tracking-[0.18em] text-muted-2">
          Working stack
        </p>
      </Container>
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-32" />

        <div className="animate-marquee flex w-max gap-10 group-hover:[animation-play-state:paused]">
          {loop.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-2 font-mono-tech text-sm text-muted-2 transition-colors duration-200 hover:text-accent"
            >
              <span aria-hidden className="h-1 w-1 rounded-full bg-border-strong" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
