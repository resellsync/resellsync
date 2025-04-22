
import React, { useEffect, useState } from "react";
import { FileInput } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="relative flex items-center justify-center gap-2 w-full max-w-[260px] mx-auto p-3 mt-4 rounded-lg bg-white/80 shadow-sm border border-brand-teal/10">
        <FileInput className="w-5 h-5 text-brand-blue" />
        <div className="text-sm text-muted-foreground">
          Import Phone Inventory
        </div>
      </div>

      <div className="absolute left-1/2 top-[75px] -translate-x-1/2 z-10">
        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" className="animate-bounce" aria-hidden="true">
          <path d="M15 2v16M15 18l4-4M15 18l-4-4" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Inventory Dashboard</span>
        </div>
        <div className="text-sm text-muted-foreground">
          Search: IMEI / Model
        </div>
      </div>

      <div className="w-full">
        <Table>
          <TableHeader>
            <TableRow>
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
                <TableCell className="font-mono">{row.imei}</TableCell>
                <TableCell>{row.brand}</TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell>{row.grade}</TableCell>
                <TableCell>{row.network}</TableCell>
              </TableRow>
            ))}
            {shownRows === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
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
