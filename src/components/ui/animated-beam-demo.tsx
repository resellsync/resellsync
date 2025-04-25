"use client";

import React, { forwardRef, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";
import { 
  Smartphone,
  ShoppingCart,
  Store,
  Package,
  Boxes,
  Building2,
  Table
} from "lucide-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Circle = forwardRef<
  HTMLDivElement,
  { 
    className?: string; 
    children?: React.ReactNode;
    onHover?: () => void;
    onLeave?: () => void;
    size?: "sm" | "md" | "lg";
    glowColor?: string;
    isActive?: boolean;
    variant?: "primary" | "secondary" | "sheets";
  }
>(({ 
  className, 
  children, 
  onHover, 
  onLeave, 
  size = "md", 
  glowColor = "rgba(59, 130, 246, 0.5)", 
  isActive = false,
  variant = "secondary"
}, ref) => {
  const sizeClasses = {
    sm: "size-14",
    md: "size-16",
    lg: "size-28"
  };

  const variantClasses = {
    primary: "bg-gradient-to-br from-brand-blue/20 via-brand-teal/20 to-brand-green/20 border-white/30",
    secondary: "bg-white/10 border-white/20",
    sheets: "bg-gradient-to-br from-green-500/20 to-green-600/20 border-white/30"
  };

  const iconControls = useAnimation();
  const glowControls = useAnimation();

  useEffect(() => {
    if (isActive) {
      iconControls.start({
        rotate: [0, -10, 10, -10, 10, 0],
        scale: [1, 1.1, 1],
        transition: {
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatType: "reverse"
        }
      });

      glowControls.start({
        scale: [1, 1.4, 1],
        opacity: [0.5, 0.8, 0.5],
        transition: {
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity
        }
      });
    } else {
      iconControls.start({ rotate: 0, scale: 1 });
      glowControls.start({ scale: 1, opacity: 0.5 });
    }
  }, [isActive, iconControls, glowControls]);

  return (
    <motion.div
      ref={ref}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className="relative group"
      animate={{
        y: isActive ? [-2, 2, -2] : 0
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
      >
        <motion.div
          className={cn(
            "z-20 flex items-center justify-center rounded-full transition-all duration-500",
            "backdrop-blur-sm border-2",
            variantClasses[variant],
            isActive && "border-white/40",
            sizeClasses[size],
            className
          )}
          style={{
            boxShadow: `0 0 ${isActive ? '30px' : '20px'} ${glowColor}`,
          }}
          animate={iconControls}
        >
          {children}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 -z-10 rounded-full opacity-50"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}, transparent 70%)`,
        }}
        animate={glowControls}
      />

      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 -z-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue/30 via-brand-teal/30 to-brand-green/30 blur-xl" />
        </motion.div>
      )}
    </motion.div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const sheetsRef = useRef<HTMLDivElement>(null);
  const ebayRef = useRef<HTMLDivElement>(null);
  const backmarketRef = useRef<HTMLDivElement>(null);
  const amazonRef = useRef<HTMLDivElement>(null);
  const reebeloRef = useRef<HTMLDivElement>(null);
  const swappaRef = useRef<HTMLDivElement>(null);

  const [activeBeam, setActiveBeam] = useState<number | null>(null);
  const [autoAnimate, setAutoAnimate] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoAnimate) {
      interval = setInterval(() => {
        setActiveBeam((prev) => {
          if (prev === null || prev >= 5) return -1;
          return prev + 1;
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoAnimate]);

  const handleHover = (index: number) => {
    setAutoAnimate(false);
    setActiveBeam(index);
  };

  const handleLeave = () => {
    setAutoAnimate(true);
  };

  return (
    <div className="relative w-full">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-brand-teal/5 to-brand-green/5 blur-3xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex h-[500px] w-full items-center justify-center"
        ref={containerRef}
      >
        {/* Google Sheets Integration */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-24 top-1/2 -translate-y-1/2"
        >
          <Circle 
            ref={sheetsRef} 
            size="md"
            onHover={() => handleHover(-1)} 
            onLeave={handleLeave}
            glowColor="rgba(34, 197, 94, 0.3)"
            isActive={activeBeam === -1}
            variant="sheets"
          >
            <Table className="h-8 w-8 text-green-500" />
          </Circle>
        </motion.div>

        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, type: "spring" }}
          >
            <Circle 
              ref={centerRef} 
              size="lg"
              onHover={() => handleHover(0)} 
              onLeave={handleLeave}
              glowColor="rgba(59, 130, 246, 0.3)"
              isActive={activeBeam === 0}
              variant="primary"
            >
              <Smartphone className="h-14 w-14 text-brand-blue" />
            </Circle>
          </motion.div>
        </div>

        {/* Marketplace Icons */}
        <motion.div 
          className="absolute right-24 top-0 bottom-0 flex flex-col justify-center gap-10"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { ref: ebayRef, icon: <ShoppingCart className="h-8 w-8 text-brand-blue" />, delay: 0.4 },
            { ref: backmarketRef, icon: <Store className="h-8 w-8 text-brand-teal" />, delay: 0.5 },
            { ref: amazonRef, icon: <Package className="h-8 w-8 text-brand-blue" />, delay: 0.6 },
            { ref: reebeloRef, icon: <Building2 className="h-8 w-8 text-brand-teal" />, delay: 0.7 },
            { ref: swappaRef, icon: <Boxes className="h-8 w-8 text-brand-blue" />, delay: 0.8 }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: item.delay }}
            >
              <Circle 
                ref={item.ref}
                size="md"
                onHover={() => handleHover(index + 1)} 
                onLeave={handleLeave}
                glowColor={index % 2 === 0 ? "rgba(59, 130, 246, 0.3)" : "rgba(45, 212, 191, 0.3)"}
                isActive={activeBeam === index + 1}
              >
                {item.icon}
              </Circle>
            </motion.div>
          ))}
        </motion.div>

        {/* Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={sheetsRef}
          toRef={centerRef}
          curvature={0}
          isActive={activeBeam === -1 || activeBeam === 0}
          variant="teal"
          fromSize="md"
          toSize="lg"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={ebayRef}
          curvature={20}
          isActive={activeBeam === 0 || activeBeam === 1}
          variant="blue"
          fromSize="lg"
          toSize="md"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={backmarketRef}
          curvature={10}
          isActive={activeBeam === 0 || activeBeam === 2}
          variant="teal"
          fromSize="lg"
          toSize="md"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={amazonRef}
          isActive={activeBeam === 0 || activeBeam === 3}
          variant="blue"
          fromSize="lg"
          toSize="md"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={reebeloRef}
          curvature={-10}
          isActive={activeBeam === 0 || activeBeam === 4}
          variant="teal"
          fromSize="lg"
          toSize="md"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={swappaRef}
          curvature={-20}
          isActive={activeBeam === 0 || activeBeam === 5}
          variant="blue"
          fromSize="lg"
          toSize="md"
        />
      </motion.div>
    </div>
  );
} 