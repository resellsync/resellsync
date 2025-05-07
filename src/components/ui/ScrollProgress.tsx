
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show progress bar after scrolling down a bit
      setIsVisible(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green z-50 origin-left ${!isVisible && 'opacity-0'}`}
      style={{ scaleX: scrollYProgress, transition: "opacity 0.3s ease" }}
    />
  );
};
