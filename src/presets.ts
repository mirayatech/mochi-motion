/**
 * 🍡 **Mochi Motion Presets** - Epic animation configurations
 *
 * Professional-grade animation presets that make your UI feel like butter.
 * These are the same configs used by top-tier design systems.
 */

export const SPRING_PRESETS = {
  gentle: {
    stiffness: 120,
    damping: 20,
    mass: 1,
    description: "Soft, elegant motion perfect for subtle interactions",
  },
  wobbly: {
    stiffness: 180,
    damping: 12,
    mass: 1,
    description: "Playful bounce that adds personality",
  },
  stiff: {
    stiffness: 300,
    damping: 25,
    mass: 1,
    description: "Snappy, responsive feel for quick interactions",
  },
  slow: {
    stiffness: 80,
    damping: 18,
    mass: 1.2,
    description: "Deliberate, smooth motion for emphasis",
  },
  crisp: {
    stiffness: 250,
    damping: 30,
    mass: 0.8,
    description: "Clean, precise animations",
  },
  bouncy: {
    stiffness: 200,
    damping: 8,
    mass: 1,
    description: "Extra bounce for playful interfaces",
  },
} as const;

export const REVEAL_PRESETS = {
  subtle: {
    distance: 30,
    scale: 0.98,
    preset: "gentle" as const,
    description: "Minimal, sophisticated reveals",
  },
  dramatic: {
    distance: 80,
    scale: 0.9,
    preset: "wobbly" as const,
    description: "Bold, attention-grabbing animations",
  },
  professional: {
    distance: 40,
    scale: 0.95,
    preset: "stiff" as const,
    description: "Clean, business-ready animations",
  },
  playful: {
    distance: 60,
    scale: 0.85,
    preset: "bouncy" as const,
    description: "Fun, engaging interactions",
  },
} as const;

/**
 * Easing functions that feel like magic ✨
 */
export const MAGIC_EASINGS = {
  // Custom cubic-bezier curves for that professional feel
  smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  snappy: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  elegant: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  playful: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  precise: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;
