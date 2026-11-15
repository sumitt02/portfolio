import { CRMPreview } from "@/components/CRMPreview";
import type { Project } from "@/lib/data";

/*
 * Illustrated, abstract mockups for each project card. None of these are
 * screenshots of client work — they suggest the kind of product without
 * showing (or naming) anything confidential.
 */

function TvMockup() {
  const rows = [
    { label: "Continue watching", tiles: 5, wide: true },
    { label: "Live channels", tiles: 7, wide: false },
  ];
  return (
    <div className="relative w-full max-w-[560px]">
      <div className="rounded-[14px] border border-white/15 bg-[#050505] p-2 shadow-[0_40px_120px_-30px_rgba(201,178,124,0.35)]">
        <div className="overflow-hidden rounded-md bg-[#0c0b09]">
          {/* top bar */}
          <div className="flex items-center gap-4 whitespace-nowrap px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
            <span className="h-3 w-3 rounded-sm bg-gold" />
            <span className="text-white">Home</span>
            <span>Live TV</span>
            <span>Movies</span>
            <span>Sports</span>
            <span className="ml-auto h-4 w-4 rounded-full border border-white/30" />
          </div>
          {/* hero banner */}
          <div className="relative mx-3 h-32 overflow-hidden rounded-md bg-gradient-to-r from-[#3a2a12] via-[#7a5a2a] to-[#c9b27c] sm:h-40">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.35),transparent_55%)]" />
            <div className="absolute bottom-3 left-4 space-y-1.5">
              <div className="h-3 w-28 rounded-sm bg-white/90" />
              <div className="h-1.5 w-40 rounded-sm bg-white/50" />
              <div className="mt-2 flex gap-1.5">
                <div className="h-4 w-14 rounded-sm bg-white" />
                <div className="h-4 w-14 rounded-sm border border-white/60" />
              </div>
            </div>
          </div>
          {rows.map((row) => (
            <div key={row.label} className="px-3 pt-3 last:pb-4">
              <div className="mb-2 h-1.5 w-20 rounded-sm bg-white/40" />
              <div className="flex gap-2 overflow-hidden">
                {Array.from({ length: row.tiles }).map((_, i) => (
                  <div
                    key={i}
                    className={`${row.wide ? "h-12 w-24" : "h-10 w-10 rounded-full"} shrink-0 rounded-[5px] ${
                      i === 0 ? "ring-2 ring-gold" : ""
                    }`}
                    style={{
                      background: `linear-gradient(135deg, hsl(${28 + (i % 4) * 6} 32% ${16 + (i % 3) * 9}%), hsl(${36 + (i % 3) * 4} 30% ${8 + (i % 2) * 6}%))`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto h-3 w-24 rounded-b-md bg-white/10" />
      <div className="mx-auto h-1 w-44 rounded-full bg-white/10" />
    </div>
  );
}

function PhotoMockup() {
  const tones = [
    "from-[#2b2116] to-[#8a6b3d]",
    "from-[#1d1d1d] to-[#5a5a5a]",
    "from-[#3b2a1c] to-[#c9b27c]",
    "from-[#10141a] to-[#4b5563]",
    "from-[#2a1c14] to-[#a07850]",
    "from-[#151515] to-[#2e2e2e]",
  ];
  return (
    <div className="relative flex w-full max-w-[580px] items-end justify-center">
      {/* website */}
      <div className="w-[82%] overflow-hidden rounded-lg border border-white/15 bg-[#f2eae1] shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-black/10 px-3 py-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-black/20" />
          ))}
          <span className="ml-3 font-script text-lg leading-none text-black">Studio</span>
          <span className="ml-auto flex gap-3 text-[7px] font-bold uppercase tracking-[0.18em] text-black/60">
            <span>Work</span>
            <span>Packages</span>
            <span>Book</span>
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-2">
          <div className={`col-span-2 row-span-2 h-40 rounded bg-gradient-to-br ${tones[0]}`} />
          <div className={`h-[4.85rem] rounded bg-gradient-to-br ${tones[1]}`} />
          <div className={`h-[4.85rem] rounded bg-gradient-to-br ${tones[2]}`} />
          <div className={`h-14 rounded bg-gradient-to-br ${tones[3]}`} />
          <div className={`h-14 rounded bg-gradient-to-br ${tones[4]}`} />
          <div className={`h-14 rounded bg-gradient-to-br ${tones[5]}`} />
        </div>
      </div>
      {/* phone */}
      <div className="absolute -bottom-4 right-0 w-[30%] min-w-[120px] rounded-[22px] border border-white/20 bg-black p-1.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="overflow-hidden rounded-[17px] bg-[#0d0d0d]">
          <div className="mx-auto mt-1.5 h-1.5 w-10 rounded-full bg-white/15" />
          <div className="px-2 pb-1 pt-2 text-[7px] font-bold uppercase tracking-[0.16em] text-gold">My gallery</div>
          <div className="grid grid-cols-2 gap-1 px-1.5">
            {tones.map((t, i) => (
              <div key={i} className={`aspect-square rounded-[4px] bg-gradient-to-br ${t}`} />
            ))}
          </div>
          <div className="m-1.5 mt-2 rounded-md bg-gold py-1.5 text-center text-[7px] font-bold uppercase tracking-[0.14em] text-black">
            Book a shoot
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenerMockup() {
  const scores = [92, 81, 74, 58];
  return (
    <div className="w-full max-w-[520px] rounded-xl border border-white/15 bg-[#0d0d0d] p-5 shadow-2xl">
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
        <span>Senior Backend Engineer</span>
        <span className="text-gold">48 resumes · scored</span>
      </div>
      <div className="mt-5 space-y-3">
        {scores.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-[#3b2a1c] to-[#c9b27c]" />
            <span className="h-2 w-24 shrink-0 rounded-sm bg-white/25" />
            <div className="h-2 flex-1 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gold" style={{ width: `${s}%` }} />
            </div>
            <span className="w-8 text-right text-xs font-bold text-foreground">{s}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-4 gap-2 text-center text-[9px] font-bold uppercase tracking-[0.14em] text-muted">
        {["Upload", "Process", "Score", "Compare"].map((s, i) => (
          <span key={s} className={`rounded border px-1 py-2 ${i === 2 ? "border-gold-line text-gold" : "border-white/10"}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function ClinicMockup() {
  return (
    <div className="grid w-full max-w-[520px] grid-cols-[1fr_1.3fr] gap-3">
      <div className="flex flex-col items-center justify-center rounded-xl border border-gold-line bg-gold-soft p-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Now serving</span>
        <span className="mt-2 whitespace-nowrap font-display text-5xl leading-none text-foreground sm:text-7xl">A-17</span>
        <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Dr. room 2</span>
      </div>
      <div className="rounded-xl border border-white/15 bg-[#0d0d0d] p-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Queue</span>
        <ul className="mt-3 space-y-2">
          {["A-18", "A-19", "A-20", "A-21"].map((t, i) => (
            <li key={t} className="flex items-center gap-3 rounded-md border border-white/10 px-3 py-2">
              <span className="text-xs font-bold text-foreground">{t}</span>
              <span className="h-1.5 flex-1 rounded-sm bg-white/15" />
              <span className={`h-2 w-2 rounded-full ${i === 0 ? "bg-gold" : "bg-white/20"}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ProjectMockup({ visual }: { visual: Project["visual"] }) {
  switch (visual) {
    case "crm":
      return (
        <div className="w-full max-w-[580px]">
          <CRMPreview />
        </div>
      );
    case "tv":
      return <TvMockup />;
    case "photo":
      return <PhotoMockup />;
    case "screener":
      return <ScreenerMockup />;
    case "clinic":
      return <ClinicMockup />;
  }
}
