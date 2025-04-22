import React from "react";
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
import { Square, SquareCheck, Tag, Workflow } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

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
];

const statusColors = {
  Testing: "bg-yellow-500",
  Ready: "bg-green-500",
  Listed: "bg-blue-500",
};

const DashboardPreview = () => {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <SquareCheck className="h-4 w-4" />
                Bulk Update
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Mark as Ready</DropdownMenuItem>
              <DropdownMenuItem>Mark as Testing</DropdownMenuItem>
              <DropdownMenuItem>Mark as Listed</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" size="sm" className="gap-2">
            <Workflow className="h-4 w-4" />
            Workflow
          </Button>
          
          <Button variant="outline" size="sm" className="gap-2">
            <Tag className="h-4 w-4" />
            Labels
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Showing 3 of 1,458 devices
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
              <TableHead>Model</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Date Added</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDevices.map((device) => (
              <TableRow key={device.id}>
                <TableCell>
                  <Square className="h-4 w-4" />
                </TableCell>
                <TableCell className="font-mono">{device.imei}</TableCell>
                <TableCell>{device.model}</TableCell>
                <TableCell>
                  <Badge
                    className={`${statusColors[device.status as keyof typeof statusColors]} text-white`}
                  >
                    {device.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono">{device.sku}</TableCell>
                <TableCell>{device.grade}</TableCell>
                <TableCell>{device.dateAdded}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardPreview;
