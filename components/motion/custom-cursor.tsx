"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";

function useFinePointer() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(pointer: fine)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(pointer: fine)").matches,
    () => false,
  );
}

const CURSOR_KEYS = [
  "default",
  "header",
  "marquee",
  "hero",
  "about",
  "work",
  "skills",
  "portfolio",
  "contact",
  "footer",
] as const;

export type CursorKey = (typeof CURSOR_KEYS)[number];

function parseCursorKey(value: string | null | undefined): CursorKey {
  if (!value) return "default";
  return (CURSOR_KEYS as readonly string[]).includes(value)
    ? (value as CursorKey)
    : "default";
}

/** Center of lead circle vs pointer (px). Hit-test uses this point. */
const CIRCLE_CENTER_OFFSET_X = 24;
const CIRCLE_CENTER_OFFSET_Y = 24;

const HALF_LEAD = 26;
const HALF_TRAIL = 7;

const MAIN_SPRING = { stiffness: 420, damping: 34, mass: 0.45 };
const TRAIL_SPRING = { stiffness: 90, damping: 16, mass: 0.35 };

type VariantStyle = {
  lead: string;
  trail: string;
  icon: string;
  iconChar: string;
};

const VARIANT_STYLE: Record<CursorKey, VariantStyle> = {
  default: {
    lead: "border-[3px] border-black bg-white shadow-[5px_5px_0_0_#000]",
    trail: "border-2 border-black bg-white/90",
    icon: "text-black",
    iconChar: "●",
  },
  header: {
    lead: "border-[3px] border-black bg-[#fffef8] shadow-[5px_5px_0_0_#000]",
    trail: "border-2 border-black bg-[#fffef8]/95",
    icon: "text-black",
    iconChar: "◇",
  },
  marquee: {
    lead: "border-[3px] border-black bg-[var(--palette-lavender)] shadow-[5px_5px_0_0_#000]",
    trail: "border-2 border-black bg-[var(--palette-lavender)]/90",
    icon: "text-black",
    iconChar: "✦",
  },
  hero: {
    lead: "border-[3px] border-black bg-[var(--palette-mint)] shadow-[5px_5px_0_0_#000]",
    trail: "border-2 border-black bg-[var(--palette-mint)]/90",
    icon: "text-black",
    iconChar: "★",
  },
  about: {
    lead: "border-[3px] border-black bg-[var(--palette-pink)] shadow-[5px_5px_0_0_#000]",
    trail: "border-2 border-black bg-[var(--palette-pink)]/90",
    icon: "text-black",
    iconChar: "✎",
  },
  work: {
    lead: "border-[3px] border-black bg-white shadow-[5px_5px_0_0_#000]",
    trail: "border-2 border-black bg-white/90",
    icon: "text-black",
    iconChar: "▦",
  },
  skills: {
    lead: "border-[3px] border-black bg-[var(--palette-mint)] shadow-[5px_5px_0_0_#000]",
    trail: "border-2 border-black bg-[var(--palette-mint)]/90",
    icon: "text-black",
    iconChar: "⚡",
  },
  portfolio: {
    lead: "border-[3px] border-black bg-white shadow-[5px_5px_0_0_#000]",
    trail: "border-2 border-black bg-white/90",
    icon: "text-black",
    iconChar: "◉",
  },
  contact: {
    lead: "border-[3px] border-black bg-[var(--palette-lavender)] shadow-[5px_5px_0_0_#000]",
    trail: "border-2 border-black bg-[var(--palette-lavender)]/90",
    icon: "text-black",
    iconChar: "✉",
  },
  footer: {
    lead: "border-[3px] border-white bg-black shadow-[5px_5px_0_0_#fff]",
    trail: "border-2 border-white/70 bg-black/90",
    icon: "text-white",
    iconChar: "♥",
  },
};

const TRAIL_OPACITIES = [0.88, 0.72, 0.55, 0.4] as const;

export function CustomCursor() {
  const reduce = useReducedMotion();
  const finePointer = useFinePointer();
  const enabled = finePointer && reduce !== true;
  const [variant, setVariant] = useState<CursorKey>("default");
  const [visible, setVisible] = useState(false);

  const targetX = useMotionValue(-200);
  const targetY = useMotionValue(-200);

  const leadX = useSpring(targetX, MAIN_SPRING);
  const leadY = useSpring(targetY, MAIN_SPRING);

  const t1x = useSpring(leadX, TRAIL_SPRING);
  const t1y = useSpring(leadY, TRAIL_SPRING);
  const t2x = useSpring(t1x, TRAIL_SPRING);
  const t2y = useSpring(t1y, TRAIL_SPRING);
  const t3x = useSpring(t2x, TRAIL_SPRING);
  const t3y = useSpring(t2y, TRAIL_SPRING);
  const t4x = useSpring(t3x, TRAIL_SPRING);
  const t4y = useSpring(t3y, TRAIL_SPRING);

  const leadLeft = useTransform(leadX, (v) => v - HALF_LEAD);
  const leadTop = useTransform(leadY, (v) => v - HALF_LEAD);

  const t1Left = useTransform(t1x, (v) => v - HALF_TRAIL);
  const t1Top = useTransform(t1y, (v) => v - HALF_TRAIL);
  const t2Left = useTransform(t2x, (v) => v - HALF_TRAIL);
  const t2Top = useTransform(t2y, (v) => v - HALF_TRAIL);
  const t3Left = useTransform(t3x, (v) => v - HALF_TRAIL);
  const t3Top = useTransform(t3y, (v) => v - HALF_TRAIL);
  const t4Left = useTransform(t4x, (v) => v - HALF_TRAIL);
  const t4Top = useTransform(t4y, (v) => v - HALF_TRAIL);

  const style = VARIANT_STYLE[variant];

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor-active");
    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const cx = e.clientX + CIRCLE_CENTER_OFFSET_X;
      const cy = e.clientY + CIRCLE_CENTER_OFFSET_Y;
      targetX.set(cx);
      targetY.set(cy);
      setVisible(true);

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.elementFromPoint(cx, cy);
        const region = el?.closest("[data-cursor]");
        setVariant(parseCursorKey(region?.getAttribute("data-cursor")));
      });
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled, targetX, targetY]);

  if (!enabled) {
    return null;
  }

  const trailPairs = [
    { left: t4Left, top: t4Top, i: 3 },
    { left: t3Left, top: t3Top, i: 2 },
    { left: t2Left, top: t2Top, i: 1 },
    { left: t1Left, top: t1Top, i: 0 },
  ];

  return (
    <div aria-hidden className="pointer-events-none">
      {trailPairs.map(({ left, top, i }) => (
        <motion.div
          key={`trail-${i}`}
          className={`fixed left-0 top-0 z-[9995] h-[14px] w-[14px] rounded-full ${style.trail}`}
          style={{
            x: left,
            y: top,
            opacity: visible ? TRAIL_OPACITIES[i] : 0,
            scale: visible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      ))}
      <motion.div
        className={`fixed left-0 top-0 z-[9999] flex h-[52px] w-[52px] items-center justify-center rounded-full ${style.lead}`}
        style={{
          x: leadLeft,
          y: leadTop,
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <span
          className={`font-[family-name:var(--font-display)] text-lg font-black leading-none ${style.icon}`}
        >
          {style.iconChar}
        </span>
      </motion.div>
    </div>
  );
}
