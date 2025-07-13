import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
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

export const PageTransitionLegacy = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [routeChanging, setRouteChanging] = useState(false);

  useEffect(() => {
    // only import router if we're in a pages router environment
    const loadRouter = async () => {
      try {
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
