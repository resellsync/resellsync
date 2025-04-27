
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
        className="relative"
      >
        {/* Background effects */}
        <motion.div 
          className="absolute -inset-4 bg-gradient-to-r from-brand-blue/20 via-brand-teal/20 to-brand-green/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div 
          className="absolute -inset-8 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 rounded-full blur-2xl"
          animate={{
            scale: [1.1, 1.3, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <Circle 
          ref={centerRef} 
          size="lg"
          onHover={onHover} 
          onLeave={onLeave}
          glowColor="rgba(59, 130, 246, 0.3)"
          isActive={isActive}
          variant="primary"
          className="relative z-10"
        >
          <motion.div
            animate={isActive ? {
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <Smartphone className="h-14 w-14 text-brand-blue relative z-10" />
            <motion.div
              className="absolute inset-0 bg-brand-blue/20 rounded-full blur-sm"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </Circle>
      </motion.div>
    </div>
  );
};
