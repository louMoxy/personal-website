"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";
import type { AboutSegment } from "@/lib/content";
import { about } from "@/lib/content";

const accentRotate = [
  "bg-[var(--palette-pink)]",
  "bg-[var(--palette-lavender)]",
  "bg-[var(--palette-mint)]",
] as const;

/** One glyph per row (cycles if list is longer). HTML: &#9733; &#8594; &#10022; &#10148; */
const LIST_BULLET_GLYPHS = [
  "\u2605", // ★ BLACK STAR
  "\u2192", // → RIGHTWARDS ARROW
  "\u2726", // ✦ BLACK FOUR POINTED STAR
  "\u27A4", // ➤ BLACK RIGHT-POINTING TRIANGLE
] as const;

function isMarked(seg: AboutSegment): seg is { text: string; mark: true } {
  return "mark" in seg && seg.mark === true;
}

function isList(seg: AboutSegment): seg is { list: readonly string[] } {
  return "list" in seg;
}

export function AboutParagraphs() {
  const reduce = useReducedMotion();
  const chipOrder = useMemo(() => {
    let n = 0;
    const map = new Map<string, number>();
    about.blocks.forEach((segments, pi) => {
      segments.forEach((seg, si) => {
        if (isMarked(seg)) {
          map.set(`${pi}-${si}`, n);
          n += 1;
        }
      });
    });
    return map;
  }, []);

  return (
    <div className="mt-10 max-w-3xl min-w-0 space-y-6 text-base leading-[1.75] md:text-lg">
      {about.blocks.map((segments, pi) => (
        <motion.div
          key={pi}
          className="text-pretty whitespace-pre-line"
          initial={reduce ? undefined : { opacity: 0, y: 28 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{
            duration: 0.5,
            delay: pi * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {segments.map((seg, si) => {
            if (isList(seg)) {
              return (
                <ul
                  key={si}
                  className="my-4 list-none space-y-3 py-1"
                  role="list"
                >
                  {seg.list.map((item, li) => {
                    const bullet = accentRotate[li % accentRotate.length];
                    const glyph =
                      LIST_BULLET_GLYPHS[li % LIST_BULLET_GLYPHS.length];
                    return (
                      <li
                        key={item}
                        className="flex gap-3 font-semibold leading-snug md:gap-4"
                      >
                        <span
                          className={`mt-0.5 flex h-8 min-w-8 shrink-0 items-center justify-center border-[2.5px] border-black text-base leading-none text-black shadow-[3px_3px_0_0_#000] md:h-9 md:min-w-9 md:text-lg ${bullet}`}
                          aria-hidden
                        >
                          <span className="font-sans">{glyph}</span>
                        </span>
                        <span className="min-w-0 flex-1 pt-1">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              );
            }
            if (!isMarked(seg)) {
              return <span key={si}>{seg.text}</span>;
            }
            const idx = chipOrder.get(`${pi}-${si}`) ?? 0;
            const accent = accentRotate[idx % accentRotate.length];
            return (
              <motion.span
                key={si}
                className={`mx-0.5 inline-block border-[2.5px] border-black px-2 py-0.5 text-[0.98em] font-extrabold tracking-tight shadow-[3px_3px_0_0_#000] ${accent}`}
                initial={reduce ? undefined : { opacity: 0, scale: 0.88, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 22,
                  delay: 0.04 + pi * 0.06,
                }}
                whileHover={reduce ? undefined : { y: -4, rotate: -1.5 }}
              >
                {seg.text}
              </motion.span>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
}
