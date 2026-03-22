import type { ReactNode } from "react";

type BrutalCardProps = {
  children: ReactNode;
  className?: string;
  patternClass?: string;
  as?: "div" | "article" | "section";
};

export function BrutalCard({
  children,
  className = "",
  patternClass = "",
  as: Tag = "div",
}: BrutalCardProps) {
  return (
    <Tag
      className={`border-[3px] border-black bg-white p-5 shadow-[6px_6px_0_0_#000] md:p-6 ${patternClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
