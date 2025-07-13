/**
 * 🍡 **Mochi Motion Types** - TypeScript definitions for smooth animations
 */

/**
 * Available animation effects for scroll reveals
 */
export type AnimationEffect =
  | "fade-up" // Content slides up from below
  | "fade-down" // Content slides down from above
  | "fade-left" // Content slides in from the right
  | "fade-right"; // Content slides in from the left

/**
 * Configuration options for animations
 */
export interface AnimationConfig {
  /** Animation duration in milliseconds */
  duration?: number;
  /** Animation delay in seconds */
  delay?: number;
  /** Custom easing function */
  easing?: string;
}

/**
 * Common props shared by all Mochi Motion components
 */
export interface MochiMotionProps {
  /** Content to animate */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}
