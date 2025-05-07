
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  "Save time with automated inventory management",
  "Eliminate double-listing errors across marketplaces",
  "Track performance with intuitive analytics",
  "Streamline your entire phone reselling workflow"
];

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-white">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="section-spacing"
      >
        <div className="text-center max-w-3xl mx-auto rounded-3xl overflow-hidden relative">
          {/* Gradient background with animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] via-white to-[#f1f3f5] z-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
          
          {/* Border gradient */}
          <div className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-r from-brand-blue/30 via-brand-teal/30 to-brand-green/30 z-0" />
          
          {/* Content */}
          <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100 relative z-10">
            <motion.h2 
              className="text-4xl font-bold mb-6 text-[#0A090C] text-center bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green text-transparent bg-clip-text"
              variants={itemVariants}
            >
              Ready to Transform Your Phone Reselling Business?
            </motion.h2>
            
            <motion.p 
              className="text-lg opacity-80 mb-8 text-[#0A090C]"
              variants={itemVariants}
            >
              Join thousands of resellers who are saving time, reducing errors, and growing their business with ResellSync.
            </motion.p>

            {/* Benefits list */}
            <motion.ul className="flex flex-col gap-2 max-w-md mx-auto mb-8">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-2 text-left text-[#0A090C] opacity-80"
                  variants={itemVariants}
                  custom={index}
                >
                  <CheckCircle className="h-5 w-5 text-brand-teal flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              className="flex justify-center mb-8"
              variants={itemVariants}
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-[#0A090C] text-white border-0 px-8 py-6" 
                asChild
              >
                <a href="https://tally.so/r/wggEKJ" target="_blank" rel="noopener noreferrer">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <span className="relative z-10">
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-4 w-4 inline transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </Button>
            </motion.div>
            
            <motion.p 
              className="text-sm opacity-70 text-[#0A090C]"
              variants={itemVariants}
            >
              Be among the first to experience the future of phone reselling
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
