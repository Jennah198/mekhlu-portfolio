import { about, stats } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-accent-text">00</span> — About
          </p>
          <h2 id="about-title" className="mt-4 font-serif text-h2 tracking-tight">
            Curious about the <em className="text-accent-text">why</em> behind the numbers.
          </h2>
        </Reveal>
        <div className="space-y-5 text-lead text-muted-foreground lg:col-span-8">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05} className="bg-card/80 p-6 sm:p-7">
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{s.label}</dt>
            <dd className="mt-2 font-serif text-5xl leading-none text-foreground">
              <span className="text-gradient">{s.value}</span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
