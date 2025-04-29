
import React from 'react';
import { Rocket, ShieldCheck, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { ScrollReveal } from './ui/ScrollReveal';

const benefits = [
  {
    icon: <Rocket className="h-6 w-6 text-white" />,
    title: "Accelerate Your Growth",
    description: "Save 15+ hours weekly with automated inventory management and seamless marketplace integration that lets you focus on scaling your business.",
    gradient: "from-indigo-500 to-purple-600",
    delay: 0.1
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    title: "Eliminate Inventory Errors",
    description: "Our real-time sync technology ensures you never double-sell the same device and automatically updates stock levels across all marketplaces.",
    gradient: "from-cyan-500 to-blue-500",
    delay: 0.2
  },
  {
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "Expand Market Reach",
    description: "List once and sell everywhere. Reach millions of customers across eBay, Backmarket, Reebelo, and more with our multi-channel integration.",
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.3
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: "Data-Powered Decisions",
    description: "Make smarter business moves with real-time analytics on your best-selling models, profit margins, and market trends all in one dashboard.",
    gradient: "from-amber-500 to-orange-500",
    delay: 0.4
  }
];

const Features = () => {
  return (
    <section id="benefits" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-blue-50/20 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
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
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 text-brand-blue mb-4">
            Why ResellSync Is Different
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">
            Transform Your Phone Reselling Business
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
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
                <div className="h-full group rounded-2xl bg-white border border-gray-100 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative p-6 flex flex-col h-full">
                    {/* Card decorative elements */}
                    <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 blur-md" />
                    <div className="absolute -left-10 -bottom-10 w-28 h-28 rounded-full bg-gradient-to-tl from-gray-100 to-gray-50 blur-xl" />
                    
                    <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl mb-5 bg-gradient-to-br ${benefit.gradient} shadow-lg`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">
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
          <div className="inline-block rounded-xl p-0.5 bg-gradient-to-r from-brand-blue to-brand-teal">
            <Button variant="default" size="lg" className="bg-white text-gray-900 hover:bg-gray-50 group shadow-lg transition-all duration-300 rounded-xl px-8">
              Start Selling Smarter
              <ArrowRight className="ml-2 h-5 w-5 text-brand-blue group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
