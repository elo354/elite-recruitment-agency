"use client";

import { motion, useReducedMotion } from "framer-motion";

// Content is always opacity:1 — visibility never depends on an animation
// trigger firing. The only thing animated is a small settle-into-place
// rise, so if a browser ever fails to fire the scroll trigger, the worst
// case is text sitting 14px off from its final spot, never a blank page.
export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ y: prefersReducedMotion ? 0 : 14 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
