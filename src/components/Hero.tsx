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
      <div id="hero" className="container-section min-h-[calc(100vh-5rem)] flex items-center pb-8 bg-[#F9F9F9]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12">
          <div className="flex flex-col gap-6">
            {/* Gold badge at the top of the hero section */}
            <span className="inline-flex items-center gap-2 w-auto max-w-fit rounded-full px-2.5 py-1 text-xs font-medium bg-gradient-to-r from-[#FFF3D1] to-[#F5C16C] text-[#111] shadow-md transition-all duration-500 animate-hero-badge-fade-in mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]"></span>
              The #1 platform for phone resellers
            </span>

            <h1 className="font-bold text-5xl md:text-6xl text-[#0A090C] font-sans">
              Take Your Phone Business to the Next Level
            </h1>

            <p className="text-lg text-[#0A090C] opacity-80 max-w-lg">
              Track IMEIs, bulk import devices, sync listings and orders with marketplaces,
              and automate your entire workflow — so you can grow faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <a href="https://tally.so/r/wggEKJ?redirect=http://localhost:8080/thank-you" target="_blank" rel="noopener noreferrer">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            <TrustPoints />
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#CACFD61A] rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#CACFD61A] rounded-full blur-3xl"></div>
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
