"use client"

import * as React from "react"
import { StatusIndicator } from "@/components/molecules/status-indicator"
import { ActionButton } from "@/components/molecules/action-button"
import { useNodeStatus } from "@/contexts/node-status-context"

export function DashboardHeader() {
  const { status, loadingAction, pause, restart } = useNodeStatus()

  const getStatusLabel = () => {
    if (loadingAction) {
      switch (loadingAction) {
        case "pausing":
          return "Node pausing"
        case "resuming":
          return "Node resuming"
        case "rebooting":
          return "Node rebooting"
        default:
          return "Node running"
      }
    }

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

  const getStatusForIndicator = () => {
    // During loading, show "running" status for visual consistency
    if (loadingAction) {
      return "running" as const
    }
    return status
  }

  return (
    <header className="flex items-center justify-between mb-6 h-16 shrink-0 items-center gap-2 border-b px-4">
      <div className="flex items-center gap-4">
        {/* <h1 className="text-2xl font-semibold">Overview</h1> */}
        <StatusIndicator 
          status={getStatusForIndicator()} 
          label={getStatusLabel()} 
          isLoading={!!loadingAction}
        />
      </div>
      <div className="flex items-center gap-2">
        <ActionButton onClick={restart} disabled={!!loadingAction}>Restart</ActionButton>
        <ActionButton onClick={pause} disabled={!!loadingAction}>
          {status === "paused" ? "Resume" : "Pause node"}
        </ActionButton>
      </div>
    </header>
  )
}
