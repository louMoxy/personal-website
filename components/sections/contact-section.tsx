import { SectionHeading } from "@/components/brutal/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { contact } from "@/lib/content";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[var(--palette-lavender)]"
      aria-labelledby="contact-heading"
    >
      <div className="section-padding-x mx-auto max-w-6xl min-w-0 py-20 md:py-20">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let's talk"
          />
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed sm:mt-8 md:text-lg">
            {contact.availability}
          </p>
          <ul className="mt-8 flex flex-col gap-2 text-base font-bold sm:mt-10 sm:gap-3 md:text-lg">
            {contact.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex min-h-11 w-full max-w-full flex-wrap items-baseline gap-x-2 gap-y-1 border-b-2 border-black py-2 transition-colors hover:bg-black hover:text-white sm:min-h-0 sm:w-auto sm:py-0.5"
                >
                  <span className="shrink-0 font-[family-name:var(--font-display)] uppercase tracking-wide">
                    {link.label}
                  </span>
                  {"handle" in link && link.handle ? (
                    <span className="min-w-0 break-words text-sm font-semibold text-black/80 group-hover:text-white">
                      {link.handle}
                    </span>
                  ) : (
                    <span className="min-w-0 break-all text-sm font-normal group-hover:text-white">
                      {link.href.replace(/^mailto:/, "")}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
