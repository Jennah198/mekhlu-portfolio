import { about, focusAreas, stats } from "@/lib/data";
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
            Models are only useful once they&apos;re <em className="text-accent-text">shipped</em>.
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

      <div className="mt-16">
        <Reveal>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">What I build</h3>
        </Reveal>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 0.05}>
              <div className="gradient-border flex h-full flex-col rounded-3xl border border-border bg-card/60 p-6">
                <span className="font-mono text-xs text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="mt-3 font-serif text-2xl leading-tight text-foreground">{f.title}</h4>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{f.body}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {f.tags.map((t) => (
                    <li key={t} className="rounded-full border border-glow/50 bg-glow-soft px-2.5 py-0.5 text-xs text-glow-text">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
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
