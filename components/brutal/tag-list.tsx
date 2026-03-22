type TagListProps = {
  tags: readonly string[];
  className?: string;
};

export function TagList({ tags, className = "" }: TagListProps) {
  return (
    <ul
      className={`flex flex-wrap gap-2 ${className}`}
      aria-label="Technologies"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <span className="inline-block border-2 border-black bg-[#fffef8] px-2 py-0.5 text-xs font-bold uppercase tracking-wide">
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
}
