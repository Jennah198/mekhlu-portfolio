import { ChevronRight } from "lucide-react";
import { isTodo } from "@/lib/data";
import { TodoNote, showTodos } from "@/components/TodoNote";

/** Pipeline stages as a numbered flow, wrapping on narrow screens. */
export function MLPipeline({ stages }: { stages: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-y-3" aria-label="Pipeline">
      {stages.map((stage, i) => (
        <li key={stage} className="flex items-center">
          <span className="flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm text-foreground shadow-[0_6px_20px_-14px_color-mix(in_srgb,var(--primary-900)_40%,transparent)]">
            <span className="font-mono text-[11px] text-accent-text">{String(i + 1).padStart(2, "0")}</span>
            {stage}
          </span>
          {i < stages.length - 1 && <ChevronRight className="mx-1.5 h-4 w-4 shrink-0 text-glow" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}

/** Headline results. Unconfirmed (TODO) values show as notes in dev and are dropped in production. */
export function Metrics({ metrics, className = "" }: { metrics: { label: string; value: string }[]; className?: string }) {
  const visible = metrics.filter((m) => showTodos || !isTodo(m.value));
  if (visible.length === 0) return null;
  return (
    <dl className={`flex flex-wrap gap-2 ${className}`}>
      {visible.map((m) => (
        <div key={m.label} className="rounded-xl border border-glow/50 bg-glow-soft px-3 py-2">
          <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-glow-text">{m.label}</dt>
          <dd className="mt-0.5 text-sm font-medium text-foreground">
            {isTodo(m.value) ? <TodoNote text={m.value} /> : m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
