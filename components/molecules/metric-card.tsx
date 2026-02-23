import * as React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MetricValue, MetricLabel } from "@/components/atoms"
import { cn } from "@/lib/utils"

interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number
  label: string
  description?: string
}

export function MetricCard({ 
  value, 
  label, 
  description,
  className,
  ...props 
}: MetricCardProps) {
  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <MetricLabel>{label}</MetricLabel>
        <MetricValue value={value} size="lg" />
      </CardHeader>
      {description && (
        <CardContent>
          <MetricLabel size="sm">{description}</MetricLabel>
        </CardContent>
      )}
    </Card>
  )
}
