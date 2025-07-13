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
}) => {
  return (
    <motion.div
      className={`react-transition ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};
