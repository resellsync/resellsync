import React from "react";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MARKETPLACE_LOGO: Record<string, React.ReactNode> = {
  ebay: (
    <div className="w-5 h-5 flex items-center justify-center" aria-label="eBay">
      <span className="text-[#e53238]">e</span>
      <span className="text-[#0064d2]">B</span>
      <span className="text-[#f5af02]">a</span>
      <span className="text-[#86b817]">y</span>
    </div>
  ),
  backmarket: (
    <div className="w-5 h-5 bg-black text-white rounded flex items-center justify-center text-xs font-medium" aria-label="Backmarket">
      BM
    </div>
  ),
  reebelo: (
    <div className="w-5 h-5 bg-green-600 text-white rounded flex items-center justify-center text-xs font-medium" aria-label="Reebelo">
      R
    </div>
  ),
};

const ORDERS = [
  {
    id: "ORD-3827",
    marketplace: "ebay",
    device: "iPhone 13 Pro",
    date: "2025-04-15",
    buyer: "Alex Chen",
    shipping: "Shipped"
  },
  {
    id: "ORD-3824",
    marketplace: "backmarket",
    device: "Samsung S22",
    date: "2025-04-13",
    buyer: "Lisa Park",
    shipping: "Pending"
  },
  {
    id: "ORD-3823",
    marketplace: "ebay",
    device: "iPhone 14",
    date: "2025-04-12",
    buyer: "Mike Ross",
    shipping: "Delivered"
  },
  {
    id: "ORD-3822",
    marketplace: "reebelo",
    device: "Pixel 6",
    date: "2025-04-11",
    buyer: "Sarah Lee",
    shipping: "Shipped"
  }
];

const SHIPPING_STATUS: Record<string, {
  label: string;
  color: string;
}> = {
  Pending: {
    label: "Pending",
    color: "bg-yellow-500",
  },
  Shipped: {
    label: "Shipped",
    color: "bg-blue-500",
  },
  Delivered: {
    label: "Delivered",
    color: "bg-green-500",
  }
};

export default function OrdersDashboardPreview() {
  return (
    <div className="w-full h-[360px] bg-white rounded-xl shadow-lg border border-gray-200">
      {/* Header */}
      <div className="h-[52px] px-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/80">
        <div className="font-medium text-sm">Orders Overview</div>
        <div className="relative w-64">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input 
            className="w-full pl-8 h-8 text-xs" 
            placeholder="Search orders..."
          />
        </div>
      </div>

      {/* Table */}
      <div className="h-[244px]">
        <Table>
          <TableHeader className="sticky top-0 bg-white">
            <TableRow className="hover:bg-transparent border-b">
              <TableHead className="text-xs w-28 h-10 bg-white">Order ID</TableHead>
              <TableHead className="text-xs w-28 h-10 text-center bg-white">Marketplace</TableHead>
              <TableHead className="text-xs h-10 bg-white">Device Sold</TableHead>
              <TableHead className="text-xs w-24 h-10 bg-white">Date</TableHead>
              <TableHead className="text-xs w-32 h-10 bg-white">Buyer</TableHead>
              <TableHead className="text-xs w-28 h-10 bg-white">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ORDERS.map(order => (
              <TableRow key={order.id} className="hover:bg-transparent">
                <TableCell className="font-mono text-xs h-[48px] py-2 px-4">{order.id}</TableCell>
                <TableCell className="h-[48px] py-2 px-4">
                  <div className="flex items-center justify-center">
                    {MARKETPLACE_LOGO[order.marketplace]}
                  </div>
                </TableCell>
                <TableCell className="text-xs h-[48px] py-2 px-4">{order.device}</TableCell>
                <TableCell className="text-xs h-[48px] py-2 px-4">{order.date}</TableCell>
                <TableCell className="text-xs h-[48px] py-2 px-4">{order.buyer}</TableCell>
                <TableCell className="h-[48px] py-2 px-4">
                  <Badge className={`${SHIPPING_STATUS[order.shipping].color} text-white text-xs px-2.5 py-0.5`}>
                    {SHIPPING_STATUS[order.shipping].label}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Footer */}
      <div className="h-16 border-t border-gray-200 px-4 flex items-center justify-between bg-gray-50/50">
        <div className="text-sm text-muted-foreground">
          Showing {ORDERS.length} orders
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg text-sm text-gray-500">&larr;</button>
          <span className="text-sm">1</span>
          <button className="p-2 hover:bg-gray-100 rounded-lg text-sm text-gray-500">&rarr;</button>
        </div>
      </div>
    </div>
  );
}
