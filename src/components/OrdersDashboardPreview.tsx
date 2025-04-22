
import React from "react";
import { Truck, Box } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
    <div className="w-6 h-6 flex items-center justify-center text-[#0fa0ce] font-bold text-sm" aria-label="eBay">
      <span className="text-[#e53238]">e</span>
      <span className="text-[#0064d2]">B</span>
      <span className="text-[#f5af02]">a</span>
      <span className="text-[#86b817]">y</span>
    </div>
  ),
  backmarket: (
    <span className="inline-block w-6 h-6 bg-black text-white rounded-md text-sm font-bold flex items-center justify-center" aria-label="Backmarket">
      BM
    </span>
  ),
  reebelo: (
    <span className="inline-block w-6 h-6 bg-green-600 text-white rounded-md text-sm font-bold flex items-center justify-center" aria-label="Reebelo">
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
    icon: <Box className="w-4 h-4 mr-1 inline" />
  },
  Shipped: {
    label: "Shipped",
    color: "bg-blue-500",
    icon: <Truck className="w-4 h-4 mr-1 inline" />
  },
  Delivered: {
    label: "Delivered",
    color: "bg-green-600",
    icon: <Truck className="w-4 h-4 mr-1 inline" />
  }
};

const OrdersDashboardPreview = () => (
  <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden max-w-3xl mx-auto">
    <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
      <div className="font-semibold text-gray-900 text-lg">Orders Overview</div>
      <div className="text-sm text-muted-foreground">Last 7 days</div>
    </div>
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Marketplace</TableHead>
            <TableHead>Device Sold</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Buyer</TableHead>
            <TableHead>Shipping Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ORDERS.map(order => (
            <TableRow key={order.id}>
              <TableCell className="font-mono text-base">{order.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">{MARKETPLACE_LOGO[order.marketplace]}</div>
              </TableCell>
              <TableCell className="text-base">{order.device}</TableCell>
              <TableCell className="text-base">{order.date}</TableCell>
              <TableCell className="text-base">{order.buyer}</TableCell>
              <TableCell>
                <Badge className={`${SHIPPING_STATUS[order.shipping].color} text-white flex items-center gap-1 text-base px-3 py-1 rounded-full`}>
                  {SHIPPING_STATUS[order.shipping].icon}
                  {SHIPPING_STATUS[order.shipping].label}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

export default OrdersDashboardPreview;
