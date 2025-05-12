import { forwardRef } from "react";
import { cn } from "@/src/lib/utils";

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full px-5 sm:px-6 py-4 sm:py-5 border rounded-xl focus:border-yellow hover:border-yellow transition-all duration-300 ease-in-out outline-none text-lg font-medium placeholder:text-dark-gray/50 placeholder:font-regular placeholder:text-[15px] placeholder:sm:text-base",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
        {...props}
      />
    );
  }
);

FormTextarea.displayName = "FormTextarea";
