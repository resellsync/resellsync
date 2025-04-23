
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
    <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
        <div className="font-semibold text-gray-900 text-lg">Sales Overview</div>
        <div className="text-sm text-muted-foreground">Last 7 days</div>
      </div>
      <div className="overflow-x-auto p-4">
        {/* Chart Section */}
        <div className="h-48 w-full mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={salesData} 
              margin={{ 
                top: 10, 
                right: 10, 
                left: 10, 
                bottom: 5 
              }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                opacity={0.15} 
                horizontal={true}
                vertical={false}
              />
              <XAxis 
                dataKey="date" 
                tick={{ 
                  fontSize: 12,
                  fill: '#8E9196' 
                }} 
                tickMargin={8}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                width={60}
                tick={{ 
                  fontSize: 12,
                  fill: '#8E9196'
                }} 
                tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <Tooltip 
                formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Sales']}
                labelFormatter={(label) => `${label}`}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.375rem',
                  padding: '0.5rem',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#0891b2" 
                strokeWidth={2}
                dot={{ strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* Revenue */}
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-1">
              <DollarSign className="w-4 h-4 text-brand-teal" />
              Revenue
            </div>
            <div className="text-xl font-semibold">$120,000</div>
            <div className="text-xs text-green-600">+12% from last week</div>
          </div>

          {/* Units */}
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-1">
              <Package className="w-4 h-4 text-brand-blue" />
              Units Sold
            </div>
            <div className="text-xl font-semibold">347</div>
            <div className="text-xs text-green-600">+8% from last week</div>
          </div>

          {/* Inventory */}
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-1">
              <Box className="w-4 h-4 text-brand-green" />
              In Stock
            </div>
            <div className="text-xl font-semibold">1,234</div>
            <div className="text-xs text-red-500">-3% from last week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInsights;

