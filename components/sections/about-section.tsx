import { AboutHeading } from "@/components/sections/about-heading";
import { AboutParagraphs } from "@/components/sections/about-paragraphs";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b-[3px] border-black bg-[#fffef8]"
      aria-labelledby="about-heading"
    >
      <div className="section-padding-x mx-auto max-w-6xl min-w-0 py-20 md:py-20">
        <AboutHeading />
        <AboutParagraphs />
      </div>
    </section>
  );
}
