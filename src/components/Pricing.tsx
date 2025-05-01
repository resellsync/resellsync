
import React from 'react';
import { PricingSectionDemo } from '@/components/ui/pricing-section-demo';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <div id="pricing" className="container-section relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <PricingSectionDemo />
      </motion.div>
    </div>
  );
};

export default Pricing;
