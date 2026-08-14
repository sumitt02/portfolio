const navItems = ["Overview", "Pipeline", "Accounts", "Tasks", "Reports"];
const roles = ["Admin", "Manager", "Sales Rep"];
const cardLabels = ["Open Deals", "Active Accounts", "Pending Tasks", "Queue Jobs"];
const rows = 5;
const chartBars = [38, 62, 44, 78, 55, 70, 46, 60];

export function CRMPreview() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-border-strong bg-surface shadow-2xl shadow-black/20"
      role="img"
      aria-label="Abstract preview of a role-based CRM interface with sidebar navigation, data cards, a records table, and an activity panel"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 font-mono-tech text-[10px] text-muted-2">crm.internal/overview</span>
        <span className="ml-auto flex items-center gap-1.5 rounded-full border border-accent-line bg-accent-dim px-2 py-0.5 font-mono-tech text-[10px] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Live
        </span>
      </div>

      <div className="flex h-[340px] sm:h-[400px]">
        <aside className="hidden w-[150px] flex-col border-r border-border p-3 sm:flex">
          <div className="mb-4 flex items-center gap-2 px-1">
            <span className="h-5 w-5 rounded-md bg-accent-dim" />
            <span className="h-2 w-16 rounded bg-border-strong" />
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <div
                key={item}
                className={
                  "rounded-md px-2 py-1.5 font-mono-tech text-[10px] " +
                  (i === 0 ? "bg-accent-dim text-accent" : "text-muted-2")
                }
              >
                {item}
              </div>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-1 border-t border-border pt-3">
            <span className="px-1 font-mono-tech text-[9px] uppercase tracking-wide text-muted-2">
              Role
            </span>
            {roles.map((role, i) => (
              <div
                key={role}
                className={
                  "rounded-md px-2 py-1 font-mono-tech text-[10px] " +
                  (i === 0 ? "text-foreground" : "text-muted-2")
                }
              >
                {role}
              </div>
            ))}
          </div>
        </aside>

        <div className="flex-1 overflow-hidden p-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {cardLabels.map((label, i) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-surface-raised p-2.5"
              >
                <span className="block font-mono-tech text-[9px] text-muted-2">{label}</span>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-accent/70"
                    style={{ width: `${45 + i * 12}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[1.3fr_1fr]">
            <div className="rounded-lg border border-border bg-surface-raised p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono-tech text-[9px] text-muted-2">Accounts</span>
                <span className="font-mono-tech text-[9px] text-muted-2">RBAC filtered</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {Array.from({ length: rows }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
                    <span
                      className="h-1.5 rounded bg-border"
                      style={{ width: `${70 - i * 8}%` }}
                    />
                    <span className="ml-auto h-1.5 w-8 rounded bg-border" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface-raised p-3">
              <span className="font-mono-tech text-[9px] text-muted-2">Pipeline activity</span>
              <div className="mt-3 flex h-[110px] items-end gap-1.5">
                {chartBars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-accent/60"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
