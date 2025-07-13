import React from "react";
import { motion } from "framer-motion";

/**
 * Props for the AppRouterTransition component
 */
interface AppRouterTransitionProps {
  /** The content to animate */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /**
   * Animation preset for different feels
   * @default "gentle"
   */
  preset?: "gentle" | "wobbly" | "stiff" | "slow";
}

/**
 * 🍡 **AppRouterTransition** - Smooth page transitions for Next.js App Router
 *
 * Perfect for Next.js 13+ App Router. Provides bouncy, smooth page transitions
 * without requiring router events. Just wrap your app content and enjoy!
 *
 * @example
 * ```tsx
 * // app/layout.tsx
 * import { AppRouterTransition } from 'mochi-motion'
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <AppRouterTransition>
 *           {children}
 *         </AppRouterTransition>
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 */
export const AppRouterTransition: React.FC<AppRouterTransitionProps> = ({
  children,
  className = "",
  preset = "gentle",
}) => {
  // Professional spring configurations
  const springPresets = {
    gentle: { stiffness: 140, damping: 20, mass: 1 },
    wobbly: { stiffness: 200, damping: 15, mass: 1 },
    stiff: { stiffness: 300, damping: 25, mass: 1 },
    slow: { stiffness: 100, damping: 20, mass: 1.3 },
  };

  return (
    <motion.div
      className={`app-router-transition ${className}`}
      initial={{
        opacity: 0,
        y: 25,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -25,
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        ...springPresets[preset],
      }}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
};
