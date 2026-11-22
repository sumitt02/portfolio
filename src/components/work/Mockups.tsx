import { CRMPreview } from "@/components/CRMPreview";
import type { Project } from "@/lib/data";

/*
 * Illustrated, abstract mockups for each project card. None of these are
 * screenshots of client work — they suggest the kind of product without
 * showing (or naming) anything confidential.
 */

/** A phone frame shared by the TV subscriber app screens. */
function Phone({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-[26px] border border-white/20 bg-black p-1.5 ${className}`}>
      <div className="overflow-hidden rounded-[21px] bg-[#0d0c0a]">
        <div className="mx-auto mt-1.5 h-1.5 w-12 rounded-full bg-white/15" />
        {children}
      </div>
    </div>
  );
}

function TvMockup() {
  const actions = ["Packs", "Upgrade", "Get help", "Multi-TV"];
  const channels = [
    { on: true, w: "w-16" },
    { on: true, w: "w-12" },
    { on: false, w: "w-20" },
    { on: true, w: "w-14" },
    { on: false, w: "w-10" },
  ];
  return (
    <div className="relative flex w-full max-w-[520px] items-end justify-center gap-0 pb-2">
      {/* pack builder, tucked behind */}
      <Phone className="z-0 -mr-6 mb-6 w-[42%] min-w-[150px] rotate-[-4deg] opacity-90 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="px-3 pb-1 pt-3 text-[8px] font-bold uppercase tracking-[0.16em] text-gold">Build your pack</div>
        <div className="space-y-1.5 px-2.5 pt-1">
          {channels.map((c, i) => (
            <div key={i} className="flex items-center gap-2 rounded-md bg-white/[0.04] px-2 py-1.5">
              <span
                className="h-5 w-5 shrink-0 rounded-[5px]"
                style={{ background: `linear-gradient(135deg, hsl(${30 + i * 5} 30% ${22 + (i % 3) * 8}%), hsl(${38 + i * 3} 28% 10%))` }}
              />
              <span className={`h-1.5 ${c.w} rounded-sm bg-white/35`} />
              <span className={`ml-auto flex h-3 w-5 items-center rounded-full px-[2px] ${c.on ? "justify-end bg-gold" : "bg-white/15"}`}>
                <span className="h-2 w-2 rounded-full bg-black" />
              </span>
            </div>
          ))}
        </div>
        <div className="m-2.5 mt-3 flex items-center justify-between rounded-md bg-gold px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-black">
          <span>3 added</span>
          <span>Review</span>
        </div>
      </Phone>

      {/* home: balance, recharge and quick actions */}
      <Phone className="z-10 w-[48%] min-w-[170px] shadow-[0_40px_120px_-30px_rgba(201,178,124,0.35)]">
        <div className="flex items-center justify-between px-3 pb-2 pt-3">
          <span className="h-2 w-14 rounded-sm bg-white/40" />
          <span className="rounded-full border border-white/20 px-1.5 py-0.5 text-[7px] font-bold text-white/60">EN | हि</span>
        </div>
        <div className="mx-2.5 rounded-xl bg-gradient-to-br from-[#3a2a12] via-[#7a5a2a] to-[#c9b27c] p-3">
          <div className="text-[7px] font-bold uppercase tracking-[0.16em] text-white/70">Balance</div>
          <div className="mt-1 h-3.5 w-16 rounded-sm bg-white/90" />
          <div className="mt-1.5 h-1.5 w-24 rounded-sm bg-white/45" />
          <div className="mt-3 rounded-md bg-black py-1.5 text-center text-[8px] font-bold uppercase tracking-[0.14em] text-gold">
            Recharge now
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 p-2.5">
          {actions.map((a, i) => (
            <div key={a} className={`rounded-lg border px-2 py-2.5 ${i === 0 ? "border-gold/60 bg-gold/10" : "border-white/10 bg-white/[0.03]"}`}>
              <span className={`block h-3 w-3 rounded-[4px] ${i === 0 ? "bg-gold" : "bg-white/25"}`} />
              <span className="mt-2 block text-[8px] font-bold uppercase tracking-[0.1em] text-white/75">{a}</span>
            </div>
          ))}
        </div>
      </Phone>
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

function RemastlyMockup() {
  // Illustrative audit numbers, not real results.
  const audits = [
    { label: "Performance", before: 38, after: 96 },
    { label: "Accessibility", before: 61, after: 100 },
    { label: "SEO", before: 54, after: 98 },
  ];
  const steps = ["Check", "Rebuild", "Compare", "Host"];
  return (
    <div className="w-full max-w-[520px] overflow-hidden rounded-xl border border-white/15 bg-[#0d0d0d] shadow-2xl">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-white/20" />
        ))}
        <span className="ml-3 flex h-5 flex-1 items-center gap-1.5 rounded-md bg-white/[0.05] px-2">
          <span className="h-2 w-2 rounded-full border border-gold" />
          <span className="h-1.5 w-28 rounded-sm bg-white/25" />
        </span>
        <span className="ml-2 rounded-full border border-gold-line bg-gold-soft px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-gold">
          Live · HTTPS
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
          <span>Site audit</span>
          <span>
            <span className="text-white/40">Before</span> <span aria-hidden>→</span>{" "}
            <span className="text-gold">After</span>
          </span>
        </div>
        <div className="mt-4 space-y-3.5">
          {audits.map((a) => (
            <div key={a.label}>
              <div className="flex items-center justify-between text-[10px] font-semibold text-foreground/80">
                <span>{a.label}</span>
                <span>
                  <span className="text-white/40 line-through decoration-white/30">{a.before}</span>
                  <span className="ml-2 font-bold text-gold">{a.after}</span>
                </span>
              </div>
              <div className="relative mt-1.5 h-2 rounded-full bg-white/10">
                <div className="absolute inset-y-0 left-0 rounded-full bg-gold" style={{ width: `${a.after}%` }} />
                <div className="absolute inset-y-0 left-0 rounded-full bg-white/35" style={{ width: `${a.before}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* visual diff strip */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          {["Original", "Rebuilt"].map((t, i) => (
            <div key={t} className={`rounded-md border p-2 ${i ? "border-gold-line" : "border-white/10"}`}>
              <div className={`text-[8px] font-bold uppercase tracking-[0.16em] ${i ? "text-gold" : "text-muted"}`}>{t}</div>
              <div className="mt-1.5 h-8 rounded-sm bg-gradient-to-br from-[#2b2116] to-[#8a6b3d]" />
              <div className="mt-1.5 flex gap-1">
                <span className="h-1.5 w-10 rounded-sm bg-white/25" />
                <span className="h-1.5 w-6 rounded-sm bg-white/15" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-4 gap-2 text-center text-[9px] font-bold uppercase tracking-[0.14em] text-muted">
          {steps.map((s, i) => (
            <span key={s} className={`rounded border px-1 py-2 ${i === 3 ? "border-gold-line text-gold" : "border-white/10"}`}>
              {s}
            </span>
          ))}
        </div>
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
    case "remastly":
      return <RemastlyMockup />;
  }
}
