
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Store, Package, Building2, Boxes } from 'lucide-react';
import { Circle } from './Circle';
import { AnimatedBeam } from '../animated-beam';

interface MarketplaceIconsProps {
  activeBeam: number | null;
  onHover: (index: number) => void;
  onLeave: () => void;
  containerRef: React.RefObject<HTMLDivElement>;
  centerRef: React.RefObject<HTMLDivElement>;
}

export const MarketplaceIcons: React.FC<MarketplaceIconsProps> = ({
  activeBeam,
  onHover,
  onLeave,
  containerRef,
  centerRef
}) => {
  const ebayRef = useRef<HTMLDivElement>(null);
  const backmarketRef = useRef<HTMLDivElement>(null);
  const amazonRef = useRef<HTMLDivElement>(null);
  const reebeloRef = useRef<HTMLDivElement>(null);
  const swappaRef = useRef<HTMLDivElement>(null);

  const icons = [
    { ref: ebayRef, icon: <ShoppingCart className="h-8 w-8 text-brand-blue" />, delay: 0.4 },
    { ref: backmarketRef, icon: <Store className="h-8 w-8 text-brand-teal" />, delay: 0.5 },
    { ref: amazonRef, icon: <Package className="h-8 w-8 text-brand-blue" />, delay: 0.6 },
    { ref: reebeloRef, icon: <Building2 className="h-8 w-8 text-brand-teal" />, delay: 0.7 },
    { ref: swappaRef, icon: <Boxes className="h-8 w-8 text-brand-blue" />, delay: 0.8 }
  ];

  return (
    <motion.div 
      className="absolute right-24 top-0 bottom-0 flex flex-col justify-center gap-10"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: item.delay }}
        >
          <Circle 
            ref={item.ref}
            size="md"
            onHover={() => onHover(index + 1)} 
            onLeave={onLeave}
            glowColor={index % 2 === 0 ? "rgba(59, 130, 246, 0.3)" : "rgba(45, 212, 191, 0.3)"}
            isActive={activeBeam === index + 1}
          >
            {item.icon}
          </Circle>
        </motion.div>
      ))}

      {icons.map((item, index) => (
        <AnimatedBeam
          key={`beam-${index}`}
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={item.ref}
          curvature={20 - (index * 10)}
          isActive={activeBeam === 0 || activeBeam === index + 1}
          variant={index % 2 === 0 ? "blue" : "teal"}
          fromSize="lg"
          toSize="md"
        />
      ))}
    </motion.div>
  );
};
