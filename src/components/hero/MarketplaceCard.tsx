import React from 'react';

interface MarketplaceCardProps {
  name: string;
  logo: string;
}

export const MarketplaceCard = ({ name, logo }: MarketplaceCardProps) => {
  const isSvg = logo.endsWith('.svg');

  return (
    <div className="flex items-center justify-center w-[220px] h-[90px] bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
      {isSvg ? (
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="max-h-[70px] max-w-[180px] object-contain"
          style={{ filter: 'brightness(1) contrast(1)' }}
        />
      ) : (
        <div className="text-base font-semibold text-gray-800">
          {logo}
        </div>
      )}
    </div>
  );
};

