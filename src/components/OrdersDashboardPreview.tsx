import React from "react";
import { Truck, Box, Search } from "lucide-react";
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

type Marketplace = "ebay" | "backmarket" | "reebelo";
const MARKETPLACE_LOGO: Record<Marketplace, React.ReactNode> = {
  ebay: (
    <div className="w-5 h-5 flex items-center justify-center text-[#0fa0ce] font-bold text-xs" aria-label="eBay">
      <span className="text-[#e53238]">e</span>
      <span className="text-[#0064d2]">B</span>
      <span className="text-[#f5af02]">a</span>
      <span className="text-[#86b817]">y</span>
    </div>
  ),
  backmarket: (
    <span className="inline-block w-5 h-5 bg-black text-white rounded text-xs font-bold flex items-center justify-center" aria-label="Backmarket">
      BM
    </span>
  ),
  reebelo: (
    <span className="inline-block w-5 h-5 bg-green-600 text-white rounded text-xs font-bold flex items-center justify-center" aria-label="Reebelo">
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
    shipping: "Shipped"
  },
  {
    id: "ORD-3824",
    marketplace: "backmarket" as Marketplace,
    device: "Samsung S22",
    date: "2025-04-13",
    buyer: "Lisa Park",
    shipping: "Pending"
  },
  {
    id: "ORD-3823",
    marketplace: "ebay" as Marketplace,
    device: "iPhone 14",
    date: "2025-04-12",
    buyer: "Mike Ross",
    shipping: "Delivered"
  },
  {
    id: "ORD-3822",
    marketplace: "reebelo" as Marketplace,
    device: "Pixel 6",
    date: "2025-04-11",
    buyer: "Sarah Lee",
    shipping: "Shipped"
  },
  {
    id: "ORD-3821",
    marketplace: "reebelo" as Marketplace,
    device: "Google Pixel 7",
    date: "2025-04-10",
    buyer: "John Miller",
    shipping: "Delivered"
  }
];

const SHIPPING_STATUS: Record<string, {
  label: string;
  color: string;
  icon: React.ReactNode;
}> = {
  Pending: {
    label: "Pending",
    color: "bg-yellow-500",
    icon: <Box className="h-3.5 w-3.5 mr-1 inline" />
  },
  Shipped: {
    label: "Shipped",
    color: "bg-blue-500",
    icon: <Truck className="h-3.5 w-3.5 mr-1 inline" />
  },
  Delivered: {
    label: "Delivered",
    color: "bg-green-500",
    icon: <Truck className="h-3.5 w-3.5 mr-1 inline" />
  }
};

const OrdersDashboardPreview = () => (
  <div className="w-full min-h-[420px] max-h-[420px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col">
    <div className="p-3 border-b border-gray-200 flex items-center justify-between bg-gray-50/80">
      <div className="font-medium text-sm">Orders Overview</div>
      <div className="relative w-64">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <Input 
          className="w-full pl-8 h-8 text-xs" 
          placeholder="Search orders..."
        />
      </div>
    </div>
    <div className="flex-1 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-xs w-28">Order ID</TableHead>
            <TableHead className="text-xs w-28 text-center">Marketplace</TableHead>
            <TableHead className="text-xs">Device Sold</TableHead>
            <TableHead className="text-xs w-24">Date</TableHead>
            <TableHead className="text-xs w-32">Buyer</TableHead>
            <TableHead className="text-xs w-28">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ORDERS.map(order => (
            <TableRow key={order.id} className="hover:bg-transparent">
              <TableCell className="font-mono text-xs py-2 px-2">{order.id}</TableCell>
              <TableCell className="py-2 px-2">
                <div className="flex items-center justify-center">
                  {MARKETPLACE_LOGO[order.marketplace]}
                </div>
              </TableCell>
              <TableCell className="text-xs py-2 px-2">{order.device}</TableCell>
              <TableCell className="text-xs py-2 px-2">{order.date}</TableCell>
              <TableCell className="text-xs py-2 px-2">{order.buyer}</TableCell>
              <TableCell className="py-2 px-2">
                <Badge className={`${SHIPPING_STATUS[order.shipping].color} text-white text-xs px-2 py-0.5 flex items-center w-fit`}>
                  {SHIPPING_STATUS[order.shipping].icon}
                  {SHIPPING_STATUS[order.shipping].label}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    <div className="border-t border-gray-100 p-2 flex items-center justify-between bg-gray-50/50">
      <div className="text-xs text-muted-foreground">
        Last 7 days • {ORDERS.length} orders
      </div>
    </div>
  </div>
);

export default OrdersDashboardPreview;
