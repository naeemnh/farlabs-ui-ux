import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { StatusDot } from "@/components/atoms"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatusIndicatorProps {
  status: "running" | "stopped" | "paused"
  label: string
  isLoading?: boolean
}

export function StatusIndicator({ status, label, isLoading = false }: StatusIndicatorProps) {
  return (
    <Badge variant="transparent" className="gap-2">
      {isLoading ? (
        <Loader2 className="h-2 w-2 animate-spin text-muted-foreground" />
      ) : (
        <StatusDot variant={status} />
      )}
      {label}
    </Badge>
  )
}
