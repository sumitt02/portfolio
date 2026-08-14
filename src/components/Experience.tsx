import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { WeatherSparkline } from "@/components/WeatherSparkline";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been building."
          subtitle="Professional experience across enterprise product engineering and backend/API development."
        />

        <div className="mt-14 flex flex-col gap-6">
          {experience.map((item) => (
            <Reveal key={item.company}>
              <article
                className={
                  "relative rounded-2xl border p-6 sm:p-8 " +
                  (item.flagship
                    ? "border-accent-line bg-accent-dim/40"
                    : "border-border bg-surface")
                }
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {item.company}
                      </h3>
                      {item.flagship ? (
                        <Pill tone="accent">Current</Pill>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-muted">{item.role}</p>
                  </div>
                  <span className="font-mono-tech text-xs whitespace-nowrap text-muted-2">
                    {item.period}
                  </span>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>

                <ul
                  className={
                    "mt-6 grid list-none gap-2.5 " +
                    (item.flagship ? "sm:grid-cols-2" : "sm:grid-cols-2")
                  }
                >
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {item.company === "Skymet Weather Services" ? (
                  <div className="mt-6">
                    <WeatherSparkline />
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
