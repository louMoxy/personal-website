"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useState } from "react";

import type { PortfolioCardSize } from "@/lib/content";

const springReveal = {
  type: "spring" as const,
  stiffness: 380,
  damping: 26,
  mass: 0.85,
};

const cardSizeClasses: Record<
  PortfolioCardSize,
  { aspect: string; body: string; title: string }
> = {
  standard: {
    aspect: "aspect-[4/3]",
    body: "p-4 md:p-5",
    title: "text-lg md:text-xl",
  },
  wide: {
    aspect: "aspect-[2/1]",
    body: "p-4 md:p-5",
    title: "text-lg md:text-2xl",
  },
  tall: {
    aspect: "aspect-[3/4]",
    body: "p-4 md:p-5",
    title: "text-base md:text-lg",
  },
  square: {
    aspect: "aspect-square",
    body: "p-5 md:p-6",
    title: "text-lg md:text-xl",
  },
  cinema: {
    aspect: "aspect-[16/9]",
    body: "p-4 md:p-5",
    title: "text-lg md:text-xl",
  },
};

function cardClasses(size: PortfolioCardSize | undefined) {
  return cardSizeClasses[size ?? "standard"];
}

type PortfolioTileProps = {
  href: string;
  title: string;
  image: string;
  imagePosition?: "top" | "center";
  size?: PortfolioCardSize;
  index: number;
};

export function PortfolioTile({
  href,
  title,
  image,
  imagePosition = "center",
  size,
  index,
}: PortfolioTileProps) {
  const reduce = useReducedMotion();
  const s = cardClasses(size);
  const imgPos = imagePosition === "top" ? "object-top" : "object-center";
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLAnchorElement>) => {
      if (reduce) return;
      if (
        typeof window !== "undefined" &&
        !window.matchMedia("(pointer: fine)").matches
      ) {
        return;
      }
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: -py * 7, y: px * 9 });
    },
    [reduce],
  );

  const onPointerLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const inner = (
    <>
      <div
        className={`relative w-full overflow-hidden border-b-[3px] border-black bg-[#e8e4dc] ${s.aspect}`}
      >
        <ImageReveal reduce={!!reduce} imgPos={imgPos} image={image} title={title} />
      </div>
      <div className={`min-w-0 ${s.body}`}>
        <span
          className={`break-words font-[family-name:var(--font-display)] font-black uppercase leading-snug tracking-tight text-black underline decoration-2 underline-offset-4 group-hover:decoration-[var(--palette-pink)] ${s.title}`}
        >
          {title}
        </span>
        <span className="mt-2 block text-xs font-bold uppercase tracking-wider text-black/60">
          Visit site →
        </span>
      </div>
    </>
  );

  if (reduce) {
    return (
      <div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block min-w-0 touch-manipulation border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] transition-shadow hover:shadow-[10px_10px_0_0_#000] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {inner}
        </a>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...springReveal, delay: index * 0.04 }}
    >
      <div className="[perspective:960px]">
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block min-w-0 touch-manipulation border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] [transform-style:preserve-3d] transition-shadow hover:shadow-[10px_10px_0_0_#000] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-black"
          animate={{ rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.55 }}
          style={{ transformStyle: "preserve-3d" }}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          {inner}
        </motion.a>
      </div>
    </motion.div>
  );
}

function ImageReveal({
  reduce,
  imgPos,
  image,
  title,
}: {
  reduce: boolean;
  imgPos: string;
  image: string;
  title: string;
}) {
  if (reduce) {
    return (
      <Image
        src={image}
        alt={`Preview: ${title}`}
        fill
        className={`object-cover ${imgPos} transition-transform duration-300 group-hover:scale-[1.03]`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    );
  }

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ clipPath: "inset(0 0 12% 12%)" }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Image
        src={image}
        alt={`Preview: ${title}`}
        fill
        className={`object-cover ${imgPos} transition-transform duration-300 group-hover:scale-[1.03]`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </motion.div>
  );
}
