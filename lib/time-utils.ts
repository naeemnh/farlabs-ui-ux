/**
 * Parses a time string in "HH:MM:SS" format to total seconds
 * @param timeString - Time string in format "HH:MM:SS"
 * @returns Total seconds
 */
export function parseTimeToSeconds(timeString: string): number {
  const parts = timeString.split(":").map(Number)
  if (parts.length !== 3) {
    throw new Error(`Invalid time format: ${timeString}. Expected "HH:MM:SS"`)
  }
  const [hours, minutes, seconds] = parts
  return hours * 3600 + minutes * 60 + seconds
}

/**
 * Formats total seconds to "HH:MM:SS" format
 * @param totalSeconds - Total seconds to format
 * @returns Formatted time string "HH:MM:SS"
 */
export function formatUptime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
