
import React, { useEffect, useState } from "react";
import { FileInput, Square } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const dummyRows = [
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
  }
];

export default function BulkImportAnimatedVisual() {
  const [shownRows, setShownRows] = useState(3); // Show all rows by default
  
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-3 border-b border-gray-200 flex items-center justify-between bg-gray-50/80">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5">
                <FileInput className="h-3.5 w-3.5" />
                Import Devices
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Import from CSV</DropdownMenuItem>
              <DropdownMenuItem>Import from Excel</DropdownMenuItem>
              <DropdownMenuItem>Scan Devices</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="text-xs text-muted-foreground">
          Search: IMEI / Model
        </div>
      </div>

      <div className="w-full">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-10">
                <Square className="h-3.5 w-3.5" />
              </TableHead>
              <TableHead className="text-xs">IMEI</TableHead>
              <TableHead className="text-xs">Brand</TableHead>
              <TableHead className="text-xs">Model</TableHead>
              <TableHead className="text-xs">Grade</TableHead>
              <TableHead className="text-xs">Network</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyRows.map((row, i) => (
              <TableRow 
                key={row.imei}
                className="hover:bg-transparent"
              >
                <TableCell className="py-2">
                  <Square className="h-3.5 w-3.5" />
                </TableCell>
                <TableCell className="font-mono text-xs py-2">{row.imei}</TableCell>
                <TableCell className="text-xs py-2">{row.brand}</TableCell>
                <TableCell className="text-xs py-2">{row.model}</TableCell>
                <TableCell className="text-xs py-2">{row.grade}</TableCell>
                <TableCell className="text-xs py-2">{row.network}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
