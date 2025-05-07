
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MousePointer } from 'lucide-react';
import { TrustPoints } from './hero/TrustPoints';
import { MarketplaceCarousel } from './hero/MarketplaceCarousel';
import { DashboardPreviewCard } from './hero/DashboardPreviewCard';
import SectionFeatures from "./SectionFeatures";
import { motion, useAnimation } from "framer-motion";
import { ParallaxSection } from './ui/ParallaxSection';

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const heroVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
  
  const scrollIndicatorVariants = {
    initial: { y: 0, opacity: 0.6 },
    animate: { 
      y: [0, 10, 0], 
      opacity: [0.6, 1, 0.6],
      transition: { 
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <>
      <div id="hero" className="container-section min-h-[calc(100vh-5rem)] flex items-center pb-8 bg-[#F9F9F9] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-brand-blue/5 via-brand-teal/5 to-brand-green/5 blur-[80px]" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-brand-green/5 via-brand-teal/5 to-brand-blue/5 blur-[80px]" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 relative">
          <motion.div 
            className="flex flex-col gap-6"
            initial="hidden"
            animate={controls}
            variants={heroVariants}
          >
            {/* Gold badge at the top of the hero section */}
            <motion.span 
              className="inline-flex items-center gap-2 w-auto max-w-fit rounded-full px-2.5 py-1 text-xs font-medium bg-gradient-to-r from-[#FFF3D1] to-[#F5C16C] text-[#111] shadow-md mb-2"
              variants={itemVariants}
              custom={1}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]"></span>
              The #1 platform for phone resellers
            </motion.span>

            <motion.h1 
              className="font-bold text-5xl md:text-6xl text-[#0A090C] font-sans"
              variants={itemVariants}
              custom={2}
            >
              Take Your Phone Business to the Next Level
            </motion.h1>

            <motion.p 
              className="text-lg text-[#0A090C] opacity-80 max-w-lg"
              variants={itemVariants}
              custom={3}
            >
              Track IMEIs, bulk import devices, sync listings and orders with marketplaces,
              and automate your entire workflow — so you can grow faster.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
              custom={4}
            >
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-[2px]"
                asChild
              >
                <a href="https://tally.so/r/wggEKJ?redirect=http://localhost:8080/thank-you" target="_blank" rel="noopener noreferrer">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} custom={5}>
              <TrustPoints />
            </motion.div>
          </motion.div>
          
          <div className="relative flex justify-center items-center">
            <motion.div 
              className="absolute -top-10 -left-10 w-40 h-40 bg-[#CACFD61A] rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#CACFD61A] rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            />
            <ParallaxSection baseVelocity={0.1}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <DashboardPreviewCard />
              </motion.div>
            </ParallaxSection>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          variants={scrollIndicatorVariants}
          initial="initial"
          animate="animate"
          onClick={() => {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs font-medium text-[#0A090C] opacity-60">Scroll to explore</span>
          <MousePointer className="h-5 w-5 text-[#0A090C] opacity-60" />
        </motion.div>
      </div>

      <MarketplaceCarousel />
      <SectionFeatures />
    </>
  );
};

export default Hero;
