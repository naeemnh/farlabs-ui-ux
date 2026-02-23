"use client"

import * as React from "react"
import { parseTimeToSeconds, formatUptime } from "@/lib/time-utils"

/**
 * Custom hook for tracking uptime that counts up from an initial time
 * @param initialTime - Initial time string in "HH:MM:SS" format (e.g., "10:20:00")
 * @param isPaused - Whether the timer should be paused
 * @param resetTrigger - Number that changes to trigger a reset to 0:00:00
 * @returns Formatted uptime string that updates every second
 */
export function useUptime(
  initialTime: string,
  isPaused: boolean = false,
  resetTrigger?: number
): string {
  const [totalSeconds, setTotalSeconds] = React.useState(() => {
    return parseTimeToSeconds(initialTime)
  })

  // Reset to 0:00:00 when resetTrigger changes
  React.useEffect(() => {
    if (resetTrigger !== undefined && resetTrigger > 0) {
      setTotalSeconds(0)
    }
  }, [resetTrigger])

  // Update timer every second when not paused
  React.useEffect(() => {
    if (isPaused) {
      return
    }

    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isPaused])

  return formatUptime(totalSeconds)
}
