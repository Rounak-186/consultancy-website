"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface NumberCounterProps {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function NumberCounter({
  to,
  from = 1,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(from);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const springVal = useSpring(motionVal, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionVal.set(to);
    }
  }, [isInView, motionVal, to]);

  useEffect(() => {
    return springVal.on("change", (latest) => {
      if (ref.current) {
        const formatted =
          decimals > 0
            ? latest.toFixed(decimals)
            : Math.round(latest).toString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springVal, decimals, prefix, suffix]);

  const initialDisplay =
    decimals > 0 ? from.toFixed(decimals) : Math.round(from).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {initialDisplay}
      {suffix}
    </span>
  );
}
