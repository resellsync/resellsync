
import React, { useState, useEffect } from 'react';

interface MarketplaceCardProps {
  name: string;
  logo: string;
  fallbackText?: string;
}

export const MarketplaceCard = ({ name, logo, fallbackText }: MarketplaceCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(logo);

  useEffect(() => {
    // Reset error state when logo prop changes
    setImageError(false);
    setImageSrc(logo);
  }, [logo]);

  const handleImageError = () => {
    console.error(`Failed to load image for ${name}:`, logo);
    setImageError(true);
  };

  return (
    <div className="flex items-center justify-center w-[220px] h-[90px] bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
      {!imageError ? (
        <img 
          src={imageSrc} 
          alt={`${name} logo`} 
          className="max-h-[70px] max-w-[180px] object-contain"
          onError={handleImageError}
        />
      ) : (
        <div className="text-xl font-semibold text-gray-800">
          {fallbackText || name}
        </div>
      )}
    </div>
  );
};
