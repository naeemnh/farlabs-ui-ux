import * as React from "react"
import { cn } from "@/lib/utils"

interface StatusDotProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "running" | "stopped" | "paused"
}

export function StatusDot({ 
  variant = "running", 
  className,
  ...props 
}: StatusDotProps) {
  return (
    <div
      className={cn(
        "h-2 w-2 rounded-full",
        {
          "bg-green-500": variant === "running",
          "bg-red-500": variant === "stopped",
          "bg-yellow-500": variant === "paused",
        },
        className
      )}
      {...props}
    />
  )
}
