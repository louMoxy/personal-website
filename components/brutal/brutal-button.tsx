"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const base =
  "inline-flex min-h-11 touch-manipulation items-center justify-center gap-2 border-[3px] border-black px-4 py-2.5 text-sm font-black uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-black sm:min-h-0 sm:py-2";

type Variant = "solid" | "invert" | "outline";

function paletteClass(variant: Variant) {
  if (variant === "invert") return "bg-black text-white hover:bg-[#1a1a1a]";
  if (variant === "outline") return "bg-white text-black hover:bg-[#fffef8]";
  return "bg-[var(--palette-pink)] text-black hover:bg-[var(--palette-pink-deep)]";
}

type BrutalButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function BrutalButton({
  children,
  className = "",
  variant = "solid",
  href,
  download,
  target,
  rel,
  type = "button",
  disabled,
}: BrutalButtonProps) {
  const reduce = useReducedMotion();
  const palette = paletteClass(variant);
  const staticShadow = reduce || disabled ? "shadow-[6px_6px_0_0_#000]" : "";
  const combined = [base, palette, staticShadow, className].filter(Boolean).join(" ");

  /** Pushed-in effect: move toward the shadow while the hard shadow shrinks. */
  const motionProps =
    reduce || disabled
      ? {}
      : {
          initial: { x: 0, y: 0, boxShadow: "6px 6px 0 0 #000" },
          whileHover: { x: 4, y: 4, boxShadow: "2px 2px 0 0 #000" },
          whileTap: { x: 6, y: 6, boxShadow: "0px 0px 0 0 #000" },
          transition: { type: "spring" as const, stiffness: 500, damping: 32 },
        };

  if (href) {
    return (
      <motion.a
        className={combined}
        href={href}
        download={download}
        target={target}
        rel={rel}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combined}
      type={type}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
