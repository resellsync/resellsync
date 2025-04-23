
import { Badge } from "@/components/ui/badge";
import { DeviceStatus, statusColors } from "@/types/device";

interface DeviceStatusBadgeProps {
  status: DeviceStatus;
}

export const DeviceStatusBadge = ({ status }: DeviceStatusBadgeProps) => (
  <Badge className={`${statusColors[status]} text-white text-xs`}>
    {status}
  </Badge>
);
