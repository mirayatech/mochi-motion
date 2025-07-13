import React from "react";
import { motion } from "framer-motion";

interface AppRouterTransitionProps {
  children: React.ReactNode;
  className?: string;
}

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
