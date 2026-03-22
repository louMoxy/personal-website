"use client";

import { Reveal } from "@/components/motion/reveal";
import { skillGroups } from "@/lib/content";
import { motion, useReducedMotion } from "motion/react";

const topStripe = [
  "border-t-[8px] border-solid border-t-[var(--palette-pink)]",
  "border-t-[8px] border-solid border-t-[var(--palette-lavender)]",
  "border-t-[8px] border-solid border-t-black",
] as const;

const chipAccent = [
  "hover:bg-[var(--palette-pink)]",
  "hover:bg-[var(--palette-lavender)]",
  "hover:bg-[var(--palette-mint)]",
] as const;

export function SkillsSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="skills"
      className="border-b-[3px] border-black bg-[var(--palette-mint)] pattern-dots pattern-drift"
      aria-labelledby="skills-heading"
    >
      <div className="section-padding-x mx-auto max-w-6xl min-w-0 py-20 md:py-28">
        <Reveal>
          <header>
            <h2
              id="skills-heading"
              className="inline-block max-w-full px-3 py-2 font-[family-name:var(--font-display)] text-[clamp(2rem,11vw,3.25rem)] font-black uppercase leading-none tracking-tight text-black sm:px-5 sm:py-3 sm:text-5xl md:px-7 md:py-4 md:text-7xl lg:text-8xl"
            >
              Skills
            </h2>
          </header>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {skillGroups.map((group, i) => {
            const stripe = topStripe[i % topStripe.length];
            const isWideRow = i >= 3;
            return (
              <motion.article
                key={group.title}
                className={`flex min-w-0 flex-col border-[3px] border-black bg-white p-4 shadow-[8px_8px_0_0_#000] sm:p-5 md:p-6 ${
                  isWideRow ? "lg:col-span-6" : "lg:col-span-4"
                } ${stripe}`}
                initial={reduce ? undefined : { opacity: 0, y: 28 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -6,
                        boxShadow: "12px 12px 0 0 #000",
                        transition: { duration: 0.2 },
                      }
                }
              >
                <div className="flex items-start justify-between gap-3 border-b-2 border-black/10 pb-3">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-black uppercase leading-tight tracking-tight md:text-xl">
                    {group.title}
                  </h3>
                  <span
                    className="shrink-0 font-[family-name:var(--font-display)] text-3xl font-black leading-none text-black/[0.12] md:text-4xl"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-4 flex list-none flex-wrap gap-2" role="list">
                  {group.items.map((item, j) => (
                    <li key={item}>
                      <span
                        className={`inline-block border-2 border-black bg-[#fffef8] px-2.5 py-1.5 text-xs font-bold uppercase tracking-wide text-black shadow-[2px_2px_0_0_#000] transition-colors md:text-sm ${chipAccent[(i + j) % chipAccent.length]}`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
