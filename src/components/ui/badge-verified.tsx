
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeVerifiedProps {
  className?: string;
  size?: "sm" | "md";
}

export function BadgeVerified({ className, size = "md" }: BadgeVerifiedProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-teal-light/20",
        size === "sm" ? "h-4 w-4" : "h-5 w-5",
        className
      )}
    >
      <Check
        className={cn(
          "text-teal",
          size === "sm" ? "h-3 w-3" : "h-4 w-4"
        )}
      />
    </span>
  );
}
