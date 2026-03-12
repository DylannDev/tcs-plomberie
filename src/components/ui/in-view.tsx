"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/src/lib/utils";

interface InViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  mode?: "fade-up" | "fade-scale";
}

export function InView({
  children,
  className,
  delay = 0,
  mode = "fade-up",
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseStyles =
    mode === "fade-up"
      ? { opacity: 0, transform: "translateY(20px)" }
      : { opacity: 0, transform: "scale(0.95)" };

  const visibleStyles = { opacity: 1, transform: "translateY(0) scale(1)" };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        ...(isVisible ? visibleStyles : baseStyles),
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
