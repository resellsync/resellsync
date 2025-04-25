
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import { Circle } from './Circle';

interface CenterIconProps {
  centerRef: React.RefObject<HTMLDivElement>;
  onHover: () => void;
  onLeave: () => void;
  isActive: boolean;
}

export const CenterIcon: React.FC<CenterIconProps> = ({
  centerRef,
  onHover,
  onLeave,
  isActive
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, type: "spring" }}
      >
        <Circle 
          ref={centerRef} 
          size="lg"
          onHover={onHover} 
          onLeave={onLeave}
          glowColor="rgba(59, 130, 246, 0.3)"
          isActive={isActive}
          variant="primary"
        >
          <Smartphone className="h-14 w-14 text-brand-blue" />
        </Circle>
      </motion.div>
    </div>
  );
};
