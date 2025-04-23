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
    <>
      <div className="container-section pb-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
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

            {/* Trust Bar */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 mt-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Modern Dashboard Preview Mobile Friendly */}
          <div className="relative flex justify-center items-center">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"></div>
            <div className="relative w-full max-w-[370px] rounded-2xl overflow-hidden shadow-2xl border bg-white">
              {/* Dashboard Header */}
              <div className="px-6 py-4 border-b flex items-center justify-between">
                <span className="font-semibold text-[18px] flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-brand-blue" />
                  Dashboard
                </span>
                <Calendar className="w-5 h-5 text-muted-foreground" />
              </div>
              {/* Stats Row */}
              <div className="flex flex-wrap justify-between gap-3 px-6 py-4 bg-muted/40">
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground">Active Listings</span>
                  <span className="font-semibold text-lg">247</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground">Phones in Stock</span>
                  <span className="font-semibold text-lg">182</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground">Revenue</span>
                  <span className="font-semibold text-lg">$7,850</span>
                </div>
              </div>
              {/* Features & Analytics Section */}
              <div className="px-3 py-4 space-y-4">
                {/* Inventory Management Feature */}
                <div className="flex gap-2 items-center">
                  <Package className="w-6 h-6 text-brand-blue"/>
                  <div>
                    <div className="text-sm font-medium">Inventory Management</div>
                    <div className="text-xs text-muted-foreground">Track phone stock, conditions, and values</div>
                  </div>
                </div>
                {/* Sale Orders Overview Feature */}
                <div className="flex gap-2 items-center">
                  <ShoppingCart className="w-6 h-6 text-brand-teal"/>
                  <div>
                    <div className="text-sm font-medium">Sale Orders Overview</div>
                    <div className="text-xs text-muted-foreground">View and manage recent orders efficiently</div>
                  </div>
                </div>
                {/* Analytics Chart */}
                <div className="rounded-xl bg-muted/70 p-2">
                  <span className="block font-medium mb-2 text-sm text-muted-foreground">Weekly Listings & Sales</span>
                  <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <ReBarChart data={analyticsData} barSize={18}>
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
      </div>

      {/* Updated Trusted by Industry Leaders section */}
      <div className="w-full bg-gradient-to-r from-[#E5DEFF] via-white to-[#D3E4FD] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center mb-8 text-foreground font-semibold">
            Resellsync Integrates With Trusted Marketplaces
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="py-4">
              {marketplaces.map((marketplace, index) => (
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

            {!isMobile && (
              <>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </>
            )}
          </Carousel>
        </div>
      </div>

      {/* NEW SECTION 2 – Features/What You Can Do With Resellsync */}
      <SectionFeatures />
    </>
  );
};

export default Hero;
