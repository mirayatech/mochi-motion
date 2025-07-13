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
}) => {
  return (
    <motion.div
      className={`app-router-transition ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
