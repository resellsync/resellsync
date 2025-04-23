
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
    <div className="w-full max-w-3xl mx-auto">
      <Card className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <CardHeader className="p-3 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium flex items-center gap-1.5">
              <BarChart4 className="w-3.5 h-3.5 text-brand-blue" />
              Sales Overview
            </CardTitle>
            <ToggleGroup type="single" value={timeRange} onValueChange={(value) => value && setTimeRange(value)} className="h-7">
              <ToggleGroupItem value="7d" className="text-xs px-2">7d</ToggleGroupItem>
              <ToggleGroupItem value="30d" className="text-xs px-2">30d</ToggleGroupItem>
              <ToggleGroupItem value="90d" className="text-xs px-2">90d</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardHeader>
        
        <CardContent className="p-3 space-y-2">
          {/* Chart Section */}
          <div className="h-24 w-full">
            <ChartContainer config={{
              sales: { theme: { light: '#0891b2', dark: '#0891b2' } },
            }}>
              <ResponsiveContainer>
                <LineChart data={salesData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 9 }} 
                    tickMargin={4}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 9 }} 
                    width={25}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white border rounded-lg p-1.5 shadow-lg text-xs">
                          <p className="font-medium">${payload[0].value.toLocaleString()}</p>
                          <p className="text-muted-foreground text-[10px]">{payload[0].payload.date}</p>
                        </div>
                      );
                    }
                    return null;
                  }} />
                  <Line 
                    type="monotone" 
                    dataKey="sales" 
                    stroke="var(--color-sales)" 
                    strokeWidth={1.25}
                    dot={{ strokeWidth: 1, r: 1.5 }}
                    activeDot={{ r: 2.5, strokeWidth: 1.25 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-1 border-t border-gray-200">
            {/* Revenue */}
            <div className="text-center py-1">
              <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground mb-0.5">
                <DollarSign className="w-3 h-3 text-brand-teal" />
                Revenue
              </div>
              <div className="text-xs font-medium">$120K</div>
            </div>

            {/* Units */}
            <div className="text-center py-1">
              <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground mb-0.5">
                <Package className="w-3 h-3 text-brand-blue" />
                Units
              </div>
              <div className="text-xs font-medium">347</div>
            </div>

            {/* Inventory */}
            <div className="text-center py-1">
              <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground mb-0.5">
                <Box className="w-3 h-3 text-brand-green" />
                In Stock
              </div>
              <div className="text-xs font-medium">234</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardInsights;

