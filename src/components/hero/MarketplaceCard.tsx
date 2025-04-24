
import React from 'react';

interface MarketplaceCardProps {
  name: string;
  logo: string;
}

export const MarketplaceCard = ({ name, logo }: MarketplaceCardProps) => {
  return (
    <div className="h-14 flex items-center justify-center gap-2 p-2 mx-1 rounded-xl bg-white/95 border border-border/30 shadow-sm backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-border/50 group">
      <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-brand-blue to-brand-teal text-white font-bold text-xs flex items-center justify-center group-hover:shadow-md transition-shadow">
        {logo}
      </div>
      <span className="text-muted-foreground font-medium text-xs">
        {name}
      </span>
    </div>
  );
};

