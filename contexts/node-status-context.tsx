"use client"

import * as React from "react"

export type NodeStatus = "running" | "paused" | "stopped"
export type LoadingAction = "pausing" | "resuming" | "rebooting" | null

interface NodeStatusContextValue {
  status: NodeStatus
  loadingAction: LoadingAction
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
  const [loadingAction, setLoadingAction] = React.useState<LoadingAction>(null)

  const pause = React.useCallback(() => {
    const isCurrentlyPaused = status === "paused"
    const action: LoadingAction = isCurrentlyPaused ? "resuming" : "pausing"
    
    setLoadingAction(action)
    
    setTimeout(() => {
      setStatus((prev) => (prev === "running" ? "paused" : "running"))
      setLoadingAction(null)
    }, 1500)
  }, [status])

  const restart = React.useCallback(() => {
    setLoadingAction("rebooting")
    
    setTimeout(() => {
      setStatus("running")
      setResetTrigger((prev) => prev + 1)
      setLoadingAction(null)
    }, 1500)
  }, [])

  const value = React.useMemo(
    () => ({
      status,
      loadingAction,
      pause,
      restart,
      resetTrigger,
    }),
    [status, loadingAction, pause, restart, resetTrigger]
  )

  return (
    <NodeStatusContext.Provider value={value}>
      {children}
    </NodeStatusContext.Provider>
  )
}
