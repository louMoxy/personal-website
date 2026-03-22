import Link from "next/link";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-[#fffef8]/95 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
      <div className="section-padding-x mx-auto flex max-w-6xl flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <Link
          href="#top"
          className="min-h-11 shrink-0 self-center font-[family-name:var(--font-display)] text-base font-black uppercase tracking-tight sm:self-auto sm:text-lg"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="min-w-0">
          <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 sm:justify-end sm:gap-x-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block min-h-11 min-w-[2.75rem] border-2 border-transparent px-2.5 py-2.5 text-center text-[11px] font-bold uppercase leading-tight tracking-wide hover:border-black sm:min-h-0 sm:min-w-0 sm:px-3 sm:py-2 sm:text-xs md:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
