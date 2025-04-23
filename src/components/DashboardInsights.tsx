
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
      <Card className="w-full shadow-lg border border-gray-200">
        {/* Header Section */}
        <CardHeader className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <BarChart4 className="w-4 h-4 text-brand-blue" />
              Sales Overview
            </CardTitle>
            <ToggleGroup type="single" value={timeRange} onValueChange={(value) => value && setTimeRange(value)} className="h-8">
              <ToggleGroupItem value="7d" className="text-xs">7d</ToggleGroupItem>
              <ToggleGroupItem value="30d" className="text-xs">30d</ToggleGroupItem>
              <ToggleGroupItem value="90d" className="text-xs">90d</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardHeader>
        
        <CardContent className="p-4">
          {/* Chart Section */}
          <div className="h-40 w-full">
            <ChartContainer config={{
              sales: { theme: { light: '#0891b2', dark: '#0891b2' } },
            }}>
              <ResponsiveContainer>
                <LineChart data={salesData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} tickMargin={5} />
                  <YAxis tick={{ fontSize: 12 }} width={40} />
                  <Tooltip content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white border rounded-lg p-2 shadow-lg">
                          <p className="text-sm font-medium">${payload[0].value.toLocaleString()}</p>
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
          <div className="grid grid-cols-3 gap-4 pt-4 mt-4 border-t border-gray-200">
            {/* Revenue */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-1">
                <DollarSign className="w-4 h-4 text-brand-teal" />
                Revenue
              </div>
              <div className="font-semibold">$120K</div>
            </div>

            {/* Units */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-1">
                <Package className="w-4 h-4 text-brand-blue" />
                Units
              </div>
              <div className="font-semibold">347</div>
            </div>

            {/* Inventory */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-1">
                <Box className="w-4 h-4 text-brand-green" />
                In Stock
              </div>
              <div className="font-semibold">234</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardInsights;
