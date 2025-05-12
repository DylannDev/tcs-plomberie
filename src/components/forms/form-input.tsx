import { forwardRef } from "react";
import { cn } from "@/src/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full px-5 sm:px-6 py-4 sm:py-5 border rounded-xl focus:border-yellow hover:border-yellow transition-all duration-300 ease-in-out outline-none text-lg font-medium placeholder:text-dark-gray/50 placeholder:font-regular placeholder:text-[15px] placeholder:sm:text-base",
          error ? "border-red" : "border-black",
          className
        )}
        {...props}
      />
    );
  }
);

FormInput.displayName = "FormInput";
