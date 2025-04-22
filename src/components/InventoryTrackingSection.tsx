
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Check, Calendar, FileSearch } from 'lucide-react';

const devices = [
  {
    imei: "354637281928374",
    model: "iPhone 13 Pro",
    status: "Ready to Ship",
    lastUpdated: "2h ago",
    condition: "A Grade"
  },
  {
    imei: "354637281928375",
    model: "iPhone 12",
    status: "In Review",
    lastUpdated: "5h ago",
    condition: "B Grade"
  },
  {
    imei: "354637281928376",
    model: "iPhone 13",
    status: "Sold",
    lastUpdated: "1d ago",
    condition: "A Grade"
  }
];

const InventoryTrackingSection = () => {
  return (
    <section className="container-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Dashboard Preview */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"></div>
          
          <Card className="overflow-hidden border bg-white shadow-xl relative">
            {/* Dashboard Header */}
            <div className="p-6 border-b flex items-center justify-between bg-white">
              <h3 className="text-lg font-semibold">Device Inventory</h3>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-green-50">Active: 247</Badge>
                <Badge variant="outline" className="bg-blue-50">Pending: 12</Badge>
              </div>
            </div>

            {/* Inventory Table */}
            <div className="max-h-[400px] overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Device</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devices.map((device) => (
                    <TableRow key={device.imei}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{device.model}</div>
                          <div className="text-sm text-muted-foreground">{device.condition}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={
                            device.status === "Ready to Ship" ? "bg-green-50" :
                            device.status === "In Review" ? "bg-yellow-50" :
                            "bg-blue-50"
                          }
                        >
                          {device.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-muted-foreground">
                          {device.lastUpdated}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>

        {/* Right side - Content */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Full Control Over Every Phone
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Bulk update statuses, check device details, track workflows, and view everything in one dashboard.
            Stay organized, move faster, and never lose track of a single phone.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Bulk Status Updates</h3>
                <p className="text-muted-foreground">Update multiple devices at once, saving hours of manual work.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-brand-teal" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Workflow Tracking</h3>
                <p className="text-muted-foreground">Follow devices from intake to sale with detailed status history.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center">
                <FileSearch className="w-5 h-5 text-brand-green" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Detailed Device Info</h3>
                <p className="text-muted-foreground">Access IMEI, condition grades, and full device history instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryTrackingSection;
