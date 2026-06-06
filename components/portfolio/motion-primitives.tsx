"use client";

import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedNumber({ value }: { value: number }) {
  const reduceMotion = useReducedMotion();
  const spring = useSpring(0, { stiffness: 70, damping: 18 });
  const display = useTransform(spring, (current) => Math.round(current).toString());

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  if (reduceMotion) {
    return <>{value}</>;
  }

  return <motion.span>{display}</motion.span>;
}
