"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// A single winding line connecting the process steps, drawn in as the
// section scrolls into view. Purely decorative — reinforces "one guided
// journey" without adding any extra reading burden.
export default function ConnectingPath({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={className}>
      <svg
        viewBox="0 0 1000 40"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path d="M20 20 C 250 20, 250 20, 500 20 S 750 20, 980 20" stroke="#e6e0d4" strokeWidth="2" />
        <motion.path
          d="M20 20 C 250 20, 250 20, 500 20 S 750 20, 980 20"
          stroke="#f5c518"
          strokeWidth="2"
          style={prefersReducedMotion ? undefined : { pathLength }}
        />
      </svg>
    </div>
  );
}
