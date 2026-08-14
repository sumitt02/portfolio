import { clsx } from "clsx";

export function Pill({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent";
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono-tech text-[11px] font-medium tracking-wide",
        tone === "accent"
          ? "border-accent-line bg-accent-dim text-accent"
          : "border-border bg-surface text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
