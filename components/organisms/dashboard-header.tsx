import * as React from "react"
import { StatusIndicator } from "@/components/molecules/status-indicator"
import { ActionButton } from "@/components/molecules/action-button"

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-6 h-16 shrink-0 items-center gap-2 border-b px-4">
      <div className="flex items-center gap-4">
        {/* <h1 className="text-2xl font-semibold">Overview</h1> */}
        <StatusIndicator status="running" label="Node running" />
      </div>
      <div className="flex items-center gap-2">
        <ActionButton>Restart</ActionButton>
        <ActionButton>Pause node</ActionButton>
      </div>
    </header>
  )
}
