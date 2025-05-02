
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className="bg-gradient-to-b from-[#F9F9F9] to-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-spacing"
      >
        <div className="text-center max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg p-10 border border-gray-100 hover:shadow-xl transition-all duration-500">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00995315] rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00995315] rounded-full blur-3xl -z-10"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#0A090C] to-[#333] bg-clip-text text-transparent"
          >
            Ready to Transform Your Phone Reselling Business?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg opacity-80 mb-8 text-[#0A090C]"
          >
            Join thousands of resellers who are saving time, reducing errors, and growing their business with ResellSync.
          </motion.p>
          
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button size="lg" className="group bg-[#009A53] hover:bg-[#008548] shadow-md hover:shadow-lg transition-all duration-300" asChild>
              <a href="https://tally.so/r/wggEKJ" target="_blank" rel="noopener noreferrer">
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-sm opacity-70 text-[#0A090C]"
          >
            Be among the first to experience the future of phone reselling
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
