import React from 'react';
import { Package, BarChart, RefreshCw } from 'lucide-react';
import { AnimatedBeamDemo } from "./ui/animated-beam-demo";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from './ui/ScrollReveal';

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
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
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
    </section>
  );
};

export default Features;
