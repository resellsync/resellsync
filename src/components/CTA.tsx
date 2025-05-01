
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
        <div className="text-center max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg p-10 border border-gray-100">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00995315] rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00995315] rounded-full blur-3xl -z-10"></div>
          
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#0A090C] to-[#333] bg-clip-text text-transparent">Ready to Transform Your Phone Reselling Business?</h2>
          <p className="text-lg opacity-80 mb-8 text-[#0A090C]">
            Join thousands of resellers who are saving time, reducing errors, and growing their business with ResellSync.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="group bg-gradient-to-r from-[#0A090C] to-[#333] text-white border-0 hover:from-[#222] hover:to-[#444] shadow-lg hover:shadow-xl transition-all">
              <span>Start Your Free Trial</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#009A53] text-[#009A53] bg-white hover:bg-[#F0FDF4] shadow-md hover:shadow-lg transition-all">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm opacity-70 text-[#0A090C]">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
