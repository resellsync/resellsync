
import React from 'react';

interface MarketplaceCardProps {
  name: string;
  logo: string;
}

export const MarketplaceCard = ({ name, logo }: MarketplaceCardProps) => {
  return (
    <div className="h-12 flex items-center justify-center gap-1.5 p-1.5 mx-1 rounded-xl bg-white/95 border border-border/30 shadow-sm backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-border/50 group">
      <div className="w-4 h-4 rounded-lg bg-gradient-to-br from-brand-blue to-brand-teal text-white font-bold text-[10px] flex items-center justify-center group-hover:shadow-md transition-shadow">
        {logo}
      </div>
      <span className="text-muted-foreground font-medium text-[10px]">
        {name}
      </span>
    </div>
  );
};
