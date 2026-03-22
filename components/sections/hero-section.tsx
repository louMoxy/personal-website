import { BrutalButton } from "@/components/brutal/brutal-button";
import { Reveal } from "@/components/motion/reveal";
import { hero, site } from "@/lib/content";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-[3px] border-black hero-bg-wave-svg"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-10 border-l-[3px] border-black bg-[var(--palette-pink)] md:flex md:items-center md:justify-center">
        <span
          className="font-[family-name:var(--font-display)] text-xs font-black uppercase tracking-[0.3em] text-black"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Open to work
        </span>
      </div>
      <div className="section-padding-x mx-auto max-w-6xl py-16 sm:py-20 md:py-24 md:pr-20">
        <Reveal>
          <div className="min-w-0 border-[3px] border-black bg-white p-4 shadow-[6px_6px_0_0_#000] sm:p-6 md:p-7">
            <p className="mb-2 text-[11px] font-black uppercase tracking-widest text-black/75 sm:text-xs">
              Frontend engineer · London
            </p>
            <h1
              id="hero-heading"
              className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,8vw,2.5rem)] font-black uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {site.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-snug sm:mt-6 sm:text-lg md:text-xl">
              {hero.headline}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-black/85 sm:mt-4 sm:text-base">
              {hero.subline}
            </p>
          </div>
          <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <BrutalButton
              className="w-full min-h-12 justify-center sm:w-auto sm:min-w-[10rem]"
              href="#work"
              variant="invert"
            >
              See my work
            </BrutalButton>
            <BrutalButton
              className="w-full min-h-12 justify-center sm:w-auto sm:min-w-[10rem]"
              href={site.cvPath}
              download
            >
              Download CV
            </BrutalButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
