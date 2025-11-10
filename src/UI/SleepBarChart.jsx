"use client"

import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { day: "S", hours: 6.5, fullDay: "Sunday" },
  { day: "M", hours: 8.0, fullDay: "Monday" },
  { day: "T", hours: 5.5, fullDay: "Tuesday" },
  { day: "W", hours: 8.5, fullDay: "Wednesday" },
  { day: "T", hours: 7.0, fullDay: "Thursday" },
  { day: "F", hours: 9.5, fullDay: "Friday" },
  { day: "S", hours: 7.5, fullDay: "Saturday" },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { hours, fullDay } = payload[0].payload
    return (
      <div className="bg-primary text-primary-foreground px-3 py-2 rounded-md shadow-lg text-sm font-medium">
        <p>{fullDay}</p>
        <p className="font-semibold">{hours} hours</p>
      </div>
    )
  }
  return null
}

export default function SleepBarChart() {
  return (
    <Card className="w-full ">
     
      {/* <CardContent> */}
        <ResponsiveContainer width="100%" height={180}>
          {/* reduce bar width by setting barCategoryGap on the chart and barSize on the Bar */}
          <BarChart data={data} className="w-full" barCategoryGap="40%">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fill: "hsl(var(--foreground))", fontSize: 14, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
            />
              {/* Hide the Y axis ticks/labels and set width to 0 so the chart starts at the left edge */}
              <YAxis
                width={0}
                tick={false}
                axisLine={false}
                tickLine={false}
              />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0,0,0,0.05)" }} />
            <Bar dataKey="hours" barSize={18} radius={[6, 6, 0, 0]} isAnimationActive={true} animationDuration={600}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#06B6D4" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      {/* </CardContent> */}
    </Card>
  )
}
