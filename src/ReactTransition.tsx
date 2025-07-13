import React from "react";
import { motion } from "framer-motion";

/**
 * Props for the ReactTransition component
 */
interface ReactTransitionProps {
  /** The content to animate */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /**
   * Animation preset for different feels
   * @default "gentle"
   */
  preset?: "gentle" | "wobbly" | "stiff" | "slow";
  /**
   * Animation duration in seconds
   * @default 0.4
   */
  duration?: number;
}

/**
 * 🍡 **ReactTransition** - Universal page transitions for any React app
 *
 * Perfect for Vite, Create React App, or any React framework.
 * Provides smooth, bouncy transitions without any framework dependencies.
 * Just wrap your app content and enjoy the smooth mochi vibes!
 *
 * @example
 * ```tsx
 * // For Vite, CRA, or any React app
 * import { ReactTransition } from 'mochi-motion'
 *
 * function App() {
 *   return (
 *     <ReactTransition>
 *       <YourAppContent />
 *     </ReactTransition>
 *   )
 * }
 * ```
 */
export const ReactTransition: React.FC<ReactTransitionProps> = ({
  children,
  className = "",
  preset = "gentle",
  duration = 0.4,
}) => {
  // Professional spring presets
  const springPresets = {
    gentle: { stiffness: 120, damping: 20, mass: 1 },
    wobbly: { stiffness: 180, damping: 12, mass: 1 },
    stiff: { stiffness: 250, damping: 25, mass: 1 },
    slow: { stiffness: 80, damping: 18, mass: 1.2 },
  };

  return (
    <motion.div
      className={`react-transition ${className}`}
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        y: -30,
        scale: 0.95,
        filter: "blur(5px)",
      }}
      transition={{
        type: "spring",
        ...springPresets[preset],
        duration,
      }}
      style={{
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </motion.div>
  );
};
