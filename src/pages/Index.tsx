
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Marketplaces from '@/components/Marketplaces';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  return (
    <ScrollArea className="min-h-screen w-full">
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-1">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 pointer-events-none" />
            <Hero />
          </div>
          <div className="space-y-24 overflow-hidden">
            <Features />
            <Marketplaces />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CTA />
          </div>
        </main>
        <Footer />
      </div>
    </ScrollArea>
  );
};

export default Index;
