import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  number: string;
  label: string;
  icon?: ReactNode;
  variant?: "default" | "urgent" | "warning";
  className?: string;
}

export const StatCard = ({ 
  number, 
  label, 
  icon, 
  variant = "default",
  className 
}: StatCardProps) => {
  const variantStyles = {
    default: "border-water-light/30 bg-card/50",
    urgent: "border-crisis-urgent/50 bg-crisis-urgent/10",
    warning: "border-earth-warm/50 bg-earth-warm/10",
  };

  return (
    <div className={cn(
      "p-8 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg slide-in",
      variantStyles[variant],
      className
    )}>
      {icon && (
        <div className="mb-4 text-primary">
          {icon}
        </div>
      )}
      <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br from-primary to-stat-highlight bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-lg text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};
