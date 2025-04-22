
import React, { useEffect, useState } from "react";
import { ArrowRight, Check, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Marketplace data
const marketplaces = [
  { name: "eBay", color: "bg-[#0064d2]", logo: "EB" },
  { name: "Backmarket", color: "bg-[#4caf50]", logo: "BM" },
  { name: "Reebelo", color: "bg-[#162336]", logo: "RB" },
];

export default function InventorySyncVisual() {
  // Animates the quantity + syncing indicator
  const [quantity, setQuantity] = useState(12);
  const [syncStep, setSyncStep] = useState(0); // 0: idle, 1: dashboard animates, 2/3/4: arrows animate successively

  useEffect(() => {
    setQuantity(12);
    setSyncStep(0);

    // Animate syncing: after a short delay, +1 quantity, then propagate each arrow/platform.
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setSyncStep(1), 800));      // Start anim (dashboard flash)
    timers.push(setTimeout(() => {
      setQuantity(13); setSyncStep(2);
    }, 1500)); // Dashboard qty change + start sync
    timers.push(setTimeout(() => setSyncStep(3), 2200));     // eBay arrow animate
    timers.push(setTimeout(() => setSyncStep(4), 2700));     // Backmarket arrow animate
    timers.push(setTimeout(() => setSyncStep(5), 3200));     // Reebelo arrow animate
    timers.push(setTimeout(() => setSyncStep(0), 3900));     // reset animation after cycle

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[480px] py-4">
      {/* Headline & Subheadline */}
      <div className="w-full max-w-2xl mx-auto text-center mb-7 px-2">
        <h3 className="text-2xl md:text-3xl font-semibold mb-3 gradient-heading">
          Sync Your Inventory Across Marketplaces
        </h3>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Resellsync keeps your stock levels updated in real time across every connected platform.<br />
          Avoid double-selling, manual edits, and inventory mistakes with one reliable system.
        </p>
      </div>

      {/* Main Content: Dashboard + Arrows + Marketplaces */}
      <div className="
        w-full max-w-2xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12
        ">
        {/* Marketplace cards (right side on desktop, bottom on mobile) */}
        <div className="flex flex-row md:flex-col items-center gap-5 md:gap-7 flex-1 md:justify-center">
          {marketplaces.map((mp, i) => (
            <div
              key={mp.name}
              className="relative flex flex-col items-center w-28"
            >
              {/* Animated Arrow (visible on desktop, shows as pulse on mobile) */}
              <div className="hidden md:block absolute -left-14 top-1/2 -translate-y-1/2">
                {/* animate arrow when that marketplace is syncing */}
                <ArrowRight
                  className={
                    `w-8 h-8 text-brand-blue transition-all duration-500
                    ${syncStep === 2 + i ? "animate-bounce" : ""}
                    ${syncStep > 2 + i ? "opacity-50" : ""}`
                  }
                  aria-hidden="true"
                  style={{ transform: "rotate(0deg)" }}
                />
              </div>
              {/* Marketplace Card */}
              <div className={
                `flex flex-col items-center rounded-2xl shadow-lg border bg-white w-24 h-24 justify-center relative transition-all
                ${syncStep === 2 + i ? "ring-2 ring-brand-blue/60 animate-[pulse_0.7s_linear]" : ""}`
              }>
                <span className={"absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white " +
                  (syncStep > 2 + i ? "bg-green-400 pulse" : "bg-gray-300")}></span>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 text-white font-bold text-lg ${mp.color}`}>
                  {mp.logo}
                </div>
                <div className="text-xs font-bold text-gray-700 mb-0.5">{mp.name}</div>
                {/* Feedback: checkmark appears when synced */}
                {syncStep > 2 + i
                  ? <span className="flex items-center text-green-600 text-xs font-semibold gap-0.5 animate-fade-in">
                      <Check className="w-4 h-4" /> Synced
                    </span>
                  : syncStep === 2 + i
                    ? <span className="flex items-center text-brand-blue text-xs font-semibold gap-0.5 animate-spin">
                        <RefreshCw className="w-3 h-3" /> Updating...
                      </span>
                    : <span className="text-xs text-muted-foreground">Waiting</span>
                }
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Card (left/top on mobile) */}
        <Card className="w-full max-w-[350px] mx-auto z-10 relative">
          <CardHeader className="pb-3 flex flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-brand-blue to-brand-teal text-white font-bold flex items-center justify-center text-xl">
              RS
            </div>
            <CardTitle className="text-base text-brand-blue font-semibold">Resellsync Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border border-gray-100 bg-muted">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="font-medium py-2 px-3 text-left">Device</th>
                    <th className="font-medium py-2 px-3 text-left">Qty</th>
                    <th className="font-medium py-2 px-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-3">iPhone 13</td>
                    <td className="py-2 px-3 font-semibold">
                      <span className={
                        `inline-block px-2 py-1 rounded-md font-mono transition-all duration-500
                        ${syncStep >= 1 && syncStep <= 2 ? "bg-brand-blue/20 text-brand-blue animate-pulse" : "bg-brand-blue/10 text-brand-blue"}`
                      }>
                        {quantity}
                      </span>
                    </td>
                    <td className="py-2 px-3">
                      <span className="inline-flex items-center gap-1 text-green-600 text-xs bg-green-50 rounded px-2 py-0.5">
                        <Check className="w-4 h-4" />
                        Synced
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Galaxy S22</td>
                    <td className="py-2 px-3 font-semibold">
                      <span className="inline-block bg-brand-blue/10 text-brand-blue px-2 py-1 rounded-md">
                        7
                      </span>
                    </td>
                    <td className="py-2 px-3">
                      <span className="inline-flex items-center gap-1 text-green-600 text-xs bg-green-50 rounded px-2 py-0.5">
                        <Check className="w-4 h-4" />
                        Synced
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
          {/* Animated arrow for mobile: points down to marketplaces */}
          <div className="flex md:hidden w-full mt-2 justify-center">
            <ArrowRight className={`w-10 h-10 text-brand-blue transition-all duration-500
                ${syncStep === 2 ? "animate-bounce" : ""}`}
              style={{ transform: "rotate(90deg)" }}
              aria-hidden="true"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
