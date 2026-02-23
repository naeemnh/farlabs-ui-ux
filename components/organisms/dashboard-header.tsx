"use client"

import * as React from "react"
import { StatusIndicator } from "@/components/molecules/status-indicator"
import { ActionButton } from "@/components/molecules/action-button"
import { useNodeStatus } from "@/contexts/node-status-context"

export function DashboardHeader() {
  const { status, pause, restart } = useNodeStatus()

  const getStatusLabel = () => {
    switch (status) {
      case "running":
        return "Node running"
      case "paused":
        return "Node paused"
      case "stopped":
        return "Node stopped"
      default:
        return "Node running"
    }
  }

  return (
    <header className="flex items-center justify-between mb-6 h-16 shrink-0 items-center gap-2 border-b px-4">
      <div className="flex items-center gap-4">
        {/* <h1 className="text-2xl font-semibold">Overview</h1> */}
        <StatusIndicator status={status} label={getStatusLabel()} />
      </div>
      <div className="flex items-center gap-2">
        <ActionButton onClick={restart}>Restart</ActionButton>
        <ActionButton onClick={pause}>
          {status === "paused" ? "Resume" : "Pause node"}
        </ActionButton>
      </div>
    </header>
  )
}
