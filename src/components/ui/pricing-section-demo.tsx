"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
import { Tab } from "@/components/ui/pricing-tab"

interface PricingSectionProps {
  title: string
  subtitle: string
  tiers: PricingTier[]
  frequencies: string[]
}

export function PricingSection({
  title,
  subtitle,
  tiers,
  frequencies,
}: PricingSectionProps) {
  const [selectedFrequency, setSelectedFrequency] = React.useState(frequencies[0])

  return (
    <section className="flex flex-col items-center gap-16 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-[#00995330] blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 rounded-full bg-[#00995315] blur-3xl -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-8 text-center max-w-3xl"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold md:text-5xl bg-gradient-to-r from-[#0A090C] to-[#333] bg-clip-text text-transparent">{title}</h1>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>
        <div className="mx-auto flex w-fit rounded-full bg-[#F0F0F0] p-1.5 shadow-inner">
          {frequencies.map((freq) => (
            <Tab
              key={freq}
              text={freq}
              selected={selectedFrequency === freq}
              setSelected={setSelectedFrequency}
              discount={freq === "yearly"}
            />
          ))}
        </div>
      </motion.div>

      <div className="grid w-full max-w-6xl gap-8 sm:grid-cols-2 xl:grid-cols-4 px-6">
        {tiers.map((tier, idx) => {
          const isCustom = tier.id === 'custom';
          const cardTier = isCustom ? { ...tier, popular: false, highlighted: false } : tier;
          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <PricingCard
                tier={cardTier}
                paymentFrequency={selectedFrequency}
                large={tier.id === 'growth' ? true : false}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  )
}

export const PAYMENT_FREQUENCIES = ["monthly", "yearly"];

export const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: {
      monthly: 99,
      yearly: 89,
    },
    description: "For new or small resellers",
    features: [
      "2 marketplaces",
      "100 orders per month",
      "1 user account",
      "All core features"
    ],
    cta: "Join the Waitlist",
    ctaLink: "https://tally.so/r/wggEKJ",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: {
      monthly: 189,
      yearly: 159,
    },
    description: "For growing businesses",
    features: [
      "5 marketplaces",
      "350 orders per month",
      "2 user accounts",
      "All core features"
    ],
    cta: "Join the Waitlist",
    ctaLink: "https://tally.so/r/wggEKJ",
    popular: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: {
      monthly: 349,
      yearly: 319,
    },
    description: "For high-volume sellers",
    features: [
      "All marketplaces",
      "1000 orders per month",
      "5 user accounts",
      "All core features"
    ],
    cta: "Join the Waitlist",
    ctaLink: "https://tally.so/r/wggEKJ",
    popular: false,
  },
  {
    id: "custom",
    name: "Custom",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "For enterprises with custom needs",
    features: [
      "Unlimited marketplaces",
      "Unlimited orders",
      "Unlimited users",
      "Custom integrations & support"
    ],
    cta: "Join the Waitlist",
    ctaLink: "https://tally.so/r/wggEKJ"
  },
];

export function PricingSectionDemo() {
  return (
    <div className="flex justify-center items-center w-full mt-0 bg-gradient-to-b from-white to-[#F9F9F9]">
      <PricingSection
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that's right for your growing business"
        frequencies={PAYMENT_FREQUENCIES}
        tiers={TIERS}
      />
    </div>
  );
}
