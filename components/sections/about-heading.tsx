"use client";

import { motion, useReducedMotion } from "motion/react";

const words = ["Where", "design", "meets", "engineering"];

export function AboutHeading() {
  const reduce = useReducedMotion();

  return (
    <header className="space-y-1" id="about-heading">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/70">
        About
      </p>
      <motion.h2
        className="font-[family-name:var(--font-display)] text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl"
        initial={reduce ? undefined : { opacity: 0 }}
        whileInView={reduce ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <span className="sr-only">Where design meets engineering</span>
        <span aria-hidden className="flex flex-wrap gap-x-2 gap-y-1 md:gap-x-3">
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block"
              initial={reduce ? undefined : { opacity: 0, y: 16, rotate: -3 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.06,
                type: "spring",
                stiffness: 380,
                damping: 22,
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      </motion.h2>
    </header>
  );
}
