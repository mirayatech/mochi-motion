import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Props for the RevealOnScroll component
 */
interface RevealOnScrollProps {
  /** The content to animate when it comes into view */
  children: React.ReactNode;
  /**
   * Animation effect to apply
   * @default "fade-up"
   */
  effect?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "scale-up"
    | "scale-down"
    | "blur-up"
    | "rotate-up";
  /**
   * Delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number;
  /**
   * Animation duration in seconds
   * @default 0.6
   */
  duration?: number;
  /**
   * Spring animation preset for different feels
   * @default "gentle"
   */
  preset?: "gentle" | "wobbly" | "stiff" | "slow" | "custom";
  /**
   * Custom spring configuration (when preset is 'custom')
   */
  spring?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  /**
   * Distance for slide animations in pixels
   * @default 50
   */
  distance?: number;
  /**
   * Scale factor for scale animations
   * @default 0.8
   */
  scale?: number;
  /**
   * Intersection observer threshold
   * @default 0.1
   */
  threshold?: number;
  /**
   * Root margin for intersection observer
   * @default "0px"
   */
  rootMargin?: string;
}

/**
 * 🍡 **RevealOnScroll** - Smooth scroll-triggered animations
 *
 * Reveals content with beautiful animations when it enters the viewport.
 * Uses Intersection Observer for optimal performance. Perfect for creating
 * engaging scroll experiences that feel as smooth as mochi!
 *
 * @example
 * ```tsx
 * import { RevealOnScroll } from 'mochi-motion'
 *
 * function MyComponent() {
 *   return (
 *     <div>
 *       <RevealOnScroll effect="fade-up" delay={0.2}>
 *         <h1>This slides up when scrolled into view</h1>
 *       </RevealOnScroll>
 *
 *       <RevealOnScroll effect="fade-left" delay={0.4}>
 *         <p>This slides in from the left with a delay</p>
 *       </RevealOnScroll>
 *     </div>
 *   )
 * }
 * ```
 */
export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  effect = "fade-up",
  delay = 0,
  duration = 0.6,
  preset = "gentle",
  spring,
  distance = 50,
  scale = 0.8,
  threshold = 0.1,
  rootMargin = "0px",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin,
  });

  // Spring presets - professional animation configs
  const springPresets = {
    gentle: { stiffness: 100, damping: 15, mass: 1 },
    wobbly: { stiffness: 200, damping: 12, mass: 1 },
    stiff: { stiffness: 300, damping: 20, mass: 1 },
    slow: { stiffness: 80, damping: 20, mass: 1.5 },
    custom: spring || { stiffness: 100, damping: 15, mass: 1 },
  };

  const springConfig = springPresets[preset];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Enhanced animation variants with spring physics
  const getVariants = () => {
    const baseTransition = {
      type: "spring",
      ...springConfig,
      delay,
    };

    const baseHidden = { opacity: 0 };
    const baseVisible = {
      opacity: 1,
      transition: baseTransition,
    };

    switch (effect) {
      case "fade-up":
        return {
          hidden: { ...baseHidden, y: distance, scale: 0.95 },
          visible: { ...baseVisible, y: 0, scale: 1 },
        };
      case "fade-down":
        return {
          hidden: { ...baseHidden, y: -distance, scale: 0.95 },
          visible: { ...baseVisible, y: 0, scale: 1 },
        };
      case "fade-left":
        return {
          hidden: {
            ...baseHidden,
            x: -distance,
            scale: 0.95,
            rotateY: -5,
          },
          visible: {
            ...baseVisible,
            x: 0,
            scale: 1,
            rotateY: 0,
          },
        };
      case "fade-right":
        return {
          hidden: {
            ...baseHidden,
            x: distance,
            scale: 0.95,
            rotateY: 5,
          },
          visible: {
            ...baseVisible,
            x: 0,
            scale: 1,
            rotateY: 0,
          },
        };
      case "scale-up":
        return {
          hidden: { ...baseHidden, scale },
          visible: { ...baseVisible, scale: 1 },
        };
      case "scale-down":
        return {
          hidden: { ...baseHidden, scale: 1 / scale },
          visible: { ...baseVisible, scale: 1 },
        };
      case "blur-up":
        return {
          hidden: {
            ...baseHidden,
            y: distance,
            filter: "blur(10px)",
            scale: 0.95,
          },
          visible: {
            ...baseVisible,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
          },
        };
      case "rotate-up":
        return {
          hidden: {
            ...baseHidden,
            y: distance,
            rotate: -10,
            scale: 0.95,
          },
          visible: {
            ...baseVisible,
            y: 0,
            rotate: 0,
            scale: 1,
          },
        };
      default:
        return {
          hidden: { ...baseHidden, y: distance },
          visible: { ...baseVisible, y: 0 },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
};
