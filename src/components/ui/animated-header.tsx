"use client";

import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  useViewport?: boolean;
}

export function AnimatedHeader({
  children,
  className,
  duration = 0.6,
  delay = 0,
  useViewport = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      {...(useViewport
        ? {
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
          }
        : {
            animate: { opacity: 1, scale: 1 },
          })}
      transition={{ duration: duration, delay: delay, ease: "easeOut" }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
}
