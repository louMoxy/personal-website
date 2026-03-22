import { BrutalButton } from "@/components/brutal/brutal-button";
import { PortfolioTile } from "@/components/motion/portfolio-tile";
import { Reveal } from "@/components/motion/reveal";
import { portfolioItems, site } from "@/lib/content";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      data-cursor="portfolio"
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
          {portfolioItems.map((item, i) => (
            <li
              key={item.id}
              className="mb-8 break-inside-avoid [page-break-inside:avoid]"
            >
              <PortfolioTile
                href={item.href}
                title={item.title}
                image={item.image}
                imagePosition={item.imagePosition}
                size={item.size}
                index={i}
              />
            </li>
          ))}
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
