
import React from "react";
import { Ebay, Box, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Marketplace = "ebay" | "backmarket" | "reebelo";

const MARKETPLACE_LOGO: Record<Marketplace, React.ReactNode> = {
  ebay: <Ebay className="w-5 h-5 text-[#0fa0ce]" aria-label="eBay" />,
  backmarket: (
    <span className="inline-block w-5 h-5 bg-black text-white rounded-md text-xs font-bold flex items-center justify-center" aria-label="Backmarket">
      BM
    </span>
  ),
  reebelo: (
    <span className="inline-block w-5 h-5 bg-green-600 text-white rounded-md text-xs font-bold flex items-center justify-center" aria-label="Reebelo">
      R
    </span>
  ),
};

const ORDERS = [
  {
    id: "ORD-3827",
    marketplace: "ebay" as Marketplace,
    device: "iPhone 13 Pro",
    date: "2025-04-15",
    buyer: "Alex Chen",
    shipping: "Shipped",
  },
  {
    id: "ORD-3824",
    marketplace: "backmarket" as Marketplace,
    device: "Samsung S22",
    date: "2025-04-13",
    buyer: "Lisa Park",
    shipping: "Pending",
  },
  {
    id: "ORD-3821",
    marketplace: "reebelo" as Marketplace,
    device: "Google Pixel 7",
    date: "2025-04-10",
    buyer: "John Miller",
    shipping: "Delivered",
  },
];

const SHIPPING_STATUS: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  "Pending": { label: "Pending", color: "bg-yellow-500", icon: <Box className="w-4 h-4 mr-1 inline" /> },
  "Shipped": { label: "Shipped", color: "bg-blue-500", icon: <Truck className="w-4 h-4 mr-1 inline" /> },
  "Delivered": { label: "Delivered", color: "bg-green-600", icon: <Truck className="w-4 h-4 mr-1 inline" /> },
};

const OrdersDashboardPreview = () => (
  <div className="w-full max-w-xl mx-auto rounded-2xl bg-white shadow-md border border-gray-200 overflow-hidden animate-fade-in">
    <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
      <div className="font-semibold text-gray-900 text-base">Orders Overview</div>
      <div className="text-xs text-muted-foreground">Last 7 days</div>
    </div>
    <div>
      {ORDERS.map((order) => (
        <div
          key={order.id}
          className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0 justify-between border-b border-gray-100 px-5 py-4 last:border-0"
        >
          {/* Left: Marketplace + Device */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="shrink-0">{MARKETPLACE_LOGO[order.marketplace]}</span>
            <span className="text-sm font-medium truncate">{order.device}</span>
          </div>
          {/* ID & Buyer */}
          <div className="flex flex-col gap-0.5 md:flex-row md:gap-4 md:items-center md:justify-center w-full md:w-auto text-xs md:text-sm mt-1 md:mt-0">
            <span className="text-muted-foreground">
              Order <span className="font-mono font-semibold">{order.id}</span>
            </span>
            <span className="hidden md:block text-gray-300">|</span>
            <span className="text-muted-foreground truncate max-w-[120px]">Buyer: <span className="font-normal text-gray-700">{order.buyer}</span></span>
          </div>
          {/* Date & Shipping Status */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <span className="text-gray-400 text-xs md:text-sm">{order.date}</span>
            <Badge className={`${SHIPPING_STATUS[order.shipping].color} text-white px-2 py-1 rounded-full flex items-center gap-1`}>
              {SHIPPING_STATUS[order.shipping].icon}{SHIPPING_STATUS[order.shipping].label}
            </Badge>
          </div>
        </div>
      ))}
    </div>
    {/* Responsive Stack (optional): handled by flex direction above */}
  </div>
);

export default OrdersDashboardPreview;
