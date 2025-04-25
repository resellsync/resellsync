
import React, { forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface CircleProps {
  className?: string;
  children?: React.ReactNode;
  onHover?: () => void;
  onLeave?: () => void;
  size?: "sm" | "md" | "lg";
  glowColor?: string;
  isActive?: boolean;
  variant?: "primary" | "secondary" | "sheets";
}

export const Circle = forwardRef<HTMLDivElement, CircleProps>(({
  className,
  children,
  onHover,
  onLeave,
  size = "md",
  glowColor = "rgba(59, 130, 246, 0.5)",
  isActive = false,
  variant = "secondary"
}, ref) => {
  const iconControls = useAnimation();
  const glowControls = useAnimation();

  React.useEffect(() => {
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
