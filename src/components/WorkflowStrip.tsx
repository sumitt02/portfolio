import { ArrowRight } from "lucide-react";

export function WorkflowStrip({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-md border border-border bg-surface px-2.5 py-1.5 font-mono-tech text-[11px] text-muted">
            {step}
          </span>
          {i < steps.length - 1 ? (
            <ArrowRight size={12} className="text-muted-2" aria-hidden />
          ) : null}
        </div>
      ))}
    </div>
  );
}
