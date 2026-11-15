import { clsx } from "clsx";

/** Tiny wide-tracked label, e.g. "02 ——— THE PERSON BEHIND THE CODE". */
export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={clsx("eyebrow flex items-center gap-3 text-muted", className)}>
      {index ? <span className="text-gold">{index}</span> : null}
      <span aria-hidden className="h-px w-10 bg-current opacity-50" />
      <span>{children}</span>
    </p>
  );
}
