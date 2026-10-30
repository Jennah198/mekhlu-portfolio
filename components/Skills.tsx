import Image from "next/image";
import { nowLearning, skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        id="skills-title"
        index="04"
        eyebrow="Skills"
        title={
          <>
            Across the <em className="text-accent-text">ML lifecycle</em>.
          </>
        }
        intro="Organized around the ML lifecycle: from wrangling data, to modelling, to shipping it, plus the software engineering that holds it together."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.06}>
            <div className="h-full rounded-3xl border border-border bg-card/60 p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-text">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center gap-2 rounded-full border border-border bg-background/70 py-1.5 pl-2 pr-3.5 text-sm text-foreground transition-[box-shadow,border-color] duration-300 hover:border-glow hover:shadow-[0_0_0_4px_var(--glow-soft),0_8px_24px_-6px_color-mix(in_srgb,var(--glow)_55%,transparent)]"
                  >
                    {s.icon ? (
                      <Image
                        src={`/icons/${s.icon}.svg`}
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                        className={`h-5 w-5 object-contain ${s.mono ? "dark:invert" : ""}`}
                      />
                    ) : (
                      <span aria-hidden="true" className="flex h-5 w-3 items-center justify-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-spark to-glow" />
                      </span>
                    )}
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 rounded-3xl border border-dashed border-glow bg-glow-soft/60 p-6 sm:p-8">
        <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-glow-text">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inset-0 animate-ping rounded-full bg-glow opacity-70" />
            <span className="relative h-2 w-2 rounded-full bg-glow" />
          </span>
          Currently learning
        </h3>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {nowLearning.map((n) => (
            <li key={n.title}>
              <p className="font-serif text-xl text-foreground">{n.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{n.detail}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
