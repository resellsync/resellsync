
import { BarChart, Bell, Calendar, Package, ShoppingCart, Database, Percent, TrendingUp, ScanLine, ZoomIn, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart as ReBarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const analyticsData = [
  { name: 'Mon', Revenue: 12000, Profit: 4800 },
  { name: 'Tue', Revenue: 15000, Profit: 6000 },
  { name: 'Wed', Revenue: 18000, Profit: 7200 },
  { name: 'Thu', Revenue: 14000, Profit: 5600 },
  { name: 'Fri', Revenue: 20000, Profit: 8000 },
  { name: 'Sat', Revenue: 22000, Profit: 8800 },
  { name: 'Sun', Revenue: 19000, Profit: 7600 },
];

const recentSales = [
  { id: "S-3912", device: "iPhone 14 Pro", price: "$899", time: "2m ago", marketplace: "eBay" },
  { id: "S-3911", device: "Galaxy S23", price: "$749", time: "8m ago", marketplace: "Swappa" },
  { id: "S-3910", device: "Pixel 7", price: "$549", time: "15m ago", marketplace: "Backmarket" },
];

export const DashboardPreviewCard = () => (
  <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-2xl border bg-white">
    <div className="px-6 py-4 border-b flex items-center justify-between bg-gradient-to-r from-white via-brand-blue/5 to-white">
      <span className="font-semibold text-[18px] flex items-center gap-2">
        <BarChart className="w-5 h-5 text-brand-blue" />
        Phone Business Dashboard
      </span>
      <div className="flex items-center gap-2">
        <Bell className="w-5 h-5 text-muted-foreground hover:text-brand-blue transition-colors cursor-pointer" />
        <Calendar className="w-5 h-5 text-muted-foreground" />
      </div>
    </div>
    
    <div className="grid grid-cols-4 gap-3 p-4 bg-muted/30">
      <StatCard icon={Package} title="Active Listings" value="247" change="+12%" />
      <StatCard icon={ShoppingCart} title="Inventory" value="182" change="-3%" isNegative />
      <StatCard icon={Database} title="Revenue" value="$7,850" change="+18%" />
      <StatCard icon={Percent} title="Profit Margin" value="32%" change="+5%" />
    </div>
    
    <div className="px-6 pt-2 pb-1 flex items-center justify-between border-b border-gray-100">
      <div className="text-sm font-medium text-muted-foreground">Quick Actions</div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="h-7 text-xs group transition-all duration-300 hover:bg-brand-blue hover:text-white">
          <ScanLine className="w-3 h-3 mr-1 group-hover:text-white" />
          Scan IMEI
        </Button>
        <Button variant="outline" size="sm" className="h-7 text-xs group transition-all duration-300 hover:bg-brand-teal hover:text-white">
          <ZoomIn className="w-3 h-3 mr-1" />
          Find Phone
        </Button>
      </div>
    </div>
    
    <div className="px-3 py-2 space-y-2">
      <PerformanceChart />
      <RecentSales />
      <AutomationCard />
    </div>
  </div>
);

const StatCard = ({ icon: Icon, title, value, change, isNegative = false }) => (
  <div className="flex flex-col items-start">
    <span className="text-xs text-muted-foreground flex items-center">
      <Icon className="w-3 h-3 mr-1" /> {title}
    </span>
    <div className="flex items-end gap-1">
      <span className="font-semibold text-lg">{value}</span>
      <span className={`text-xs ${isNegative ? 'text-amber-500' : 'text-green-600'} flex items-center`}>
        {!isNegative && <TrendingUp className="h-3 w-3" />}
        {change}
      </span>
    </div>
  </div>
);

const PerformanceChart = () => (
  <Card className="border-none shadow-none bg-muted/40 hover:bg-muted/60 transition-colors">
    <CardContent className="p-3">
      <div className="flex justify-between items-center mb-2">
        <span className="block font-medium text-sm">Performance Overview</span>
      </div>
      <div className="h-28 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart data={analyticsData} barSize={16}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ececec" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                fontSize: 12
              }}
            />
            <Bar dataKey="Revenue" fill="#35b7e7" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Profit" fill="#47f4b1" radius={[4, 4, 0, 0]} />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

const RecentSales = () => (
  <Card className="border-none shadow-none hover:bg-muted/30 transition-colors">
    <CardContent className="p-3">
      <div className="flex justify-between items-center mb-2">
        <span className="block font-medium text-sm flex items-center">
          <Zap className="w-4 h-4 mr-1 text-amber-500" />
          Recent Sales
        </span>
      </div>
      <div className="space-y-2 max-h-24 overflow-y-auto">
        {recentSales.map((sale) => (
          <div key={sale.id} className="flex justify-between items-center text-xs py-1 border-b border-gray-100 last:border-0">
            <div className="flex items-center gap-2">
              <div className="text-brand-blue font-mono">{sale.id}</div>
              <div className="font-medium">{sale.device}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="font-semibold">{sale.price}</div>
              <div className="text-muted-foreground">{sale.time}</div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const AutomationCard = () => (
  <Card className="border-none shadow-none bg-gradient-to-r from-brand-blue/5 to-brand-teal/5 hover:from-brand-blue/10 hover:to-brand-teal/10 transition-all duration-300">
    <CardContent className="p-3">
      <div className="flex justify-between items-center">
        <span className="flex items-center text-sm font-medium">
          <Clock className="w-4 h-4 mr-1.5 text-brand-blue" />
          Automation Active
        </span>
        <Badge variant="outline" className="bg-brand-teal/10 text-brand-teal border-brand-teal/30">
          Time Saved: 4.2hrs
        </Badge>
      </div>
      <div className="mt-2 text-xs text-muted-foreground">
        3 cross-platform listings automated today
      </div>
    </CardContent>
  </Card>
);
