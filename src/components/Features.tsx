
import React from 'react';
import { Package, BarChart, RefreshCw, ArrowRight, Zap, Shield, Globe, Layers } from 'lucide-react';
import { AnimatedBeamDemo } from "./ui/animated-beam-demo";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from './ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from './ui/card';

const features = [
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: "Inventory Management",
    description: "Track phone inventory, conditions, and pricing all in one place with detailed reporting and analytics.",
    gradient: "from-primary/20 to-primary/0"
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
    title: "Multi-Channel Sync",
    description: "Automatically sync listings across eBay, Backmarket, Reebelo and more with real-time inventory updates.",
    gradient: "from-primary/20 to-primary/0"
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Sales Analytics",
    description: "Gain insights into your best-performing products, profit margins, and market trends to make data-driven decisions.",
    gradient: "from-primary/20 to-primary/0"
  }
];

const benefits = [
  {
    icon: <Zap className="h-7 w-7" />,
    title: "Boost Efficiency",
    description: "Save 15+ hours weekly with automated inventory sync and bulk listing tools that handle the tedious work for you.",
    color: "bg-gradient-to-br from-amber-400 to-orange-500"
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Prevent Overselling",
    description: "Our real-time marketplace sync ensures you never sell the same phone twice across different platforms.",
    color: "bg-gradient-to-br from-blue-400 to-blue-600"
  },
  {
    icon: <Globe className="h-7 w-7" />,
    title: "Expand Reach",
    description: "Easily list your inventory on multiple marketplaces to maximize your audience and sales potential.",
    color: "bg-gradient-to-br from-emerald-400 to-teal-500"
  },
  {
    icon: <Layers className="h-7 w-7" />,
    title: "Scale Seamlessly", 
    description: "Our platform grows with your business, handling 10 to 10,000 devices with the same reliable performance.",
    color: "bg-gradient-to-br from-purple-400 to-indigo-500"
  }
];

const Features = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-muted/20" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.025] pointer-events-none" />
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0) 50%)",
          y,
        }}
      />

      <div className="container relative mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-bold mb-6 text-foreground relative">
              <span className="relative z-10">Powerful Features</span>
              <br />
              <span className="relative z-10">for Phone Resellers</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 blur-2xl -z-0" />
            </h2>
          </motion.div>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Everything you need to manage your inventory, streamline listings, and grow your business.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-12"
          >
            {features.map((feature, index) => (
              <ScrollReveal key={index}>
                <div className="group relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                       style={{
                         background: `radial-gradient(circle at 50% 50%, var(--${feature.gradient}) 0%, transparent 70%)`
                       }}
                  />
                  <div className="flex items-start space-x-6 p-6 rounded-xl transition-colors duration-300">
                    <motion.div 
                      className="flex-shrink-0 p-3 rounded-full bg-white/10 shadow-sm backdrop-blur-sm border-2 border-white/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ opacity }}
            className="relative min-h-[500px] flex items-center justify-center"
          >
            <AnimatedBeamDemo />
          </motion.div>
        </div>
      </div>
      
      {/* New Benefits Section */}
      <div className="container relative mx-auto px-4 mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 text-brand-blue mb-4">
            Why Choose ResellSync
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">
            Transform Your Phone Reselling Business
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            See how ResellSync gives you the competitive edge with tools designed specifically for phone resellers
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index}>
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-full">
                  {/* Card glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 ${benefit.color} opacity-10 blur-2xl`}></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/5 to-primary/0 blur-2xl"></div>
                  <div className="absolute -left-10 -bottom-10 w-28 h-28 rounded-full bg-gradient-to-tl from-primary/5 to-primary/0 blur-3xl"></div>
                  
                  <CardContent className="p-6 flex flex-col h-full z-10 relative">
                    <div className={`${benefit.color} text-white w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground flex-grow">{benefit.description}</p>
                  </CardContent>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-blue/90 hover:to-brand-teal/90 text-white group shadow-lg transition-all duration-300 rounded-full px-8">
            Start Growing Your Business
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
      
      <div className="relative mt-24 rounded-2xl bg-gradient-to-br from-brand-blue/10 via-brand-teal/10 to-brand-green/5 p-8">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl" />
        <div className="relative flex flex-col items-center gap-4">
          <div className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
            Ready to streamline and scale your phone reselling business?
          </div>
          <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all duration-300" aria-label="Book Free Demo">
            Book Free Demo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
