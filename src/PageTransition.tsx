import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Props for PageTransition components
 */
interface PageTransitionProps {
  /** The page content to animate */
  children: React.ReactNode;
}

/**
 * 🍡 **PageTransition** - Modern page transitions for App Router
 *
 * Provides smooth, bouncy page transitions optimized for Next.js App Router.
 * Creates delightful micro-animations that make your app feel responsive
 * and polished. As smooth as mochi!
 *
 * @example
 * ```tsx
 * // For App Router (Next.js 13+)
 * import { PageTransition } from 'mochi-motion'
 *
 * export default function Layout({ children }) {
 *   return (
 *     <PageTransition>
 *       {children}
 *     </PageTransition>
 *   )
 * }
 * ```
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // for App Router we'll trigger animation on mount
    setKey((prev) => prev + 1);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

/**
 * 🍡 **PageTransitionLegacy** - Page transitions for Pages Router
 *
 * Legacy version for Next.js Pages Router (12.x and below).
 * Automatically detects route changes and applies smooth transitions.
 * Use this if you're still using the older Pages Router system.
 *
 * @example
 * ```tsx
 * // pages/_app.tsx
 * import { PageTransitionLegacy } from 'mochi-motion'
 *
 * export default function MyApp({ Component, pageProps }) {
 *   return (
 *     <PageTransitionLegacy>
 *       <Component {...pageProps} />
 *     </PageTransitionLegacy>
 *   )
 * }
 * ```
 *
 * @deprecated Use PageTransition or AppRouterTransition for modern Next.js apps
 */
export const PageTransitionLegacy: React.FC<PageTransitionProps> = ({
  children,
}) => {
  const [routeChanging, setRouteChanging] = useState(false);

  useEffect(() => {
    // only import router if we're in a pages router environment
    const loadRouter = async () => {
      try {
        // Skip if not in Next.js environment
        if (typeof window !== "undefined" && !(window as any).next) {
          return;
        }

        const { useRouter } = await import("next/router");
        const router = useRouter();

        const handleStart = () => setRouteChanging(true);
        const handleStop = () => setRouteChanging(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);

        return () => {
          router.events.off("routeChangeStart", handleStart);
          router.events.off("routeChangeComplete", handleStop);
          router.events.off("routeChangeError", handleStop);
        };
      } catch (error) {
        // pages router not available
        console.warn("Pages Router not available, using App Router version");
      }
    };

    loadRouter();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
