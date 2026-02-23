"use client"

import * as React from "react"

export type NodeStatus = "running" | "paused" | "stopped"

interface NodeStatusContextValue {
  status: NodeStatus
  pause: () => void
  restart: () => void
  resetTrigger: number
}

const NodeStatusContext = React.createContext<NodeStatusContextValue | null>(null)

export function useNodeStatus() {
  const context = React.useContext(NodeStatusContext)
  if (!context) {
    throw new Error("useNodeStatus must be used within a NodeStatusProvider")
  }
  return context
}

interface NodeStatusProviderProps {
  children: React.ReactNode
}

export function NodeStatusProvider({ children }: NodeStatusProviderProps) {
  const [status, setStatus] = React.useState<NodeStatus>("running")
  const [resetTrigger, setResetTrigger] = React.useState(0)

  const pause = React.useCallback(() => {
    setStatus((prev) => (prev === "running" ? "paused" : "running"))
  }, [])

  const restart = React.useCallback(() => {
    setStatus("running")
    setResetTrigger((prev) => prev + 1)
  }, [])

  const value = React.useMemo(
    () => ({
      status,
      pause,
      restart,
      resetTrigger,
    }),
    [status, pause, restart, resetTrigger]
  )

  return (
    <NodeStatusContext.Provider value={value}>
      {children}
    </NodeStatusContext.Provider>
  )
}
