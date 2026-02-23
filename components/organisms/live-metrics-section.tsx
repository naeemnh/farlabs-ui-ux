"use client"

import * as React from "react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"
import { CircularProgress } from "../molecules"

const utilizationConfig = {
  utilization: {
    label: "Utilization",
    color: "hsl(173, 80%, 40%)",
  },
} satisfies ChartConfig

const temperatureConfig = { 
  temperature: {
    label: "Temperature",
    color: "hsl(25, 95%, 53%)",
  },
} satisfies ChartConfig

const vramConfig = {
  vram: {
    label: "VRAM usage",
    color: "hsl(0, 84%, 60%)",
  },
} satisfies ChartConfig

export function LiveMetricsSection() {
  const utilizationData = [
    { utilization: 43, fill: "hsl(173, 80%, 40%)" },
  ]
  
  const temperatureData = [
    { temperature: 55, fill: "hsl(25, 95%, 53%)" },
  ]
  
  const vramData = [
    { vram: 72, fill: "hsl(0, 84%, 60%)" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {/* Utilization Chart */}
          {/* <div className="flex items-center gap-2"> */}
            <CircularProgress
              chartConfig={utilizationConfig}
              data={utilizationData}
              label="utilization"
              sign="%"
              maxValue={100}
              description="44.6% avg (24h)"
            />
          {/* </div> */}

          {/* Temperature Chart */}
          <CircularProgress
            chartConfig={temperatureConfig}
            data={temperatureData}
            label="temperature"
            sign="°C"
            maxValue={300}
            description="59.8°C avg (24h)"
          />

          {/* VRAM Usage Chart */}
          <CircularProgress
            chartConfig={vramConfig}
            data={vramData}
            label="vram"
            sign="%"
            maxValue={390}
            description="21385.2 / 29200 GB"
          />
        </div>
      </CardContent>
    </Card>
  )
}
