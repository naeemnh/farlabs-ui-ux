import * as React from "react"
import { cn } from "@/lib/utils"

interface MetricValueProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number
  size?: "sm" | "md" | "lg"
}

export function MetricValue({ 
  value, 
  size = "md",
  className,
  ...props 
}: MetricValueProps) {
  return (
    <div
      className={cn(
        "font-semibold",
        {
          "text-2xl": size === "lg",
          "text-xl": size === "md",
          "text-base": size === "sm",
        },
        className
      )}
      {...props}
    >
      {value}
    </div>
  )
}
