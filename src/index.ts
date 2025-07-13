/**
 * 🍡 **Mochi Motion** - Bouncy, smooth animations for Next.js
 *
 * A delightful animation library that makes your Next.js app feel as smooth
 * and bouncy as mochi! Perfect for creating engaging user experiences with
 * minimal configuration.
 *
 * @author @mirayatech
 * @version 1.0.0
 * @license MIT
 *
 * @example
 * ```tsx
 * import { AppRouterTransition, RevealOnScroll } from 'mochi-motion'
 *
 * // App Router transitions
 * <AppRouterTransition>
 *   <YourApp />
 * </AppRouterTransition>
 *
 * // Scroll animations
 * <RevealOnScroll effect="fade-up" delay={0.3}>
 *   <h1>Hello World!</h1>
 * </RevealOnScroll>
 * ```
 */

import { PageTransition, PageTransitionLegacy } from "./PageTransition";
import { RevealOnScroll } from "./RevealOnScroll";
import { AppRouterTransition } from "./AppRouterTransition";
import { ReactTransition } from "./ReactTransition";

// Export types for better TypeScript experience
export type {
  AnimationEffect,
  AnimationConfig,
  MochiMotionProps,
} from "./types";

export {
  /** Universal page transitions for any React app (Vite, CRA, etc.) */
  ReactTransition,
  /** Modern page transitions for Next.js App Router */
  PageTransition,
  /** Legacy page transitions for Next.js Pages Router */
  PageTransitionLegacy,
  /** Smooth scroll-triggered animations */
  RevealOnScroll,
  /** Optimized transitions for App Router */
  AppRouterTransition,
};
