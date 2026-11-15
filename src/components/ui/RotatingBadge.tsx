import { clsx } from "clsx";
import { ArrowUpRight } from "lucide-react";
import { useId } from "react";

/**
 * Circular badge with text running around its rim and an arrow in the middle.
 * The text is repeated to fill the circle; pass it with a trailing separator.
 */
export function RotatingBadge({
  text,
  size = 112,
  className,
  tone = "dark",
}: {
  text: string;
  size?: number;
  className?: string;
  tone?: "dark" | "light" | "gold";
}) {
  const id = useId().replace(/:/g, "");
  const colors = {
    dark: "text-ink border-ink/30",
    light: "text-foreground border-white/25",
    gold: "text-ink bg-gold border-transparent",
  }[tone];

  return (
    <span
      className={clsx(
        "relative inline-flex shrink-0 items-center justify-center rounded-full border",
        colors,
        className,
      )}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden>
        <defs>
          <path id={`c-${id}`} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text fill="currentColor" style={{ fontSize: 8, fontWeight: 600 }}>
          <textPath href={`#c-${id}`} textLength={2 * Math.PI * 38 - 2} lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <ArrowUpRight size={size * 0.2} strokeWidth={1.6} aria-hidden />
    </span>
  );
}
