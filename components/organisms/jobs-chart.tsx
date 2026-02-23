"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

// Sample data for 24 hours (jobs per hour)
const chartData = [
  { hour: "00:00", jobs: 100000 },
  { hour: "01:00", jobs: 100000 },
  { hour: "02:00", jobs: 100000 },
  { hour: "03:00", jobs: 100000 },
  { hour: "04:00", jobs: 100000 },
  { hour: "05:00", jobs: 100000 },
  { hour: "06:00", jobs: 105500 },
  { hour: "07:00", jobs: 111000 },
  { hour: "08:00", jobs: 111000 },
  { hour: "09:00", jobs: 111000 },
  { hour: "10:00", jobs: 111000 },
  { hour: "11:00", jobs: 111000 },
  { hour: "12:00", jobs: 111000 },
  { hour: "13:00", jobs: 111000 },
  { hour: "14:00", jobs: 108000 },
  { hour: "15:00", jobs: 105000 },
  { hour: "16:00", jobs: 105000 },
  { hour: "17:00", jobs: 105000 },
  { hour: "18:00", jobs: 105000 },
  { hour: "19:00", jobs: 105000 },
  { hour: "20:00", jobs: 105000 },
  { hour: "21:00", jobs: 109000 },
  { hour: "22:00", jobs: 113000 },
  { hour: "23:00", jobs: 117000 },
]

const chartConfig = {
  jobs: {
    label: "Jobs per hour",
    color: "hsl(263, 99%, 49%)", // farlabs blue
  },
} satisfies ChartConfig

export function JobsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Jobs per hour (24h)</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[354px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                // Show only 00:00, 12:00, and 23:00
                if (value === "00:00" || value === "12:00" || value === "23:00") {
                  return value
                }
                return ""
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                if (value >= 1000) {
                  return `${(value / 1000).toFixed(1)}K`
                }
                return value.toString()
              }}
              domain={[88900, 118300]}
              ticks={[88900, 96250, 103600, 110950, 118300]}
              className="text-white"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <defs>
              <linearGradient id="fillJobs" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-jobs)"
                  stopOpacity={0.85}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-jobs)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="jobs"
              type="linear"
              fill="url(#fillJobs)"
              stroke="var(--color-jobs)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
