import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, BarChart, Users, Database, Calendar, Package, ShoppingCart } from 'lucide-react';
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
  { name: 'Mon', Listings: 30, Sales: 10 },
  { name: 'Tue', Listings: 45, Sales: 16 },
  { name: 'Wed', Listings: 38, Sales: 13 },
  { name: 'Thu', Listings: 52, Sales: 21 },
  { name: 'Fri', Listings: 61, Sales: 28 },
  { name: 'Sat', Listings: 48, Sales: 22 },
  { name: 'Sun', Listings: 36, Sales: 15 },
];

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div className="container-section pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-brand-blue/5 text-brand-blue">
            <span className="flex h-2 w-2 rounded-full bg-brand-blue mr-2"></span>
            The #1 platform for phone resellers
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Take Your Phone Business to the Next Level
            </h1>

            <p className="text-lg text-muted-foreground">
              Track IMEIs, bulk import devices, sync listings and orders with marketplaces,
              and automate your entire workflow — so you can grow faster.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-lg bg-brand-blue hover:bg-brand-blue/90">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-3 w-3 text-green-600" />
                </div>
                <span className="text-sm text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
            alt="Person using laptop"
            className="absolute -left-12 top-1/2 -translate-y-1/2 w-[280px] h-[420px] object-cover rounded-2xl hidden lg:block shadow-2xl"
          />
          
          <div className="bg-white rounded-2xl shadow-xl border ml-auto max-w-[420px]">
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <span className="font-medium text-[18px] flex items-center gap-2">
                <BarChart className="w-5 h-5 text-brand-blue" />
                Dashboard
              </span>
              <Calendar className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-gray-50/50">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground font-medium">Active Listings</span>
                <span className="font-semibold text-lg">247</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground font-medium">Phones in Stock</span>
                <span className="font-semibold text-lg">182</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground font-medium">Revenue</span>
                <span className="font-semibold text-lg">$7,850</span>
              </div>
            </div>

            <div className="px-6 py-4 space-y-4">
              <div className="flex gap-3 items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Package className="w-10 h-10 text-brand-blue p-2 bg-brand-blue/5 rounded-lg"/>
                <div>
                  <div className="text-sm font-medium">Inventory Management</div>
                  <div className="text-xs text-muted-foreground">Track phone stock, conditions, and values</div>
                </div>
              </div>

              <div className="flex gap-3 items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <ShoppingCart className="w-10 h-10 text-brand-teal p-2 bg-brand-teal/5 rounded-lg"/>
                <div>
                  <div className="text-sm font-medium">Sale Orders Overview</div>
                  <div className="text-xs text-muted-foreground">View and manage recent orders efficiently</div>
                </div>
              </div>

              <div className="bg-gray-50/70 rounded-xl p-4">
                <span className="block text-sm text-muted-foreground mb-3">Weekly Listings & Sales</span>
                <div className="h-32 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart data={analyticsData} barSize={16}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ececec" vertical={false} />
                      <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{
                          background: "#fff",
                          border: "1px solid #e5e7eb",
                          borderRadius: 8,
                          fontSize: 12,
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
                        }}
                      />
                      <Bar dataKey="Listings" fill="#35b7e7" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Sales" fill="#47f4b1" radius={[4, 4, 0, 0]} />
                    </ReBarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-xl md:text-2xl text-center mb-8 text-muted-foreground">
          Trusted by Industry Leaders
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {marketplaces.map((marketplace, index) => (
              <CarouselItem key={index} className={isMobile ? "basis-1/2" : "basis-1/5"}>
                <div className="h-24 flex items-center justify-start gap-3 p-6 rounded-xl bg-muted/50 transition-all hover:bg-muted cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue to-brand-teal text-white font-bold text-sm flex items-center justify-center">
                    {marketplace.logo}
                  </div>
                  <span className="text-muted-foreground font-medium">
                    {marketplace.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {!isMobile && (
            <>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </>
          )}
        </Carousel>
      </div>

      <SectionFeatures />
    </div>
  );
};

export default Hero;
