"use client"

import * as React from "react"
import { parseTimeToSeconds, formatUptime } from "@/lib/time-utils"

/**
 * Custom hook for tracking uptime that counts up from an initial time
 * @param initialTime - Initial time string in "HH:MM:SS" format (e.g., "10:20:00")
 * @returns Formatted uptime string that updates every second
 */
export function useUptime(initialTime: string): string {
  const [totalSeconds, setTotalSeconds] = React.useState(() => {
    return parseTimeToSeconds(initialTime)
  })

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return formatUptime(totalSeconds)
}
