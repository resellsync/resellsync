
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, ArrowUp, ArrowDown, ShoppingBag } from 'lucide-react';

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
  { name: "iPhone 13 Pro", sales: 450 },
  { name: "Samsung S21", sales: 380 },
  { name: "iPhone 12", sales: 320 },
  { name: "Google Pixel 7", sales: 280 },
];

const inventoryStatus = [
  { status: "In Stock", count: 182, icon: <Package className="h-4 w-4 text-green-500" /> },
  { status: "Low Stock", count: 24, icon: <ArrowDown className="h-4 w-4 text-yellow-500" /> },
  { status: "Out of Stock", count: 8, icon: <ShoppingBag className="h-4 w-4 text-red-500" /> },
];

const marketplaceData = [
  { name: "eBay", value: 45 },
  { name: "Backmarket", value: 30 },
  { name: "Reebelo", value: 25 },
];

const DashboardInsights = () => {
  const [timeRange, setTimeRange] = useState("7d");
  
  return (
    <div className="w-full space-y-4 rounded-xl bg-muted/30 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <h3 className="text-lg font-semibold">Performance Overview</h3>
        <ToggleGroup type="single" value={timeRange} onValueChange={(value) => value && setTimeRange(value)} className="bg-white shadow-sm">
          <ToggleGroupItem value="7d" className="text-xs">7D</ToggleGroupItem>
          <ToggleGroupItem value="30d" className="text-xs">30D</ToggleGroupItem>
          <ToggleGroupItem value="90d" className="text-xs">90D</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sales Chart */}
        <Card className="col-span-1 md:col-span-2">
          <CardContent className="pt-6">
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#0891b2" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Selling Devices */}
        <Card>
          <CardContent className="pt-6">
            <h4 className="text-sm font-medium mb-4">Top Selling Devices</h4>
            <div className="space-y-4">
              {topDevices.map((device, index) => (
                <div key={device.name} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{device.name}</span>
                  <span className="text-sm font-medium">{device.sales} units</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Inventory Status */}
        <Card>
          <CardContent className="pt-6">
            <h4 className="text-sm font-medium mb-4">Inventory Summary</h4>
            <div className="space-y-4">
              {inventoryStatus.map((item) => (
                <div key={item.status} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm text-muted-foreground">{item.status}</span>
                  </div>
                  <span className="text-sm font-medium">{item.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardInsights;
