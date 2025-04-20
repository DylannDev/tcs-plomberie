import { cn } from "@/src/lib/utils";
import { HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  lineHeight?: "tight" | "normal" | "relaxed";
  as: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Typography({
  variant = "base",
  weight = "normal",
  lineHeight = "normal",
  as: Component,
  className,
  children,
  ...props
}: TypographyProps) {
  const getVariantClass = () => {
    switch (variant) {
      case "xs":
        return "text-xs";
      case "sm":
        return "text-sm";
      case "base":
        return "text-base";
      case "lg":
        return "text-lg";
      case "xl":
        return "text-xl";
      case "2xl":
        return "text-2xl";
      case "3xl":
        return "text-3xl";
      case "4xl":
        return "text-4xl";
      case "5xl":
        return "text-5xl";
      case "6xl":
        return "text-6xl";
      default:
        return "text-base";
    }
  };

  const getWeightClass = () => {
    switch (weight) {
      case "light":
        return "font-light";
      case "normal":
        return "font-normal";
      case "medium":
        return "font-medium";
      case "semibold":
        return "font-semibold";
      case "bold":
        return "font-bold";
      case "extrabold":
        return "font-extrabold";
      default:
        return "font-normal";
    }
  };

  const getLineHeightClass = () => {
    switch (lineHeight) {
      case "tight":
        return "leading-tight";
      case "normal":
        return "leading-normal";
      case "relaxed":
        return "leading-relaxed";
      default:
        return "leading-normal";
    }
  };

  return (
    <Component
      className={cn(
        getVariantClass(),
        getWeightClass(),
        getLineHeightClass(),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
