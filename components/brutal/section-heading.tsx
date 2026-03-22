type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <header className={`space-y-1 ${className}`} id={id}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>
    </header>
  );
}
