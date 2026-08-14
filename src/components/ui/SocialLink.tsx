import { clsx } from "clsx";
import type { ReactNode } from "react";

/**
 * Renders a real link when a URL is present. When the source resume didn't
 * supply one (LinkedIn / GitHub), renders a visibly disabled placeholder
 * instead of fabricating a URL.
 */
export function SocialLink({
  href,
  children,
  className,
  variant = "ghost",
}: {
  href: string | null;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200";

  if (!href) {
    return (
      <span
        aria-disabled="true"
        title="Not provided"
        className={clsx(
          base,
          "cursor-not-allowed border border-border text-muted-2 opacity-60",
          className,
        )}
      >
        {children}
        <span className="font-mono-tech text-[10px] uppercase tracking-wide">soon</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={clsx(
        base,
        variant === "solid"
          ? "bg-foreground text-background hover:opacity-90"
          : "border border-border-strong text-foreground hover:border-accent-line hover:bg-accent-dim",
        className,
      )}
    >
      {children}
    </a>
  );
}
