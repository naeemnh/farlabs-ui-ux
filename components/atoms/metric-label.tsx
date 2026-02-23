import * as React from "react"
import { cn } from "@/lib/utils"

interface MetricLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: "sm" | "md"
}

export function MetricLabel({ 
  children, 
  size = "md",
  className,
  ...props 
}: MetricLabelProps) {
  return (
    <div
      className={cn(
        "text-foreground",
        {
          "text-sm": size === "md",
          "text-xs": size === "sm",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
