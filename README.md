# Mochi Motion 🍡

**Epic spring animations for React & Next.js** — Professional-grade motion that feels like butter!

## 🚀 Why Mochi Motion?

- ✅ **Visually impressive** smooth page transitions + scroll reveals
- ✅ **Next.js optimized** with built-in router integration  
- ✅ **App Router & Pages Router** support
- ✅ **Framer Motion powered** for buttery smooth animations
- ✅ **TypeScript ready** with full type safety
- ✅ **Plug-and-play** — works out of the box

## Installation

```bash
npm install mochi-motion framer-motion react-intersection-observer
```

## Quick Start

### React/Vite/CRA (Universal)

```tsx
// For any React app (Vite, Create React App, etc.)
import { ReactTransition, RevealOnScroll } from 'mochi-motion'

function App() {
  return (
    <ReactTransition>
      <div>
        <RevealOnScroll effect="fade-up">
          <h1>Hello Mochi World!</h1>
        </RevealOnScroll>
      </div>
    </ReactTransition>
  )
}
```

### Next.js App Router (13+)

```tsx
// app/layout.tsx
import { AppRouterTransition } from 'mochi-motion'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterTransition>
          {children}
        </AppRouterTransition>
      </body>
    </html>
  )
}
```

### Pages Router (Legacy)

```tsx
// pages/_app.tsx
import { PageTransition } from 'mochi-motion'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  )
}
```

### Scroll Reveals (Both Routers)

```tsx
import { RevealOnScroll } from 'mochi-motion'

<RevealOnScroll 
  effect="fade-up" 
  preset="wobbly" 
  delay={0.3}
  distance={60}
>
  <h1>Hello World</h1>
</RevealOnScroll>
```

## Components

### ReactTransition (Recommended for React/Vite)

Perfect for any React app (Vite, Create React App, etc.). Zero dependencies on Next.js.

```tsx
// For Vite, CRA, or any React app  
import { ReactTransition } from 'mochi-motion'

function App() {
  return (
    <ReactTransition>
      <YourAppContent />
    </ReactTransition>
  )
}
```

**Props:**
- `children`: React node to animate
- `className`: Additional CSS classes

### AppRouterTransition (Recommended for Next.js App Router)

Perfect for Next.js 13+ App Router. Provides smooth page transitions without router events.

```tsx
// app/layout.tsx
import { AppRouterTransition } from 'mochi-motion'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterTransition>
          {children}
        </AppRouterTransition>
      </body>
    </html>
  )
}
```

**Props:**
- `children`: React node to animate
- `className`: Additional CSS classes

### PageTransition (Pages Router)

For Next.js Pages Router with automatic route change detection.

```tsx
// pages/_app.tsx
import { PageTransition } from 'mochi-motion'

export default function MyApp({ Component, pageProps }) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  )
}
```

### RevealOnScroll

Reveals content when it enters the viewport with customizable animations.

```tsx
import { RevealOnScroll } from 'mochi-motion'

function MyComponent() {
  return (
    <div>
      <RevealOnScroll effect="fade-up" delay={0.2}>
        <h1>This slides up when scrolled into view</h1>
      </RevealOnScroll>
      
      <RevealOnScroll effect="fade-left" delay={0.4}>
        <p>This slides in from the left with a delay</p>
      </RevealOnScroll>
    </div>
  )
}
```

**Props:**
- `effect`: Animation type - `'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'blur-up' | 'rotate-up'` (default: `'fade-up'`)
- `preset`: Spring feel - `'gentle' | 'wobbly' | 'stiff' | 'slow'` (default: `'gentle'`)
- `delay`: Animation delay in seconds (default: `0`)
- `duration`: Animation duration in seconds (default: `0.6`)
- `distance`: Slide distance in pixels (default: `50`)
- `scale`: Scale factor for scale animations (default: `0.8`)
- `threshold`: Intersection observer threshold (default: `0.1`)
- `children`: React node to animate

**Advanced Usage:**
```tsx
<RevealOnScroll 
  effect="fade-left"
  preset="wobbly"
  distance={80}
  scale={0.9}
  delay={0.2}
  threshold={0.3}
  spring={{ stiffness: 200, damping: 15 }}
>
  <div>Epic animations! 🔥</div>
</RevealOnScroll>
```

## Advanced Usage

### App Router with Per-Page Transitions

```tsx
// app/page.tsx
import { RevealOnScroll } from 'mochi-motion'

export default function HomePage() {
  return (
    <div>
      <RevealOnScroll effect="fade-up">
        <h1>Welcome to App Router</h1>
      </RevealOnScroll>
      
      <RevealOnScroll effect="fade-up" delay={0.3}>
        <p>Smooth animations with zero config</p>
      </RevealOnScroll>
    </div>
  )
}
```

### Pages Router with Custom Transitions

