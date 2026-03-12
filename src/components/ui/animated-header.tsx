import { InView } from "./in-view";
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
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <InView delay={delay} mode="fade-scale" className={cn("relative", className)}>
      {children}
    </InView>
  );
}
