
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from "@/components/ui/chart";
import { DollarSign, Package, Box, BarChart4, ShoppingBag } from "lucide-react";

const salesData = [
  { date: "Mon", sales: 12000 },
  { date: "Tue", sales: 15000 },
  { date: "Wed", sales: 18000 },
  { date: "Thu", sales: 14000 },
  { date: "Fri", sales: 20000 },
  { date: "Sat", sales: 22000 },
  { date: "Sun", sales: 19000 },
];

const topDevices = [
  { name: "iPhone 13", units: 45 },
  { name: "Samsung S21", units: 38 },
  { name: "iPhone 12", units: 32 },
];

const marketplaceData = [
  { name: "eBay", revenue: 3000 },
  { name: "Backmarket", revenue: 4500 },
  { name: "Swappa", revenue: 2500 },
];

const DashboardInsights = () => {
  const [timeRange, setTimeRange] = useState("7d");
  
  return (
    <div className="w-full">
      <Card className="w-full shadow-lg border border-border/50">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <BarChart4 className="w-5 h-5 text-brand-blue" />
              Sales Performance
            </CardTitle>
            <ToggleGroup type="single" value={timeRange} onValueChange={(value) => value && setTimeRange(value)}>
              <ToggleGroupItem value="7d">7 Days</ToggleGroupItem>
              <ToggleGroupItem value="30d">30 Days</ToggleGroupItem>
              <ToggleGroupItem value="90d">90 Days</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Chart Section */}
          <div className="h-[300px] w-full">
            <ChartContainer config={{
              sales: { theme: { light: '#0891b2', dark: '#0891b2' } },
            }}>
              <ResponsiveContainer>
                <LineChart data={salesData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-lg">
                          <p className="font-medium">${payload[0].value.toLocaleString()}</p>
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
                    activeDot={{ r: 6, strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Revenue Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-brand-teal" />
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${(120000).toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">This {timeRange}</p>
              </CardContent>
            </Card>

            {/* Units Sold Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Package className="w-4 h-4 text-brand-blue" />
                  Units Sold
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">347</div>
                <p className="text-xs text-muted-foreground">This {timeRange}</p>
              </CardContent>
            </Card>

            {/* Inventory Status */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Box className="w-4 h-4 text-brand-green" />
                  Inventory Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>In Stock</span>
                    <span className="font-medium">234</span>
                  </div>
                  <div className="flex justify-between text-yellow-600">
                    <span>Low Stock</span>
                    <span className="font-medium">45</span>
                  </div>
                  <div className="flex justify-between text-red-500">
                    <span>Out of Stock</span>
                    <span className="font-medium">12</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Top Selling Devices */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-brand-blue" />
                  Top Selling Devices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {topDevices.map((device, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{device.name}</span>
                      <span className="font-medium">{device.units} units</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Marketplace Performance */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <BarChart4 className="w-4 h-4 text-brand-teal" />
                  Marketplace Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {marketplaceData.map((marketplace, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{marketplace.name}</span>
                      <span className="font-medium">${marketplace.revenue.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardInsights;
