import React from 'react';
import { Rocket, ShieldCheck, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { ScrollReveal } from './ui/ScrollReveal';

const benefits = [
  {
    icon: <Rocket className="h-6 w-6 text-[#7C3AED]" />,
    title: "Accelerate Your Growth",
    description: "Save 15+ hours weekly with automated inventory management and seamless marketplace integration that lets you focus on scaling your business.",
    delay: 0.1,
    bgColor: "bg-[#F3F0FF]"
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#0EA5E9]" />,
    title: "Eliminate Inventory Errors",
    description: "Our real-time sync technology ensures you never double-sell the same device and automatically updates stock levels across all marketplaces.",
    delay: 0.2,
    bgColor: "bg-[#E0F2FE]"
  },
  {
    icon: <Globe className="h-6 w-6 text-[#10B981]" />,
    title: "Expand Market Reach",
    description: "List once and sell everywhere. Reach millions of customers across eBay, Backmarket, Reebelo, and more with our multi-channel integration.",
    delay: 0.3,
    bgColor: "bg-[#DCFCE7]"
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-[#F59E0B]" />,
    title: "Data-Powered Decisions",
    description: "Make smarter business moves with real-time analytics on your best-selling models, profit margins, and market trends all in one dashboard.",
    delay: 0.4,
    bgColor: "bg-[#FEF3C7]"
  }
];

const Features = () => {
  return (
    <section id="benefits" className="relative section-spacing-lg overflow-hidden bg-[#F9F9F9]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#CACFD6] opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#CACFD6] opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-purple-300/10 blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-blue-300/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#D6F5E6] text-[#009A53] mb-6">
            Why ResellSync Is Different
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A090C]">
            Transform Your Phone Reselling Business
          </h2>
          <p className="max-w-2xl mx-auto text-[#0A090C] opacity-80 text-lg">
            ResellSync gives you the tools to work smarter, sell faster, and grow bigger without the usual headaches of multi-channel selling.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: benefit.delay }}
              >
                <div className="h-full group rounded-2xl bg-white border border-[#CACFD6] shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative p-6 flex flex-col h-full">
                    {/* Card decorative elements - removed opacity from bottom left */}
                    <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 blur-md" />
                    
                    <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${benefit.bgColor}`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#0A090C]">
                      {benefit.title}
                    </h3>
                    <p className="text-[#0A090C] opacity-70 flex-grow">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Button variant="default" size="lg" className="bg-[#0A090C] text-white hover:bg-[#222] group shadow-lg transition-all duration-300 rounded-xl px-8 border-0">
            Start Selling Smarter
            <ArrowRight className="ml-2 h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
