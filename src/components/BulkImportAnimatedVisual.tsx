
import React from "react";
import { FileInput, Square, ChevronLeft, ChevronRight } from "lucide-react";
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
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

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
  },
  {
    imei: "123456789012345",
    brand: "Apple",
    model: "iPhone 14",
    grade: "A",
    network: "Unlocked"
  },
  {
    imei: "456789012345678",
    brand: "Samsung",
    model: "Galaxy S23",
    grade: "A",
    network: "Verizon"
  },
  {
    imei: "987654321098765",
    brand: "Google",
    model: "Pixel 7 Pro",
    grade: "A",
    network: "Unlocked"
  }
];

export default function BulkImportAnimatedVisual() {
  // Function to handle pagination clicks
  const handlePaginationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, you would handle actual pagination logic here
  };

  return (
    <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col">
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

      <div className="flex-1 flex flex-col">
        <div className="flex-1">
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
        
        <div className="border-t border-gray-100 p-2 flex items-center justify-between bg-gray-50/50">
          <div className="text-xs text-muted-foreground">
            Showing {dummyRows.length} devices
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink onClick={handlePaginationClick} className="h-8 w-8 p-0">
                  <ChevronLeft className="h-4 w-4" />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={handlePaginationClick} className="h-8 w-8 p-0">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={handlePaginationClick} className="h-8 w-8 p-0">
                  <ChevronRight className="h-4 w-4" />
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
