// Abstract, non-literal representation of "live meteorological data" —
// decorative only, does not claim to represent real measurements.
const points = [22, 34, 28, 46, 40, 58, 50, 64, 55, 70, 62, 48];

export function WeatherSparkline() {
  const w = 240;
  const h = 64;
  const max = Math.max(...points);
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");

  return (
    <div
      className="flex items-center gap-4 rounded-lg border border-border bg-surface-raised px-4 py-3"
      role="img"
      aria-label="Abstract data visualization representing a live weather dashboard feed"
    >
      <svg viewBox={`0 0 ${w} ${h}`} className="h-12 w-32 shrink-0 sm:w-40">
        <path d={path} fill="none" stroke="var(--accent)" strokeWidth={2} strokeLinecap="round" />
      </svg>
      <div className="font-mono-tech text-[11px] leading-relaxed text-muted-2">
        <span className="block text-foreground">Live feed</span>
        Meteorological UI components
      </div>
    </div>
  );
}
