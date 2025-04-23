import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, BarChart, Users, Database, Calendar, Package, ShoppingCart, ZoomIn, Bell, Percent, TrendingUp, ScanLine, Zap, Clock } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import { BarChart as ReBarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SectionFeatures from "./SectionFeatures";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const trustPoints = [
  "No credit card required",
  "14-day free trial", 
  "Minimal learning curve"
];

const marketplaces = [
  { name: "eBay", logo: "EB" },
  { name: "Backmarket", logo: "BM" },
  { name: "Reebelo", logo: "RB" },
  { name: "Swappa", logo: "SW" },
  { name: "Mercari", logo: "MC" }
];

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

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="container-section min-h-[calc(100vh-5rem)] flex items-center pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center rounded-full px-4 py-1 text-sm bg-muted text-muted-foreground">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              The #1 platform for phone resellers
            </div>

            <h1 className="gradient-heading">
              Take Your Phone Business to the Next Level
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Track IMEIs, bulk import devices, sync listings and orders with marketplaces,
              and automate your entire workflow — so you can grow faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg" className="group">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 mt-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"></div>
            
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
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Package className="w-3 h-3 mr-1" /> Active Listings
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="font-semibold text-lg">247</span>
                    <span className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3" />+12%
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground flex items-center">
                    <ShoppingCart className="w-3 h-3 mr-1" /> Inventory
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="font-semibold text-lg">182</span>
                    <span className="text-xs text-amber-500">-3%</span>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Database className="w-3 h-3 mr-1" /> Revenue
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="font-semibold text-lg">$7,850</span>
                    <span className="text-xs text-green-600">+18%</span>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Percent className="w-3 h-3 mr-1" /> Profit Margin
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="font-semibold text-lg">32%</span>
                    <span className="text-xs text-green-600">+5%</span>
                  </div>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F1F0FB] py-8 md:py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center mb-6 text-foreground font-semibold">
            Resellsync Integrates With Trusted Marketplaces
          </h2>
          
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F1F0FB] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F1F0FB] to-transparent z-10"></div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: false,
              skipSnaps: true,
              inViewThreshold: 0.7,
            }}
            className="w-[calc(100vw-2rem)] -mx-4 md:-mx-8 lg:-mx-16 relative group"
          >
            <CarouselContent className="py-4 animate-[slide_40s_linear_infinite] group-hover:pause-animation">
              {[...marketplaces, ...marketplaces].map((marketplace, index) => (
                <CarouselItem key={index} className={isMobile ? "basis-1/2" : "basis-1/5"}>
                  <div className="h-20 flex items-center justify-start gap-3 p-4 rounded-xl bg-white/80 border border-border/50 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-border group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-teal text-white font-bold text-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                      {marketplace.logo}
                    </div>
                    <span className="text-muted-foreground font-medium text-sm">
                      {marketplace.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <SectionFeatures />
    </>
  );
};

export default Hero;
