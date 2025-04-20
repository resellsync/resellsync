
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

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

const Hero = () => {
  const isMobile = useIsMobile();

  return (
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

        {/* Right Content - Animated Dashboard */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"></div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl border bg-white">
            {/* Main Dashboard View */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
              <div className="grid grid-cols-3 gap-4 p-6">
                {/* Stats Cards */}
                <div className="col-span-3 grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">Active Listings</div>
                    <div className="text-2xl font-semibold">247</div>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">Phones in Stock</div>
                    <div className="text-2xl font-semibold">182</div>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">This Month</div>
                    <div className="text-2xl font-semibold">$24.5k</div>
                  </div>
                </div>

                {/* IMEI List */}
                <div className="col-span-2 bg-muted/30 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Recent IMEIs</h3>
                    <Button variant="outline" size="sm">Add New</Button>
                  </div>
                  <div className="space-y-2">
                    {[
                      "354651234567890",
                      "354651234567891",
                      "354651234567892"
                    ].map((imei, i) => (
                      <div key={i} className="flex justify-between items-center p-2 bg-background rounded">
                        <span className="font-mono text-sm">{imei}</span>
                        <span className="text-sm text-green-500">Listed</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Bulk Import
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Sync Orders
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      New Listing
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by Industry Leaders section */}
      <div className="mt-16 md:mt-24">
        <h2 className="text-xl md:text-2xl text-center mb-8 text-muted-foreground font-medium">
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
    </div>
  );
};

export default Hero;
