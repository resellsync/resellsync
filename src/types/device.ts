
export type DeviceStatus = "Testing" | "Ready" | "Listed";

export interface Device {
  id: number;
  imei: string;
  model: string;
  status: DeviceStatus;
  sku: string;
  grade: string;
  dateAdded: string;
}

export const statusColors: Record<DeviceStatus, string> = {
  Testing: "bg-yellow-500",
  Ready: "bg-green-500",
  Listed: "bg-blue-500",
};
