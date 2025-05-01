
import * as React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export type PricingTier = {
  id: string;
  name: string;
  price: Record<string, string | number>;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  highlighted?: boolean;
};

interface PricingCardProps {
  tier: PricingTier;
  paymentFrequency: string;
  large?: boolean;
}

export function PricingCard({ tier, paymentFrequency, large }: PricingCardProps) {
  const isPopular = tier.popular || tier.highlighted;
  
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative flex flex-col rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-md transition-all duration-300
        ${isPopular ? "border-[#009A53] shadow-xl border-2" : "border border-[#CACFD6]"}
        ${large ? "p-10 scale-105 z-10" : "p-8"}
      `}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#009A53] to-[#00B65E] text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-md">
          Most Popular
        </div>
      )}
      <h3 className={`text-2xl font-bold mb-2 text-[#0A090C] ${large ? "text-3xl" : ""}`}>{tier.name}</h3>
      <div className="flex items-end mb-5">
        <span className={`text-4xl font-bold bg-gradient-to-r from-[#0A090C] to-[#333] bg-clip-text text-transparent ${large ? "text-5xl" : ""}`}>
          {tier.price[paymentFrequency]}
        </span>
        {tier.price[paymentFrequency] !== "Custom" && tier.price[paymentFrequency] !== "Free" && (
          <span className="text-[#0A090C] opacity-60 ml-1 mb-1">/mo</span>
        )}
      </div>
      <p className={`text-[#0A090C] opacity-70 mb-6 ${large ? "text-lg" : ""}`}>{tier.description}</p>
      <ul className={`space-y-4 mb-8 ${large ? "text-base" : ""}`}>
        {tier.features.map((feature, idx) => (
          <motion.li 
            key={idx} 
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.3 }}
          >
            <Check className={`h-5 w-5 text-[#009A53] shrink-0 mr-3 mt-0.5 ${large ? "h-6 w-6" : ""}`} />
            <span className="text-[#0A090C] opacity-80">{feature}</span>
          </motion.li>
        ))}
      </ul>
      <button
        className={`w-full rounded-lg py-3 px-5 font-semibold transition-all duration-300 text-base mt-auto relative overflow-hidden
          ${isPopular 
            ? "bg-[#0A090C] text-white hover:bg-[#1a1a1a] shadow-lg hover:shadow-xl" 
            : "border-2 border-[#009A53] text-[#009A53] bg-white hover:bg-[#F0FDF4]"}
          ${large ? "py-4 text-lg" : ""}
        `}
      >
        <span className="relative z-10">{tier.cta}</span>
        {isPopular && (
          <span className="absolute inset-0 bg-gradient-to-r from-[#0A090C] to-[#333] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        )}
      </button>
    </motion.div>
  );
}
