
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartContent } from "@/components/ui/chart";

const mockData = {
  salesData: [
    { date: "Mon", amount: 2400 },
    { date: "Tue", amount: 1398 },
    { date: "Wed", amount: 3800 },
    { date: "Thu", amount: 3908 },
    { date: "Fri", amount: 4800 },
    { date: "Sat", amount: 3800 },
    { date: "Sun", amount: 4300 },
  ],
  topDevices: [
    { name: "iPhone 13", sales: 340 },
    { name: "iPhone 12", sales: 275 },
    { name: "Galaxy S21", sales: 220 },
    { name: "iPhone 11", sales: 190 },
  ],
  marketplaceData: [
    { name: "Amazon", sales: 4500 },
    { name: "eBay", sales: 3200 },
    { name: "Website", sales: 2800 },
  ],
  inventoryStatus: [
    { name: "Low Stock", value: 12 },
    { name: "Medium", value: 45 },
    { name: "High", value: 23 },
  ],
};

const DashboardInsights = () => {
  const [timeRange, setTimeRange] = React.useState("7days");

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold">Performance Insights</h2>
        <ToggleGroup type="single" value={timeRange} onValueChange={(value) => value && setTimeRange(value)}>
          <ToggleGroupItem value="7days">Last 7 Days</ToggleGroupItem>
          <ToggleGroupItem value="30days">Last 30 Days</ToggleGroupItem>
          <ToggleGroupItem value="90days">Last 90 Days</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales Over Time Chart */}
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Sales Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData.salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="amount" stroke="#0891B2" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Selling Devices */}
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Devices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData.topDevices}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#0D9488" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Marketplace Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Marketplace Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData.marketplaceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#059669" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardInsights;
