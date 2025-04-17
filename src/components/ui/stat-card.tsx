
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    direction: "up" | "down" | "neutral";
    value: string;
  };
  className?: string;
}

export function StatCard({ title, value, icon, trend, className }: StatCardProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-5", className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      <div className="mt-2 flex items-baseline">
        <h3 className="text-2xl font-semibold">{value}</h3>
        {trend && (
          <span
            className={cn(
              "ml-2 text-xs",
              trend.direction === "up" && "text-success",
              trend.direction === "down" && "text-destructive",
              trend.direction === "neutral" && "text-muted-foreground"
            )}
          >
            {trend.direction === "up" && "↑ "}
            {trend.direction === "down" && "↓ "}
            {trend.value}
          </span>
        )}
      </div>
    </div>
  );
}
