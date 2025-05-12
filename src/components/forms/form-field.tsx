import { Typography } from "@/src/components/ui/typography";
import { cn } from "@/src/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function FormField({
  label,
  name,
  type = "text",
  error,
  required = false,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <label
        htmlFor={name}
        className="block text-base sm:text-lg font-semibold text-dark-blue"
      >
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      {children}
      {error && (
        <Typography as="p" variant="sm" className="text-red font-regular">
          {error}
        </Typography>
      )}
    </div>
  );
}
