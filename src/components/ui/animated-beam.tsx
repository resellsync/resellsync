"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLDivElement>;
  fromRef: React.RefObject<HTMLDivElement>;
  toRef: React.RefObject<HTMLDivElement>;
  curvature?: number;
  endYOffset?: number;
  reverse?: boolean;
  isActive?: boolean;
  className?: string;
  variant?: "blue" | "teal";
  fromSize?: "sm" | "md" | "lg";
  toSize?: "sm" | "md" | "lg";
}

export const AnimatedBeam = ({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  endYOffset = 0,
  reverse = false,
  isActive = false,
  className,
  variant = "blue",
  fromSize = "md",
  toSize = "md"
}: AnimatedBeamProps) => {
  const pathRef = useRef<SVGPathElement>(null);

  const getIconRadius = (size: "sm" | "md" | "lg") => {
    switch (size) {
      case "sm": return 28;
      case "md": return 32;
      case "lg": return 56;
      default: return 32;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const from = fromRef.current;
    const to = toRef.current;

    if (!container || !from || !to || !pathRef.current) return;

    const updatePath = () => {
      const container = containerRef.current;
      const from = fromRef.current;
      const to = toRef.current;
      const path = pathRef.current;

      if (!container || !from || !to || !path) return;

      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Calculate centers
      const fromCenterX = fromRect.left + fromRect.width / 2 - containerRect.left;
      const fromCenterY = fromRect.top + fromRect.height / 2 - containerRect.top;
      const toCenterX = toRect.left + toRect.width / 2 - containerRect.left;
      const toCenterY = toRect.top + toRect.height / 2 - containerRect.top + (endYOffset || 0);

      // Calculate angle between points
      const angle = Math.atan2(toCenterY - fromCenterY, toCenterX - fromCenterX);

      // Get radii
      const fromRadius = getIconRadius(fromSize) / 2;
      const toRadius = getIconRadius(toSize) / 2;

      // Calculate start and end points at the edge of the circles
      const fromX = fromCenterX + Math.cos(angle) * fromRadius;
      const fromY = fromCenterY + Math.sin(angle) * fromRadius;
      const toX = toCenterX - Math.cos(angle) * toRadius;
      const toY = toCenterY - Math.sin(angle) * toRadius;

      // Calculate control point for smoother curve
      const midX = (fromX + toX) / 2;
      const midY = (fromY + toY) / 2 + (curvature || 0);

      const pathD = `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`;
      path.setAttribute("d", pathD);
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    window.addEventListener("scroll", updatePath);

    return () => {
      window.removeEventListener("resize", updatePath);
      window.removeEventListener("scroll", updatePath);
    };
  }, [containerRef, fromRef, toRef, curvature, endYOffset, reverse, fromSize, toSize]);

  const container = containerRef.current;
  const containerRect = container?.getBoundingClientRect();
  const containerWidth = containerRect?.width ?? 0;
  const containerHeight = containerRect?.height ?? 0;

  return (
    <motion.svg
      width={containerWidth}
      height={containerHeight}
      viewBox={`0 0 ${containerWidth} ${containerHeight}`}
      className={cn(
        "pointer-events-none absolute left-0 top-0",
        isActive ? "opacity-100" : "opacity-20",
        className
      )}
      style={{
        zIndex: 10,
      }}
    >
      <path
        ref={pathRef}
        className={cn(
          variant === "blue" ? "stroke-brand-blue" : "stroke-brand-teal",
          isActive ? "opacity-40" : "opacity-20",
          "transition-all duration-500"
        )}
        fill="none"
        strokeWidth="1"
        style={{
          filter: isActive 
            ? `drop-shadow(0 0 8px ${variant === "blue" ? "rgba(59, 130, 246, 0.3)" : "rgba(45, 212, 191, 0.3)"})`
            : "none"
        }}
      />
    </motion.svg>
  );
}; 