"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Scroll-linked parallax layer. Speed is relative: <1 moves slower than the
// page (background depth), >1 moves faster (foreground pop). Everything
// routes through framer-motion's scroll hooks rather than a hand-rolled
// scroll listener — that's exactly the kind of DIY scroll math that made
// the old site's "smooth scrolling" so hard to get right. Disabled
// entirely under prefers-reduced-motion.
export default function Parallax({
  children,
  speed = 0.3,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = 220 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
