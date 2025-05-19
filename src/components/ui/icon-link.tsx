import { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface IconLinkProps {
  href: string;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
  iconClassName?: string;
  ariaLabel?: string;
}

export function IconLink({
  href,
  children,
  icon,
  className,
  iconClassName = "p-1 sm:p-2 rounded-full bg-yellow",
  ariaLabel,
}: IconLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-1 sm:gap-2 hover:text-light-gray transition-colors",
        className
      )}
      target="_blank"
      aria-label={ariaLabel}
    >
      {icon && <span className={iconClassName}>{icon}</span>}
      {children}
    </a>
  );
}
