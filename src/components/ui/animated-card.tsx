import { InView } from "./in-view";
import { cn } from "@/src/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}

export function AnimatedCard({
  children,
  className,
  index = 1,
}: AnimatedCardProps) {
  return (
    <InView delay={index * 0.1} className={cn("h-full", className)}>
      {children}
    </InView>
  );
}
