"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, duration);
    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <span
      className={cn("z-10 inline-grid relative overflow-hidden", className)}
    >
      {/* Invisible words to reserve the width of the longest one */}
      {words.map((word) => (
        <span key={word} className="invisible col-start-1 row-start-1">
          {word}
        </span>
      ))}
      {/* Visible animated word */}
      <span
        className="col-start-1 row-start-1"
        style={{
          opacity: isVisible ? 1 : 0,
          filter: isVisible ? "blur(0px)" : "blur(8px)",
          transform: isVisible ? "translateY(0)" : "translateY(-10px)",
          transition:
            "opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease",
        }}
      >
        {words[index]}
      </span>
    </span>
  );
};