```tsx
// pages/index.tsx
import { RevealOnScroll } from 'mochi-motion'

export default function Home() {
  return (
    <div>
      <RevealOnScroll effect="fade-up">
        <h1>Pages Router Support</h1>
      </RevealOnScroll>
      
      <RevealOnScroll effect="fade-left" delay={0.4}>
        <button>Call to Action</button>
      </RevealOnScroll>
    </div>
  )
}
```

### Multiple Scroll Reveals

```tsx
import { RevealOnScroll } from 'mochi-motion'

function HomePage() {
  return (
    <div>
      <RevealOnScroll effect="fade-up">
        <h1>Welcome</h1>
      </RevealOnScroll>
      
      <RevealOnScroll effect="fade-up" delay={0.2}>
        <p>This appears 200ms after the title</p>
      </RevealOnScroll>
      
      <RevealOnScroll effect="fade-left" delay={0.4}>
        <button>Call to Action</button>
      </RevealOnScroll>
    </div>
  )
}
```

## Migration Guide

### From Pages Router to App Router

**Before (Pages Router):**
```tsx
// pages/_app.tsx
import { PageTransition } from 'mochi-motion'

export default function App({ Component, pageProps }) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  )
}
```

**After (App Router):**
```tsx
// app/layout.tsx
import { AppRouterTransition } from 'mochi-motion'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterTransition>
          {children}
        </AppRouterTransition>
      </body>
    </html>
  )
}
```

## 🎯 Complete TypeScript Support

Mochi Motion is built with TypeScript and includes comprehensive type definitions for maximum developer experience:

### Core Animation Types

```tsx
// Animation effect types with full IntelliSense
type AnimationEffect = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right'
  | 'scale-up' 
  | 'scale-down' 
  | 'blur-up' 
  | 'rotate-up'

// Spring preset configurations
type SpringPreset = 'gentle' | 'wobbly' | 'stiff' | 'slow' | 'custom'

// Custom spring physics configuration
interface SpringConfig {
  stiffness: number  // 80-300 (default: 100)
  damping: number    // 8-30 (default: 20) 
  mass: number       // 0.8-1.5 (default: 1)
}
```

### Complete Interface Definitions

```tsx
// Spring physics configuration
interface SpringConfig {
  stiffness?: number    // Spring stiffness (default: 100)
  damping?: number      // Spring damping (default: 10) 
  mass?: number         // Mass of the spring (default: 1)
  velocity?: number     // Initial velocity (default: 0)
}

// Animation configuration for advanced usage
interface AnimationConfig {
  duration?: number     // Animation duration in seconds (default: 0.6)
  delay?: number        // Animation delay in seconds (default: 0)
  preset?: SpringPreset // Spring animation preset
  spring?: SpringConfig // Custom spring configuration
  distance?: number     // Distance for slide animations (default: 50px)
  scale?: number        // Scale factor for scale animations (default: 0.8)
  blur?: number         // Blur amount for blur effects (default: 10px)
  rotate?: number       // Rotation angle for rotate effects (default: 10deg)
}

// Base props for all Mochi Motion components
interface MochiMotionProps {
  children: React.ReactNode  // Content to animate
  className?: string        // Additional CSS classes
}

// RevealOnScroll component props (extends AnimationConfig)
interface RevealOnScrollProps extends AnimationConfig, MochiMotionProps {
  // Animation & Effects
  effect?: AnimationEffect           // default: 'fade-up'
  
  // Intersection Observer Configuration  
  threshold?: number                // 0-1 visibility ratio (default: 0.1)
  rootMargin?: string              // CSS margin string (default: '0px')
  triggerOnce?: boolean            // Animate only once (default: true)
  
  // Control
  disabled?: boolean               // Disable animation (default: false)
  
  // Styling
  style?: React.CSSProperties      // Inline styles
}
```

### Page Transition Props

```tsx
interface PageTransitionProps {
  children: React.ReactNode
  className?: string
  preset?: SpringPreset
  spring?: SpringConfig
}

interface AppRouterTransitionProps extends PageTransitionProps {
  // Same props as PageTransition
}

interface ReactTransitionProps extends PageTransitionProps {
  // Same props as PageTransition  
}
```

### Spring Presets Type Definitions

```tsx
// Exported preset configurations
export const SPRING_PRESETS: Record<SpringPreset, SpringConfig> = {
  gentle: { stiffness: 80, damping: 20, mass: 1 },
  wobbly: { stiffness: 120, damping: 8, mass: 1.2 },
  stiff: { stiffness: 300, damping: 30, mass: 0.8 },
  slow: { stiffness: 60, damping: 25, mass: 1.5 },
  custom: { stiffness: 100, damping: 20, mass: 1 }
}
```

### Advanced Type Usage Examples

