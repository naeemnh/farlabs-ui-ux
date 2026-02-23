import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { StatusDot } from "@/components/atoms"

interface StatusIndicatorProps {
  status: "running" | "stopped" | "paused"
  label: string
}

export function StatusIndicator({ status, label }: StatusIndicatorProps) {
  return (
    <Badge variant="transparent" className="gap-2">
      <StatusDot variant={status} />
      {label}
    </Badge>
  )
}
