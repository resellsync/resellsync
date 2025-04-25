
import React from 'react';
import { motion } from 'framer-motion';
import { Table } from 'lucide-react';
import { Circle } from './Circle';
import { AnimatedBeam } from '../animated-beam';

interface SheetsIconProps {
  sheetsRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  centerRef: React.RefObject<HTMLDivElement>;
  onHover: () => void;
  onLeave: () => void;
  isActive: boolean;
}

export const SheetsIcon: React.FC<SheetsIconProps> = ({
  sheetsRef,
  containerRef,
  centerRef,
  onHover,
  onLeave,
  isActive
}) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute left-24 top-1/2 -translate-y-1/2"
    >
      <Circle 
        ref={sheetsRef} 
        size="md"
        onHover={onHover} 
        onLeave={onLeave}
        glowColor="rgba(34, 197, 94, 0.3)"
        isActive={isActive}
        variant="sheets"
      >
        <Table className="h-8 w-8 text-green-500" />
      </Circle>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={sheetsRef}
        toRef={centerRef}
        curvature={0}
        isActive={isActive}
        variant="teal"
        fromSize="md"
        toSize="lg"
      />
    </motion.div>
  );
};
