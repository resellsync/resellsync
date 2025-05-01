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

  const isSwappa = name.toLowerCase() === 'swappa';

  return (
    <div
      className={`relative flex items-center justify-center w-[220px] h-[90px] rounded-xl shadow-sm transition-all duration-200
        ${isSwappa
          ? 'bg-yellow-50 border-yellow-400 border-2 border-dashed opacity-80'
          : 'bg-white border border-gray-200 hover:shadow-md'}
      `}
    >
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
      {isSwappa && (
        <span className="absolute top-2 right-2 flex items-center gap-1 bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow border border-yellow-500">
          <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l2 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>
          Coming Soon
        </span>
      )}
    </div>
  );
};
