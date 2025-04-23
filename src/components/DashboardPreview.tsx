
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Device } from "@/types/device";
import { DevicesToolbar } from "./devices/DevicesToolbar";
import { DevicesTable } from "./devices/DevicesTable";

const mockDevices: Device[] = [
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
    id: 3,
    imei: "359876543210989",
    model: "Samsung S21",
    status: "Listed",
    sku: "SS21-256-ATT",
    grade: "A-",
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

const DashboardPreview = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handlePaginationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, you would handle actual pagination logic here
  };

  return (
    <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col">
      <DevicesToolbar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <DevicesTable devices={mockDevices} />
        
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
