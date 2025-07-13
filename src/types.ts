/**
 * 🍡 **Mochi Motion Types** - TypeScript definitions for epic animations
 */

/**
 * Available animation effects for scroll reveals
 */
export type AnimationEffect =
  | "fade-up" // Content slides up from below
  | "fade-down" // Content slides down from above
  | "fade-left" // Content slides in from the left
  | "fade-right" // Content slides in from the right
  | "scale-up" // Content scales up with fade
  | "scale-down" // Content scales down with fade
  | "blur-up" // Content slides up with blur effect
  | "rotate-up"; // Content rotates and slides up

/**
 * Spring animation presets for different feels
 */
export type SpringPreset =
  | "gentle" // Soft, subtle animations
  | "wobbly" // Bouncy, playful feel
  | "stiff" // Quick, snappy animations
  | "slow" // Smooth, deliberate motion
  | "custom"; // Use custom spring config

/**
 * Custom spring physics configuration
 */
export interface SpringConfig {
  /** Spring stiffness (default: 100) */
  stiffness?: number;
  /** Spring damping (default: 10) */
  damping?: number;
  /** Mass of the spring (default: 1) */
  mass?: number;
  /** Velocity (default: 0) */
  velocity?: number;
}

/**
 * Advanced animation configuration
 */
export interface AnimationConfig {
  /** Animation duration in seconds (default: 0.6) */
  duration?: number;
  /** Animation delay in seconds (default: 0) */
  delay?: number;
  /** Spring animation preset */
  preset?: SpringPreset;
  /** Custom spring configuration (when preset is 'custom') */
  spring?: SpringConfig;
  /** Distance for slide animations (default: 50px) */
  distance?: number;
  /** Scale factor for scale animations (default: 0.8) */
  scale?: number;
  /** Blur amount for blur effects (default: 10px) */
  blur?: number;
  /** Rotation angle for rotate effects (default: 10deg) */
  rotate?: number;
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
