
import React, { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  baseVelocity?: number;
  direction?: 'up' | 'down';
}

export const ParallaxSection = ({ 
  children, 
  className = "",
  baseVelocity = 0.2,
  direction = "up"
}: ParallaxSectionProps) => {
  const { scrollYProgress } = useScroll();
  
  // Transform the scroll progress into a parallax effect
  const yPos = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [0, -100 * baseVelocity] : [0, 100 * baseVelocity]
  );

  return (
    <motion.div 
      className={`relative ${className}`}
      style={{ y: yPos }}
    >
      {children}
    </motion.div>
  );
};
