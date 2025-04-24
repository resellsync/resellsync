import React from "react";
import { Search, Square } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DEVICES = [
  {
    imei: "353700024123456",
    brand: "Apple",
    model: "iPhone 13",
    grade: "A",
    network: "Unlocked"
  },
  {
    imei: "868322215987654",
    brand: "Samsung",
    model: "Galaxy S21",
    grade: "B",
    network: "T-Mobile"
  },
  {
    imei: "014528299123789",
    brand: "Google",
    model: "Pixel 6",
    grade: "A",
    network: "Verizon"
  },
  {
    imei: "356938035678901",
    brand: "Apple",
    model: "iPhone 12",
    grade: "A",
    network: "AT&T"
  },
  {
    imei: "490127856734567",
    brand: "Samsung",
    model: "Galaxy S22",
    grade: "A",
    network: "Unlocked"
  },
  {
    imei: "867530912345678",
    brand: "Google",
    model: "Pixel 7",
    grade: "B",
    network: "T-Mobile"
  }
];

export default function BulkImportAnimatedVisual() {
  return (
    <div className="w-full h-[360px] bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col">
      <div className="p-3 border-b border-gray-200 flex items-center justify-between bg-gray-50/80">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5">
            Import Devices
          </Button>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input 
            type="text"
            placeholder="Search IMEI or Model"
            className="w-full pl-8 h-8 text-xs"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-x-hidden">
        <div className="flex-1">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-8">
                  <Square className="h-3.5 w-3.5" />
                </TableHead>
                <TableHead className="text-xs w-32">IMEI</TableHead>
                <TableHead className="text-xs w-28">Brand</TableHead>
                <TableHead className="text-xs">Model</TableHead>
                <TableHead className="text-xs w-16">Grade</TableHead>
                <TableHead className="text-xs w-28">Network</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DEVICES.map((device) => (
                <TableRow 
                  key={device.imei}
                  className="hover:bg-transparent"
                >
                  <TableCell className="py-2 px-2">
                    <Square className="h-3.5 w-3.5" />
                  </TableCell>
                  <TableCell className="font-mono text-xs py-2 px-2">{device.imei}</TableCell>
                  <TableCell className="text-xs py-2 px-2">{device.brand}</TableCell>
                  <TableCell className="text-xs py-2 px-2">{device.model}</TableCell>
                  <TableCell className="text-xs py-2 px-2">{device.grade}</TableCell>
                  <TableCell className="text-xs py-2 px-2">{device.network}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="border-t border-gray-100 p-2 flex items-center justify-between bg-gray-50/50">
          <div className="text-xs text-muted-foreground">
            Showing {DEVICES.length} devices
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-50 rounded-lg">&larr;</button>
            <span className="text-xs">1</span>
            <button className="p-2 hover:bg-gray-50 rounded-lg">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
