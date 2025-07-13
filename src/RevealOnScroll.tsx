import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const RevealOnScroll = ({
  children,
  effect = "fade-up",
  delay = 0,
}: {
  children: React.ReactNode;
  effect?: "fade-up" | "fade-down" | "fade-left" | "fade-right";
  delay?: number;
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
