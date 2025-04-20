
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
      {/* Hero section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
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
        
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"></div>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl border">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2070" 
              alt="Person using ResellSync dashboard" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
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
                <div className="h-24 flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-muted/50 transition-all hover:bg-muted cursor-pointer">
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
