import Image from "next/image";

import { BrutalButton } from "@/components/brutal/brutal-button";
import { Reveal } from "@/components/motion/reveal";
import type { PortfolioCardSize } from "@/lib/content";
import { portfolioItems, site } from "@/lib/content";

const cardSizeClasses: Record<
  PortfolioCardSize,
  { aspect: string; body: string; title: string }
> = {
  standard: {
    aspect: "aspect-[4/3]",
    body: "p-4 md:p-5",
    title: "text-lg md:text-xl",
  },
  wide: {
    aspect: "aspect-[2/1]",
    body: "p-4 md:p-5",
    title: "text-lg md:text-2xl",
  },
  tall: {
    aspect: "aspect-[3/4]",
    body: "p-4 md:p-5",
    title: "text-base md:text-lg",
  },
  square: {
    aspect: "aspect-square",
    body: "p-5 md:p-6",
    title: "text-lg md:text-xl",
  },
  cinema: {
    aspect: "aspect-[16/9]",
    body: "p-4 md:p-5",
    title: "text-lg md:text-xl",
  },
};

function cardClasses(size: PortfolioCardSize | undefined) {
  return cardSizeClasses[size ?? "standard"];
}

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="border-b-[3px] border-black bg-[#fffef8]"
      aria-labelledby="portfolio-heading"
    >
      <div className="section-padding-x mx-auto max-w-6xl min-w-0 py-20 md:py-28">
        <Reveal>
          <header>
            <h2
              id="portfolio-heading"
              className="inline-block max-w-full border-[3px] border-black bg-white px-4 py-2 font-[family-name:var(--font-display)] text-[clamp(2rem,10vw,3rem)] font-black uppercase leading-none tracking-tight text-black shadow-[8px_8px_0_0_#000] sm:px-5 sm:py-3 sm:text-4xl md:px-7 md:py-4 md:text-6xl lg:text-7xl"
            >
              Portfolio
            </h2>
          </header>
          <p className="mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-black/80 md:text-base">
            Selected sites and products — click through to the live work.
          </p>
        </Reveal>

        <ul
          className="mt-12 columns-1 [column-gap:2rem] sm:columns-2 lg:columns-3"
          role="list"
        >
          {portfolioItems.map((item, i) => {
            const s = cardClasses(item.size);
            const imgPos =
              item.imagePosition === "top" ? "object-top" : "object-center";
            return (
              <li
                key={item.id}
                className="mb-8 break-inside-avoid [page-break-inside:avoid]"
              >
                <Reveal delay={i * 0.05}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block min-w-0 touch-manipulation border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] transition-shadow hover:shadow-[10px_10px_0_0_#000] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <div
                      className={`relative w-full overflow-hidden border-b-[3px] border-black bg-[#e8e4dc] ${s.aspect}`}
                    >
                      <Image
                        src={item.image}
                        alt={`Preview: ${item.title}`}
                        fill
                        className={`object-cover ${imgPos} transition-transform duration-300 group-hover:scale-[1.03]`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className={`min-w-0 ${s.body}`}>
                      <span
                        className={`break-words font-[family-name:var(--font-display)] font-black uppercase leading-snug tracking-tight text-black underline decoration-2 underline-offset-4 group-hover:decoration-[var(--palette-pink)] ${s.title}`}
                      >
                        {item.title}
                      </span>
                      <span className="mt-2 block text-xs font-bold uppercase tracking-wider text-black/60">
                        Visit site →
                      </span>
                    </div>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 sm:mt-12">
          <BrutalButton
            className="w-full min-h-12 justify-center sm:w-auto"
            href={site.cvPath}
            download
            variant="outline"
          >
            Download full CV →
          </BrutalButton>
        </div>
      </div>
    </section>
  );
}