```tsx
import { 
  RevealOnScroll, 
  SpringConfig,
  AnimationEffect,
  SPRING_PRESETS 
} from 'mochi-motion'

// Custom spring with full type safety
const customSpring: SpringConfig = {
  stiffness: 200,  // ✅ Type checked
  damping: 15,     // ✅ IntelliSense works  
  mass: 1.1        // ✅ Auto-completion
}

// Typed animation effects
const effects: AnimationEffect[] = [
  'fade-up',     // ✅ All effects available
  'scale-up',    // ✅ in autocomplete
  'blur-up',     // ✅ 
  'rotate-up'    // ✅
]

// Component with full prop typing
function EpicCard({ title, delay }: { title: string, delay: number }) {
  return (
    <RevealOnScroll
      effect="scale-up"        // ✅ Typed union
      preset="wobbly"          // ✅ Preset validation  
      spring={customSpring}    // ✅ SpringConfig interface
      delay={delay}            // ✅ number type
      distance={60}            // ✅ Pixel distance
      threshold={0.2}          // ✅ 0-1 range hint
      className="epic-card"    // ✅ Optional string
    >
      <h3>{title}</h3>
    </RevealOnScroll>
  )
}
```

### Generic Component Typing

```tsx
// For wrapper components with children
interface MyComponentProps {
  title: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

function MyComponent({ title, variant = 'primary', children }: MyComponentProps) {
  return (
    <RevealOnScroll 
      effect={variant === 'primary' ? 'fade-up' : 'scale-up'}
      preset="gentle"
    >
      <div className={`card card--${variant}`}>
        <h2>{title}</h2>
        {children}
      </div>
    </RevealOnScroll>
  )
}
```

### Error Prevention with Types

```tsx
// ❌ TypeScript will catch these errors:
<RevealOnScroll 
  effect="invalid-effect"     // ❌ Type error
  preset="wrong-preset"       // ❌ Type error  
  delay="not-a-number"        // ❌ Type error
  spring={{ wrong: 'config' }} // ❌ Type error
/>

// ✅ Correct usage with full type safety:
<RevealOnScroll
  effect="fade-up"            // ✅ Valid effect
  preset="wobbly"             // ✅ Valid preset
  delay={0.3}                 // ✅ Correct type
  spring={{ 
    stiffness: 150,           // ✅ Valid spring config
    damping: 12, 
    mass: 1.1 
  }}
>
  <div>Perfect type safety!</div>
</RevealOnScroll>
```

### IDE Benefits

- **🎯 IntelliSense**: Complete autocomplete for all props and values
- **🔍 Hover Info**: JSDoc descriptions for every prop
- **⚠️ Error Detection**: Catch mistakes before runtime  
- **🔄 Refactoring**: Safe renames across your entire codebase
- **📖 Documentation**: Inline prop documentation in your IDE

## Requirements

### For React/Vite/CRA:
- React 17.0.0 or higher
- Framer Motion 10.0.0 or higher

### For Next.js:
- Next.js 13.0.0 or higher (App Router) or Next.js 12.0.0+ (Pages Router)
- Framer Motion 10.0.0 or higher

## License

MIT License - Copyright (c) 2025 @mirayatech

---

Made with ❤️ and mochi by @mirayatech for the Next.js community 

## 🔥 **Epic Animation Showcase**

### Professional Spring Presets

```tsx
import { RevealOnScroll, SPRING_PRESETS } from 'mochi-motion'

// Gentle - Perfect for elegant interfaces
<RevealOnScroll preset="gentle" effect="fade-up">
  <Card>Smooth as silk</Card>
</RevealOnScroll>

// Wobbly - Add personality to your UI
<RevealOnScroll preset="wobbly" effect="scale-up">
  <Button>Bouncy interactions</Button>
</RevealOnScroll>

// Stiff - Snappy, responsive feel
<RevealOnScroll preset="stiff" effect="fade-left" distance={60}>
  <Alert>Quick and precise</Alert>
</RevealOnScroll>
```

### Advanced Effects Collection

```tsx
// Blur reveal with custom spring
<RevealOnScroll 
  effect="blur-up" 
  preset="gentle"
  distance={40}
>
  <Hero>Cinematic entrance</Hero>
</RevealOnScroll>

// Rotate with bounce
<RevealOnScroll 
  effect="rotate-up"
  preset="wobbly"
  spring={{ stiffness: 200, damping: 12 }}
>
  <Card>Playful twist</Card>
</RevealOnScroll>

// Scale with custom timing
<RevealOnScroll 
  effect="scale-up"
  scale={0.7}
  preset="slow"
  delay={0.5}
>
  <Modal>Dramatic reveal</Modal>
</RevealOnScroll>
```

### Staggered Animations (Like Framer, but better)

```tsx
function FeatureGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {features.map((feature, i) => (
        <RevealOnScroll
          key={feature.id}
          effect="fade-up"
          preset="wobbly"
          delay={i * 0.1} // Stagger effect
          distance={60}
        >
          <FeatureCard {...feature} />
        </RevealOnScroll>
      ))}
    </div>
  )
}
```

### Performance-Optimized Reveals

```tsx
// Custom threshold for better performance
<RevealOnScroll 
  effect="fade-left"
  threshold={0.3}
  rootMargin="50px"
  preset="stiff"
>
  <ExpensiveComponent />
</RevealOnScroll>
``` 