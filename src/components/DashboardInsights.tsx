
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from "@/components/ui/chart";
import { DollarSign, Package, Box, BarChart4 } from "lucide-react";

const salesData = {
  '7d': [
    { date: "Mon", sales: 12000 },
    { date: "Tue", sales: 15000 },
    { date: "Wed", sales: 18000 },
    { date: "Thu", sales: 14000 },
    { date: "Fri", sales: 20000 },
    { date: "Sat", sales: 22000 },
    { date: "Sun", sales: 19000 },
  ],
  '30d': [
    { date: "Week 1", sales: 85000 },
    { date: "Week 2", sales: 92000 },
    { date: "Week 3", sales: 88000 },
    { date: "Week 4", sales: 95000 },
  ],
  '90d': [
    { date: "Jan", sales: 280000 },
    { date: "Feb", sales: 310000 },
    { date: "Mar", sales: 295000 },
  ]
};

const DashboardInsights = () => {
  const [timeRange, setTimeRange] = useState("7d");
  
  return (
    <div className="w-full">
      <Card className="w-full shadow-lg border border-border/50">
        <CardHeader className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BarChart4 className="w-4 h-4 text-brand-blue" />
              Sales Performance
            </CardTitle>
            <ToggleGroup type="single" value={timeRange} onValueChange={(value) => value && setTimeRange(value)} className="h-7">
              <ToggleGroupItem value="7d" className="text-xs px-2">7d</ToggleGroupItem>
              <ToggleGroupItem value="30d" className="text-xs px-2">30d</ToggleGroupItem>
              <ToggleGroupItem value="90d" className="text-xs px-2">90d</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 p-4">
          {/* Chart Section */}
          <div className="h-[140px] w-full">
            <ChartContainer config={{
              sales: { theme: { light: '#0891b2', dark: '#0891b2' } },
            }}>
              <ResponsiveContainer>
                <LineChart data={salesData[timeRange]} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-lg">
                          <p className="font-medium text-xs">${payload[0].value.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">{payload[0].payload.date}</p>
                        </div>
                      );
                    }
                    return null;
                  }} />
                  <Line 
                    type="monotone" 
                    dataKey="sales" 
                    stroke="var(--color-sales)" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2, r: 3 }}
                    activeDot={{ r: 4, strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {/* Revenue */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground mb-0.5">
                <DollarSign className="w-3 h-3 text-brand-teal" />
                Revenue
              </div>
              <div className="text-sm font-semibold">$120K</div>
            </div>

            {/* Units */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground mb-0.5">
                <Package className="w-3 h-3 text-brand-blue" />
                Units
              </div>
              <div className="text-sm font-semibold">347</div>
            </div>

            {/* Inventory */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground mb-0.5">
                <Box className="w-3 h-3 text-brand-green" />
                In Stock
              </div>
              <div className="text-sm font-semibold">234</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardInsights;
