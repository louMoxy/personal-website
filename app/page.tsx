import { CustomCursor } from "@/components/motion/custom-cursor";
import { Marquee } from "@/components/motion/marquee";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SiteHeader } from "@/components/sections/site-header";
import { SkillsSection } from "@/components/sections/skills-section";
import { site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <SiteHeader />
      <Marquee text="React · TypeScript · Data viz · Design systems · London · Open to contracts" />
      <main
        id="main"
        data-cursor="default"
        className="min-w-0 flex-1 overflow-x-hidden pb-[env(safe-area-inset-bottom,0px)]"
      >
        <HeroSection />
        <AboutSection />
        <FeaturedWorkSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <footer
        data-cursor="footer"
        className="section-padding-x border-t-[3px] border-black bg-black py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-white sm:py-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm md:flex-row md:items-center">
          <p className="font-bold uppercase tracking-wide">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </footer>
    </>
  );
}
