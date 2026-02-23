"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { type ChartConfig, ChartContainer } from "../ui/chart"
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  chartConfig: ChartConfig;
  data: any[];
  sign?: string;
  description?: string;
  label: string;
  maxValue?: number;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  chartConfig,
  data,
  className,
  description,
  label,
  sign,
  maxValue,
  ...props
}) => {
  return (
    <>
      <div className="flex items-center gap-2"{...props}>
        <ChartContainer
          config={chartConfig}
          className="mr-8 aspect-square min-h-[100px] max-h-[120px]"
        >
          <RadialBarChart
            data={data}
            startAngle={0}
            endAngle={maxValue ? -360 * (data[0][label] / maxValue) : -270}
            innerRadius={40}
            outerRadius={55}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-gray-700 last:fill-card"
              polarRadius={[43, 36]}
            />
            <RadialBar dataKey={label} cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-lg fill-white"
                          // style={{ fill: chartConfig[label].color }}
                        >
                          {data[0][label]}{sign ? sign : ""}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">{chartConfig[label].label}</span>
          {description && <span className="text-xs text-muted-foreground">{description}</span>}
        </div>
      </div>
    </>
  );
};
