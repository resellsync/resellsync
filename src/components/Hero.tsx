
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { TrustPoints } from './hero/TrustPoints';
import { MarketplaceCarousel } from './hero/MarketplaceCarousel';
import { DashboardPreviewCard } from './hero/DashboardPreviewCard';
import SectionFeatures from "./SectionFeatures";

const Hero = () => {
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

            <TrustPoints />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"></div>
            <DashboardPreviewCard />
          </div>
        </div>
      </div>

      <MarketplaceCarousel />
      <SectionFeatures />
    </>
  );
};

export default Hero;
