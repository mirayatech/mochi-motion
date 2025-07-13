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
  effect?: "fade-up" | "fade-down" | "fade-left" | "fade-right";
  /**
   * Delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number;
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
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { delay } },
    hidden: {
      opacity: 0,
      y: effect === "fade-up" ? 30 : effect === "fade-down" ? -30 : 0,
      x: effect === "fade-left" ? -30 : effect === "fade-right" ? 30 : 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
