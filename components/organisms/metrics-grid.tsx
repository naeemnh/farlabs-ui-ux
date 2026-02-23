"use client"

import * as React from "react"
import { MetricCard } from "@/components/molecules/metric-card"
import { useUptime } from "@/hooks/use-uptime"
import { useNodeStatus } from "@/contexts/node-status-context"

export function MetricsGrid() {
  const { status, resetTrigger } = useNodeStatus()
  const isPaused = status === "paused"
  const sessionUptime = useUptime("10:20:00", isPaused, resetTrigger)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        value={sessionUptime}
        label="Session uptime"
        description="Resets when you restart the node"
      />
      <MetricCard
        value="1 247,85 $"
        label="Earnings today"
        description="Earnings since local day start"
      />
      <MetricCard
        value="1040 / 1100"
        label="Active GPUs"
        description="GPUs currently processing workloads"
      />
      <MetricCard
        value="67 318"
        label="Jobs today"
        description="Completed since local day start"
      />
    </div>
  )
}
