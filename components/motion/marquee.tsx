"use client";

type MarqueeProps = {
  text: string;
  className?: string;
};

export function Marquee({ text, className = "" }: MarqueeProps) {
  const repeated = `${text}  ·  `.repeat(2);

  return (
    <div
      data-cursor="marquee"
      className={`section-padding-x overflow-hidden border-y-[3px] border-black bg-[var(--palette-lavender)] py-3 sm:py-2 ${className}`}
      aria-hidden
    >
      <div className="marquee-track flex w-max whitespace-nowrap font-[family-name:var(--font-display)] text-[11px] font-black uppercase tracking-widest sm:text-sm">
        <span>{repeated}</span>
        <span>{repeated}</span>
      </div>
    </div>
  );
}
