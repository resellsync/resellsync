import * as React from "react";
import { Check } from "lucide-react";

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
    <div
      className={`relative flex flex-col rounded-2xl border bg-white shadow-md transition-all duration-300
        ${isPopular ? "border-[#009A53] shadow-xl" : "border-[#CACFD6]"}
        ${large ? "p-10 scale-105 z-10 border-2" : "p-8"}
      `}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#009A53] text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <h3 className={`text-2xl font-bold mb-2 text-[#0A090C] ${large ? "text-3xl" : ""}`}>{tier.name}</h3>
      <div className="flex items-end mb-4">
        <span className={`text-4xl font-bold text-[#0A090C] ${large ? "text-5xl" : ""}`}>
          {tier.price[paymentFrequency]}
        </span>
        {tier.price[paymentFrequency] !== "Custom" && tier.price[paymentFrequency] !== "Free" && (
          <span className="text-[#0A090C] opacity-60 ml-1">/mo</span>
        )}
      </div>
      <p className={`text-[#0A090C] opacity-70 mb-6 ${large ? "text-lg" : ""}`}>{tier.description}</p>
      <ul className={`space-y-3 mb-8 ${large ? "text-base" : ""}`}>
        {tier.features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <Check className={`h-5 w-5 text-[#009A53] shrink-0 mr-2 ${large ? "h-6 w-6" : ""}`} />
            <span className="text-[#0A090C] opacity-80">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full rounded-lg py-2 px-4 font-semibold transition-colors duration-200 text-base mt-auto
          ${isPopular
            ? "bg-[#0A090C] text-white border-0 hover:bg-[#222]"
            : "border border-[#009A53] text-[#009A53] bg-white hover:bg-[#D6F5E6]"}
          ${large ? "py-3 text-lg" : ""}
        `}
      >
        {tier.cta}
      </button>
    </div>
  );
} 