"use client";

import { SectionHeading } from "@/components/brutal/section-heading";
import { TagList } from "@/components/brutal/tag-list";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/lib/content";

function ProjectCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`flex h-full min-h-0 flex-col items-center justify-center border-[3px] border-black p-4 shadow-[6px_6px_0_0_#000] sm:p-5 md:p-7 lg:border-0 lg:shadow-none lg:p-8 ${className}`}
    >
      {/* White plate centered in the cell; extra outer padding shows more pattern */}
      <div className="flex w-full min-w-0 max-w-full flex-col self-center border-[2.5px] border-black bg-white p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.12)] sm:p-6 md:p-8 lg:px-10 lg:py-10">
        {children}
      </div>
    </article>
  );
}

export function FeaturedWorkSection() {
  const [a, b, c, d] = projects;

  return (
    <section
      id="work"
      className="border-b-[3px] border-black bg-[#fffef8]"
      aria-labelledby="work-heading"
    >
      <div className="section-padding-x mx-auto max-w-6xl min-w-0 py-20 md:py-28 lg:py-32">
        <Reveal>
          <SectionHeading
            id="work-heading"
            eyebrow="Featured"
            title="Previous Experience"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-0 lg:border-[3px] lg:border-black lg:bg-white">
          <div className="flex min-h-0 lg:col-span-5 lg:h-full lg:border-r-[3px] lg:border-black">
            <Reveal className="h-full min-h-0 w-full">
              <ProjectCard className="pattern-squiggle">
                <p className="text-xs font-black uppercase tracking-widest text-black/70">
                  {a.kindLabel}
                </p>
                <h3 className="mt-3 break-words font-[family-name:var(--font-display)] text-xl font-black uppercase sm:text-2xl md:text-3xl">
                  {a.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed md:text-base">
                  {a.summary}
                </p>
                <TagList tags={a.tags} className="mt-8" />
              </ProjectCard>
            </Reveal>
          </div>
          <div className="flex min-h-0 lg:col-span-7 lg:h-full">
            <Reveal className="h-full min-h-0 w-full" delay={0.05}>
              <ProjectCard className="pattern-dots pattern-dots-pink pattern-drift">
                <p className="text-xs font-black uppercase tracking-widest text-black/80">
                  {b.kindLabel}
                </p>
                <h3 className="mt-3 break-words font-[family-name:var(--font-display)] text-xl font-black uppercase sm:text-2xl md:text-3xl">
                  {b.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed md:text-base">
                  {b.summary}
                </p>
                {b.stats ? (
                  <dl className="mt-8 grid gap-4 border-t-2 border-black pt-6">
                    {b.stats.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <dt className="text-xs font-bold uppercase tracking-wide text-black/70">
                          {s.label}
                        </dt>
                        <dd className="text-right text-sm font-black">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                <TagList tags={b.tags} className="mt-6" />
              </ProjectCard>
            </Reveal>
          </div>

          <div className="flex min-h-0 lg:col-span-6 lg:h-full lg:border-t-[3px] lg:border-r-[3px] lg:border-black">
            <Reveal className="h-full min-h-0 w-full" delay={0.08}>
              <ProjectCard className="bg-[var(--palette-lavender)]">
                <p className="text-xs font-black uppercase tracking-widest text-black/80">
                  {c.kindLabel}
                </p>
                <h3 className="mt-3 break-words font-[family-name:var(--font-display)] text-xl font-black uppercase sm:text-2xl md:text-3xl">
                  {c.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed md:text-base">
                  {c.summary}
                </p>
                <TagList tags={c.tags} className="mt-8" />
              </ProjectCard>
            </Reveal>
          </div>
          <div className="flex min-h-0 lg:col-span-6 lg:h-full lg:border-t-[3px] lg:border-black">
            <Reveal className="h-full min-h-0 w-full" delay={0.1}>
              <ProjectCard className="pattern-waves">
                <p className="text-xs font-black uppercase tracking-widest text-black/80">
                  {d.kindLabel}
                </p>
                <h3 className="mt-3 break-words font-[family-name:var(--font-display)] text-xl font-black uppercase sm:text-2xl md:text-3xl">
                  {d.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed md:text-base">
                  {d.summary}
                </p>
                <TagList tags={d.tags} className="mt-8" />
              </ProjectCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
