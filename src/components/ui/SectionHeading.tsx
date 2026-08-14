import { clsx } from "clsx";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  id,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={clsx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <p
          id={id}
          className="font-mono-tech text-xs font-medium uppercase tracking-[0.18em] text-accent"
        >
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
