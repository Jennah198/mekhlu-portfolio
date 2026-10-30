import type { Visual } from "@/lib/data";

/** Small deterministic PRNG so every render (server and client) draws the same chart. */
function random(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

const W = 480;
const H = 320;
const PAD = 36;

// Random walk, computed once at module load so rendering stays pure.
const linePoints = (() => {
  const rnd = random(7);
  let y = 210;
  return Array.from({ length: 24 }, (_, i) => {
    y = Math.min(250, Math.max(70, y + (rnd() - 0.56) * 34));
    return [PAD + (i * (W - 2 * PAD)) / 23, y] as const;
  });
})();

function Line() {
  const pts = linePoints;
  const d = pts.map(([x, py], i) => `${i ? "L" : "M"}${x.toFixed(1)},${py.toFixed(1)}`).join(" ");
  const area = `${d} L${W - PAD},${H - PAD} L${PAD},${H - PAD} Z`;
  const [lx, ly] = pts[pts.length - 1];
  return (
    <>
      <path d={area} fill="url(#pv-fill)" />
      <path d={d} fill="none" stroke="var(--primary-500)" strokeWidth="2.5" strokeLinejoin="round" />
      <path
        d={`M${lx},${ly} l40,-28`}
        stroke="var(--glow)"
        strokeWidth="2.5"
        strokeDasharray="5 5"
        fill="none"
      />
      <circle cx={lx} cy={ly} r="5" fill="var(--glow)" />
    </>
  );
}

function Bars() {
  const rnd = random(11);
  const n = 10;
  const bw = (W - 2 * PAD) / n;
  return (
    <>
      {Array.from({ length: n }, (_, i) => {
        const h = 40 + rnd() * 180;
        const highlight = i === 6;
        return (
          <rect
            key={i}
            x={PAD + i * bw + 6}
            y={H - PAD - h}
            width={bw - 12}
            height={h}
            rx="4"
            fill={highlight ? "var(--glow)" : "var(--primary-500)"}
            opacity={highlight ? 1 : 0.35 + (i / n) * 0.55}
          />
        );
      })}
    </>
  );
}

function Scatter() {
  const rnd = random(23);
  return (
    <>
      {Array.from({ length: 70 }, (_, i) => {
        const outlier = i % 13 === 0;
        const cx = outlier ? PAD + rnd() * (W - 2 * PAD) : 150 + (rnd() - 0.5) * 200;
        const cy = outlier ? PAD + rnd() * 90 : 200 + (rnd() - 0.5) * 120;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={outlier ? 6 : 4}
            fill={outlier ? "var(--glow)" : "var(--primary-500)"}
            opacity={outlier ? 1 : 0.55}
          />
        );
      })}
    </>
  );
}

function Network() {
  const rnd = random(5);
  const nodes = Array.from({ length: 16 }, () => [PAD + rnd() * (W - 2 * PAD), PAD + rnd() * (H - 2 * PAD)] as const);
  const hub = [W / 2, H / 2] as const;
  return (
    <>
      {nodes.map(([x, y], i) => (
        <line key={`l${i}`} x1={hub[0]} y1={hub[1]} x2={x} y2={y} stroke="var(--primary-400)" strokeWidth="1" opacity="0.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={`n${i}`} cx={x} cy={y} r={i % 5 === 0 ? 7 : 4.5} fill={i % 5 === 0 ? "var(--glow)" : "var(--primary-500)"} />
      ))}
      <circle cx={hub[0]} cy={hub[1]} r="16" fill="var(--primary-500)" />
      <circle cx={hub[0]} cy={hub[1]} r="26" fill="none" stroke="var(--glow)" strokeWidth="2" />
    </>
  );
}

function MapGrid() {
  const rnd = random(31);
  const cols = 12;
  const rows = 8;
  const cw = (W - 2 * PAD) / cols;
  const ch = (H - 2 * PAD) / rows;
  return (
    <>
      {Array.from({ length: cols * rows }, (_, i) => {
        const v = rnd();
        return (
          <rect
            key={i}
            x={PAD + (i % cols) * cw + 2}
            y={PAD + Math.floor(i / cols) * ch + 2}
            width={cw - 4}
            height={ch - 4}
            rx="3"
            fill={v > 0.9 ? "var(--glow)" : "var(--primary-500)"}
            opacity={v > 0.9 ? 1 : 0.1 + v * 0.6}
          />
        );
      })}
    </>
  );
}

const charts: Record<Visual, () => React.JSX.Element> = {
  line: Line,
  bars: Bars,
  scatter: Scatter,
  network: Network,
  map: MapGrid,
};

/** Themed chart that stands in for a project screenshot. */
export function ProjectVisual({ visual, label, className = "" }: { visual: Visual; label: string; className?: string }) {
  const Chart = charts[visual];
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-card shadow-lg ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-border" />
        ))}
        <span className="ml-2 truncate font-mono text-[11px] text-muted-foreground">{label}.ipynb</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Illustrative chart for ${label}`} className="block h-auto w-full">
        <defs>
          <linearGradient id="pv-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--primary-500)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--primary-500)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={PAD} x2={W - PAD} y1={PAD + f * (H - 2 * PAD)} y2={PAD + f * (H - 2 * PAD)} stroke="var(--border)" strokeDasharray="3 5" />
        ))}
        <line x1={PAD} x2={W - PAD} y1={H - PAD} y2={H - PAD} stroke="var(--border)" />
        <Chart />
      </svg>
    </div>
  );
}
