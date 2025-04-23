
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from "@/components/ui/chart";
import { DollarSign, Package, Box, BarChart4 } from "lucide-react";

const salesData = [
  { date: "Mon", sales: 12000 },
  { date: "Tue", sales: 15000 },
  { date: "Wed", sales: 18000 },
  { date: "Thu", sales: 14000 },
  { date: "Fri", sales: 20000 },
  { date: "Sat", sales: 22000 },
  { date: "Sun", sales: 19000 },
];

const DashboardInsights = () => {
  const [timeRange, setTimeRange] = useState("7d");
  
  return (
    <div className="w-full">
      <Card className="w-full shadow-lg border border-border/50">
        {/* Header Section */}
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BarChart4 className="w-4 h-4 text-brand-blue" />
              Sales Performance
            </CardTitle>
            <ToggleGroup type="single" value={timeRange} onValueChange={(value) => value && setTimeRange(value)} className="h-8">
              <ToggleGroupItem value="7d" className="text-xs">7d</ToggleGroupItem>
              <ToggleGroupItem value="30d" className="text-xs">30d</ToggleGroupItem>
              <ToggleGroupItem value="90d" className="text-xs">90d</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-3">
          {/* Chart Section - Reduced height and adjusted margins */}
          <div className="h-[160px] w-full">
            <ChartContainer config={{
              sales: { theme: { light: '#0891b2', dark: '#0891b2' } },
            }}>
              <ResponsiveContainer>
                <LineChart data={salesData} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-lg">
                          <p className="font-medium text-sm">${payload[0].value.toLocaleString()}</p>
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
                    dot={{ strokeWidth: 2 }}
                    activeDot={{ r: 4, strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          {/* Key Metrics Grid - Adjusted padding and spacing */}
          <div className="grid grid-cols-3 gap-3">
            {/* Revenue */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <DollarSign className="w-3 h-3 text-brand-teal" />
                Revenue
              </div>
              <div className="font-semibold text-sm">$120K</div>
            </div>

            {/* Units */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <Package className="w-3 h-3 text-brand-blue" />
                Units
              </div>
              <div className="font-semibold text-sm">347</div>
            </div>

            {/* Inventory */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <Box className="w-3 h-3 text-brand-green" />
                In Stock
              </div>
              <div className="font-semibold text-sm">234</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardInsights;
