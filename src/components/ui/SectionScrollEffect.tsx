"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a home-page section with a subtle scroll-driven transform:
 * - As the section enters from bottom, it scales up (0.92 → 1) and fades in
 * - As it leaves toward the top, it compresses slightly (1 → 0.96) and fades
 *
 * This creates the illusion that each section is a card being revealed
 * from beneath the previous one, like a stack of paper being riffled.
 */
export default function SectionScrollEffect({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // === Entry phase (bottom edge enters viewport) ===
  const entryProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const entryScale = useTransform(entryProgress, [0, 1], [0.92, 1]);
  const entryOpacity = useTransform(entryProgress, [0, 1], [0.4, 1]);

  // === Exit phase (top edge leaves viewport) ===
  const exitProgress = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const exitScale = useTransform(exitProgress, [0, 1], [1, 0.96]);
  const exitOpacity = useTransform(exitProgress, [0, 1], [1, 0.3]);

  // Blend: before 0.2 use entry, after 0.8 use exit, in between = normal
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.92, 1, 1, 0.96]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 1, 1, 0.3]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}