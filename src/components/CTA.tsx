import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className="bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-spacing"
      >
        <div className="text-center max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10 border border-gray-100">
          <h2 className="text-4xl font-bold mb-6 text-[#0A090C] text-center">Ready to Transform Your Phone Reselling Business?</h2>
          <p className="text-lg opacity-80 mb-8 text-[#0A090C]">
            Join thousands of resellers who are saving time, reducing errors, and growing their business with ResellSync.
          </p>
          <div className="flex justify-center mb-8">
            <Button size="lg" className="group bg-[#0A090C] text-white border-0" asChild>
              <a href="https://tally.so/r/wggEKJ" target="_blank" rel="noopener noreferrer">
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          <p className="text-sm opacity-70 text-[#0A090C]">
            Be among the first to experience the future of phone reselling
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
