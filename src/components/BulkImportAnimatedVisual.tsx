
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
  const [shownRows, setShownRows] = useState(0);
  
  useEffect(() => {
    setShownRows(0);
    const timeouts: NodeJS.Timeout[] = [];
    dummyRows.forEach((row, i) => {
      const to = setTimeout(() => setShownRows(r => Math.max(r, i + 1)), 900 + i * 450);
      timeouts.push(to);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);
  
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <FileInput className="h-4 w-4" />
                Import Devices
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Import from CSV</DropdownMenuItem>
              <DropdownMenuItem>Import from Excel</DropdownMenuItem>
              <DropdownMenuItem>Scan Devices</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="text-sm text-muted-foreground">
          Search: IMEI / Model
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Square className="h-4 w-4" />
              </TableHead>
              <TableHead>IMEI</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Network</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyRows.slice(0, shownRows).map((row, i) => (
              <TableRow 
                key={row.imei}
                className={`transition-all duration-500 ${shownRows > i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
              >
                <TableCell>
                  <Square className="h-4 w-4" />
                </TableCell>
                <TableCell className="font-mono">{row.imei}</TableCell>
                <TableCell>{row.brand}</TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell>{row.grade}</TableCell>
                <TableCell>{row.network}</TableCell>
              </TableRow>
            ))}
            {shownRows === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  &nbsp;
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
