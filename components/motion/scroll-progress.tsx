"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/** Fixed top bar — scroll-linked, respects reduced motion (no animation). */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    restDelta: 0.001,
  });

  if (reduce) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-[var(--palette-pink)]"
      style={{ scaleX }}
    />
  );
}
