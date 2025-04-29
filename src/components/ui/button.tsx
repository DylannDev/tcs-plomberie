import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-lg font-semibold transition-all duration-300 ease-in-out cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-yellow text-black hover:translate-y-[-2px]",
        black: "bg-black text-white hover:translate-y-[-2px]",
        black_blog: "bg-black text-white border border-black",
        sky_blue: "bg-sky-blue text-white hover:bg-yellow",
        outline:
          "bg-transparent text-black border border-black hover:bg-black hover:text-white hover:translate-y-[-2px]",
        outline_blog:
          "bg-light-blue text-black border border-black hover:bg-yellow hover:border-transparent transition-all duration-500 ease-in-out",
      },
      size: {
        default: "px-6 py-[18px]",
        sm: "px-4 py-3 text-base",
        // lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type BaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps & {
  as?: "button";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type LinkProps = BaseProps & {
  as: "link";
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = ButtonProps | LinkProps;

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { className, variant, size, as = "button", ...rest } = props;
  const classNameValue = cn(buttonVariants({ variant, size, className }));

  if (as === "link") {
    const { href, ...linkProps } = rest as LinkProps;
    return (
      <Link href={href} className={classNameValue} {...linkProps}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={classNameValue}
      ref={ref}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
