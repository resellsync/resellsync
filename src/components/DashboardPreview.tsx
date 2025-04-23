import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Square, SquareCheck, Tag, Workflow, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

const mockDevices = [
  {
    id: 1,
    imei: "359876543210987",
    model: "iPhone 13 Pro",
    status: "Testing",
    sku: "IP13P-256-UN",
    grade: "A",
    dateAdded: "2025-04-20",
  },
  {
    id: 2,
    imei: "359876543210988",
    model: "iPhone 12",
    status: "Ready",
    sku: "IP12-128-VZ",
    grade: "B+",
    dateAdded: "2025-04-21",
  },
  {
    id: 3,
    imei: "359876543210989",
    model: "Samsung S21",
    status: "Listed",
    sku: "SS21-256-ATT",
    grade: "A-",
    dateAdded: "2025-04-22",
  },
  {
    id: 4,
    imei: "359876543210990",
    model: "iPhone 14 Pro",
    status: "Testing",
    sku: "IP14P-256-VZ",
    grade: "A",
    dateAdded: "2025-04-22",
  },
  {
    id: 5,
    imei: "359876543210991",
    model: "Google Pixel 7",
    status: "Ready",
    sku: "GP7-128-UN",
    grade: "A",
    dateAdded: "2025-04-23",
  }
];

const statusColors = {
  Testing: "bg-yellow-500",
  Ready: "bg-green-500",
  Listed: "bg-blue-500",
};

const DashboardPreview = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
                <SquareCheck className="h-3.5 w-3.5" />
                Bulk Update
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Mark as Ready</DropdownMenuItem>
              <DropdownMenuItem>Mark as Testing</DropdownMenuItem>
              <DropdownMenuItem>Mark as Listed</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="sm" className="gap-1.5">
            <Workflow className="h-3.5 w-3.5" />
            Workflow
          </Button>

          <Button variant="outline" size="sm" className="gap-1.5">
            <Tag className="h-3.5 w-3.5" />
            Labels
          </Button>
        </div>
        
        <div className="relative w-64">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search IMEI or Model"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
                <TableHead className="text-xs">Model</TableHead>
                <TableHead className="text-xs w-24">Status</TableHead>
                <TableHead className="text-xs w-28">SKU</TableHead>
                <TableHead className="text-xs w-16">Grade</TableHead>
                <TableHead className="text-xs w-24">Date Added</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDevices.map((device) => (
                <TableRow 
                  key={device.id}
                  className="hover:bg-transparent"
                >
                  <TableCell className="py-2 px-2">
                    <Square className="h-3.5 w-3.5" />
                  </TableCell>
                  <TableCell className="font-mono text-xs py-2 px-2">{device.imei}</TableCell>
                  <TableCell className="text-xs py-2 px-2">{device.model}</TableCell>
                  <TableCell className="py-2 px-2">
                    <Badge
                      className={`${statusColors[device.status as keyof typeof statusColors]} text-white text-xs`}
                    >
                      {device.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-xs py-2 px-2">{device.sku}</TableCell>
                  <TableCell className="text-xs py-2 px-2">{device.grade}</TableCell>
                  <TableCell className="text-xs py-2 px-2">{device.dateAdded}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="border-t border-gray-100 p-2 flex items-center justify-between bg-gray-50/50">
          <div className="text-xs text-muted-foreground">
            Showing {mockDevices.length} devices
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
};

export default DashboardPreview;
