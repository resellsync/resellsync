
import { Square } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Device } from "@/types/device";
import { DeviceStatusBadge } from "./DeviceStatusBadge";

interface DevicesTableProps {
  devices: Device[];
}

export const DevicesTable = ({ devices }: DevicesTableProps) => (
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
        {devices.map((device) => (
          <TableRow key={device.id} className="hover:bg-transparent">
            <TableCell className="py-2 px-2">
              <Square className="h-3.5 w-3.5" />
            </TableCell>
            <TableCell className="font-mono text-xs py-2 px-2">{device.imei}</TableCell>
            <TableCell className="text-xs py-2 px-2">{device.model}</TableCell>
            <TableCell className="py-2 px-2">
              <DeviceStatusBadge status={device.status} />
            </TableCell>
            <TableCell className="font-mono text-xs py-2 px-2">{device.sku}</TableCell>
            <TableCell className="text-xs py-2 px-2">{device.grade}</TableCell>
            <TableCell className="text-xs py-2 px-2">{device.dateAdded}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
