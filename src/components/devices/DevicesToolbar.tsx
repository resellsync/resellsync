
import { Search, Square, SquareCheck, Tag, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DevicesToolbarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const DevicesToolbar = ({ searchQuery, onSearchChange }: DevicesToolbarProps) => {
  return (
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
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-8 h-8 text-xs"
        />
      </div>
    </div>
  );
};
