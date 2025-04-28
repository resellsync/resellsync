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
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ScrollReveal><Hero /></ScrollReveal>
        <ScrollReveal><Features /></ScrollReveal>
        <ScrollReveal><Marketplaces /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><Pricing /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        <ScrollReveal><CTA /></ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
