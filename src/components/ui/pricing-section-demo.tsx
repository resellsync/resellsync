"use client"

import * as React from "react"
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
    <section className="flex flex-col items-center gap-12 py-12">
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-medium md:text-5xl">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        <div className="mx-auto flex w-fit rounded-full bg-muted p-1">
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
      </div>

      <div className="grid w-full max-w-6xl gap-12 sm:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier, idx) => (
          <PricingCard
            key={tier.name}
            tier={tier}
            paymentFrequency={selectedFrequency}
            large={tier.id === 'custom'}
          />
        ))}
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
    cta: "Get started",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: {
      monthly: 179,
      yearly: 159,
    },
    description: "For growing businesses",
    features: [
      "5 marketplaces",
      "350 orders per month",
      "2 user accounts",
      "All core features"
    ],
    cta: "Get started",
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
    cta: "Get started",
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
    cta: "Contact Us",
    highlighted: true,
  },
];

export function PricingSectionDemo() {
  return (
    <div className="flex justify-center items-center w-full mt-0">
      <PricingSection
        title="Simple Pricing"
        subtitle="Choose the best plan for your needs"
        frequencies={PAYMENT_FREQUENCIES}
        tiers={TIERS}
      />
    </div>
  );
} 