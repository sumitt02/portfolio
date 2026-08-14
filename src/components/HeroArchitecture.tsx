"use client";

type Node = { id: string; label: string; x: number; y: number; tone?: "accent" | "default" };

const W = 460;
const H = 560;

const nodes: Node[] = [
  { id: "react", label: "React", x: 230, y: 32, tone: "accent" },
  { id: "api", label: "REST API", x: 230, y: 130 },
  { id: "node", label: "Node / Express", x: 110, y: 232 },
  { id: "prisma", label: "Prisma", x: 110, y: 332 },
  { id: "postgres", label: "PostgreSQL", x: 110, y: 432, tone: "accent" },
  { id: "bullmq", label: "BullMQ", x: 350, y: 232 },
  { id: "redis", label: "Redis", x: 350, y: 332 },
  { id: "worker", label: "Background Worker", x: 350, y: 432, tone: "accent" },
];

const edges: [string, string][] = [
  ["react", "api"],
  ["api", "node"],
  ["api", "bullmq"],
  ["node", "prisma"],
  ["prisma", "postgres"],
  ["bullmq", "redis"],
  ["redis", "worker"],
];

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function HeroArchitecture() {
  return (
    <div
      className="relative mx-auto w-full max-w-[440px]"
      style={{ aspectRatio: `${W} / ${H}` }}
      role="img"
      aria-label="Diagram: React connects to a REST API, which splits into a Node/Express + Prisma + PostgreSQL request path, and a BullMQ + Redis background worker path."
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        {edges.map(([from, to], i) => {
          const a = nodeById(from);
          const b = nodeById(to);
          return (
            <path
              key={`${from}-${to}`}
              d={`M ${a.x} ${a.y + 20} L ${b.x} ${b.y - 20}`}
              stroke="var(--border-strong)"
              strokeWidth={1.5}
              className="flow-line"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          );
        })}
      </svg>

      {nodes.map((n) => (
        <div
          key={n.id}
          className={
            "absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-lg border px-3 py-2 font-mono-tech text-[11px] whitespace-nowrap shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-sm " +
            (n.tone === "accent"
              ? "border-accent-line bg-accent-dim text-accent"
              : "border-border bg-surface text-muted")
          }
          style={{ left: `${(n.x / W) * 100}%`, top: `${(n.y / H) * 100}%` }}
        >
          <span
            className={
              "h-1.5 w-1.5 rounded-full " + (n.tone === "accent" ? "bg-accent" : "bg-muted-2")
            }
          />
          {n.label}
        </div>
      ))}
    </div>
  );
}
