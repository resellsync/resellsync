
import React from "react";
import { ArrowRight, Check } from "lucide-react";

const marketplaces = [
  { name: "eBay", color: "bg-[#0064d2]", logo: "EB" },
  { name: "Backmarket", color: "bg-[#4caf50]", logo: "BM" },
  { name: "Reebelo", color: "bg-[#162336]", logo: "RB" },
];

export default function InventorySyncVisual() {
  return (
    <div className="relative w-full max-w-[420px] flex flex-col items-center justify-center animate-fade-in">
      {/* Inventory Dashboard */}
      <div className="w-full bg-white border border-gray-200 rounded-xl shadow-md p-6 z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-brand-blue to-brand-teal text-white font-bold flex items-center justify-center text-lg">
            RS
          </div>
          <span className="font-semibold text-brand-blue text-base">Dashboard</span>
        </div>
        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-gray-100">
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
                  <span className="inline-block bg-brand-blue/10 text-brand-blue px-2 py-1 rounded-md animate-pulse">
                    12
                  </span>
                </td>
                <td className="py-2 px-3">
                  <span className="inline-flex items-center gap-1 text-green-600 text-xs bg-green-50 rounded px-2 py-0.5">
                    <Check className="w-4 h-4 animate-fade-in" />
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
      </div>
      {/* Arrows & Marketplaces */}
      <div className="flex items-center justify-center w-full mt-4 gap-0 sm:gap-7 relative z-10">
        {/* Arrow for each marketplace */}
        {marketplaces.map((mp, i) => (
          <React.Fragment key={mp.name}>
            <div className="flex flex-col items-center">
              <ArrowRight
                className={`w-7 h-7 text-brand-blue animate-fade-in ${i === 0 ? "sm:-ml-2" : "sm:ml-0"}`}
                style={{ transform: "rotate(20deg)" }}
                aria-hidden="true"
              />
              <div
                className={`relative -mt-1 mb-2 ${mp.color} w-11 h-11 flex items-center justify-center rounded-xl shadow-lg border`}
              >
                <span className="font-bold text-white">{mp.logo}</span>
                {/* Live pulse indicator */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white pulse"></span>
              </div>
              <span className="text-xs text-muted-foreground mt-0.5">{mp.name}</span>
              {/* Synced feedback */}
              <span className="flex items-center text-green-600 text-xs">
                <Check className="w-4 h-4 mr-1 animate-fade-in" />
                Updated
              </span>
            </div>
            {i < marketplaces.length - 1 && (
              <div className="w-4 sm:w-8" />
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Mobile stacking fallback decorator */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
    </div>
  );
}
