# Mochi Motion

**Professional spring animations for React & Next.js that feel like butter.**

Mochi Motion brings world-class animation to your React applications with zero configuration. Built on Framer Motion with intelligent defaults, it delivers the smooth, bouncy animations you see in the best modern web apps.

<br/>

## Why Mochi Motion?

**It just works.** Drop it in your React or Next.js app and get beautiful animations instantly. No complex configuration, no performance headaches, no framework lock-in.

- **Universal compatibility** — Works with React, Next.js App Router, Pages Router, Vite, and Create React App
- **Professional spring physics** — Four carefully tuned presets plus full customization
- **Performance optimized** — Intersection Observer API with smart defaults
- **TypeScript native** — Written in TypeScript with comprehensive type definitions
- **Production ready** — 8KB compressed, battle-tested in real applications

<br/>

## Installation

```bash
npm install mochi-motion framer-motion react-intersection-observer
```

That's it. No additional setup required.

<br/>

## Quick Start

### React (Vite, CRA, or any React app)

```tsx
import { ReactTransition, RevealOnScroll } from 'mochi-motion'

function App() {
  return (
    <ReactTransition>
      <RevealOnScroll effect="fade-up">
        <h1>Welcome to the future</h1>
      </RevealOnScroll>
    </ReactTransition>
  )
}
```

### Next.js App Router

```tsx
// app/layout.tsx
import { AppRouterTransition } from 'mochi-motion'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AppRouterTransition>
          {children}
        </AppRouterTransition>
      </body>
    </html>
  )
}
```

### Next.js Pages Router

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

<br/>

## Animation Effects

Mochi Motion includes eight carefully crafted animation effects. Each one uses professional spring physics that respond naturally to user interaction.

### Fade Animations
```tsx
<RevealOnScroll effect="fade-up">Content slides up smoothly</RevealOnScroll>
<RevealOnScroll effect="fade-down">Content drops down elegantly</RevealOnScroll>
<RevealOnScroll effect="fade-left">Content sweeps in from the right</RevealOnScroll>
<RevealOnScroll effect="fade-right">Content glides in from the left</RevealOnScroll>
```

### Scale Animations
```tsx
<RevealOnScroll effect="scale-up">Content zooms in with perfect timing</RevealOnScroll>
<RevealOnScroll effect="scale-down">Content emerges from larger scale</RevealOnScroll>
```

### Special Effects
```tsx
<RevealOnScroll effect="blur-up">Content focuses into clarity</RevealOnScroll>
<RevealOnScroll effect="rotate-up">Content spins into position</RevealOnScroll>
```

<br/>

## Spring Physics

The magic happens in the spring configurations. We've spent months tuning these presets to feel just right in real applications.

### Gentle
Soft, premium feel. Perfect for luxury brands and professional interfaces.
```tsx
<RevealOnScroll preset="gentle">
  <Card>Elegant and refined</Card>
</RevealOnScroll>
```

### Wobbly  
Bouncy and engaging. Adds personality without being distracting.
```tsx
<RevealOnScroll preset="wobbly">
  <Button>Fun and interactive</Button>
</RevealOnScroll>
```

### Stiff
Quick and responsive. Great for dashboards and productivity apps.
```tsx
<RevealOnScroll preset="stiff">
  <MenuItem>Snappy and efficient</MenuItem>
</RevealOnScroll>
```

### Slow
Deliberate and thoughtful. Commands attention for important content.
```tsx
<RevealOnScroll preset="slow">
  <CallToAction>Considered and impactful</CallToAction>
</RevealOnScroll>
```

<br/>

## Advanced Usage

### Custom Spring Physics

When the presets aren't enough, dive into the physics:

```tsx
<RevealOnScroll 
  preset="custom"
  spring={{
    stiffness: 200,  // How bouncy (80-300)
    damping: 12,     // How much it oscillates (8-30)
    mass: 1.2        // How heavy it feels (0.8-1.5)
  }}
>
  <Component />
</RevealOnScroll>
```

### Staggered Animations

Create cascading effects that guide user attention:

```tsx
function FeatureGrid({ features }) {
  return (
    <div className="grid">
      {features.map((feature, index) => (
        <RevealOnScroll
          key={feature.id}
          effect="fade-up"
          delay={index * 0.1}
        >
          <FeatureCard {...feature} />
        </RevealOnScroll>
      ))}
    </div>
  )
}
```

### Performance Optimization

Fine-tune when animations trigger:

```tsx
<RevealOnScroll 
  effect="fade-up"
  threshold={0.2}        // Trigger when 20% visible
  rootMargin="50px"      // Start 50px before entering viewport
  triggerOnce={true}     // Animate only once
>
  <ExpensiveComponent />
</RevealOnScroll>
```

<br/>

## TypeScript Support

Mochi Motion is written in TypeScript with comprehensive type definitions. Everything is fully typed for the best developer experience.

### Core Types

```typescript
type AnimationEffect = 
  | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right'
  | 'scale-up' | 'scale-down' 
  | 'blur-up' | 'rotate-up'

type SpringPreset = 'gentle' | 'wobbly' | 'stiff' | 'slow' | 'custom'

interface SpringConfig {
  stiffness?: number  // 80-300
  damping?: number    // 8-30
  mass?: number       // 0.8-1.5
}
```

### Component Props

```typescript
interface RevealOnScrollProps {
  effect?: AnimationEffect
  preset?: SpringPreset
  spring?: SpringConfig
  delay?: number
  distance?: number
  scale?: number
  threshold?: number
  triggerOnce?: boolean
  children: React.ReactNode
  className?: string
}
```

### Type-Safe Usage

```tsx
import { RevealOnScroll, SpringConfig } from 'mochi-motion'

const customSpring: SpringConfig = {
  stiffness: 150,
  damping: 15,
  mass: 1.1
}

function TypedComponent() {
  return (
    <RevealOnScroll
      effect="scale-up"      // ✅ Fully typed
      preset="wobbly"        // ✅ Autocomplete works  
      spring={customSpring}  // ✅ Type checked
      delay={0.3}           // ✅ Number type enforced
    >
      <div>Perfectly type-safe animations</div>
    </RevealOnScroll>
  )
}
```

<br/>

## Real-World Examples

### Landing Page Hero

```tsx
function Hero() {
  return (
    <section>
      <RevealOnScroll effect="scale-up" preset="gentle" delay={0.1}>
        <h1>Your Product Name</h1>
      </RevealOnScroll>
      
      <RevealOnScroll effect="fade-up" preset="gentle" delay={0.3}>
        <p>The future of everything, available today.</p>
      </RevealOnScroll>
      
      <RevealOnScroll effect="fade-up" preset="wobbly" delay={0.5}>
        <button>Get Started</button>
      </RevealOnScroll>
    </section>
  )
}
```

### Feature Showcase

```tsx
function Features() {
  const features = [
    { title: "Lightning Fast", description: "Built for speed" },
    { title: "Rock Solid", description: "Never breaks" },
    { title: "Always Fresh", description: "Regular updates" }
  ]

  return (
    <div className="features-grid">
      {features.map((feature, i) => (
        <RevealOnScroll
          key={feature.title}
          effect="fade-up"
          preset="gentle"
          delay={i * 0.15}
        >
          <div className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  )
}
```

### Testimonial Section

```tsx
function Testimonials() {
  return (
    <section>
      <RevealOnScroll effect="blur-up" preset="slow">
        <h2>What people are saying</h2>
      </RevealOnScroll>
      
      <div className="testimonials">
        <RevealOnScroll effect="fade-left" delay={0.2}>
          <TestimonialCard person="Sarah Chen" />
        </RevealOnScroll>
        
        <RevealOnScroll effect="scale-up" preset="wobbly" delay={0.4}>
          <TestimonialCard person="Marcus Johnson" featured />
        </RevealOnScroll>
        
        <RevealOnScroll effect="fade-right" delay={0.6}>
          <TestimonialCard person="Elena Rodriguez" />
        </RevealOnScroll>
      </div>
    </section>
  )
}
```

<br/>

## Migration Guide

### From Pages Router to App Router

**Before:**
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

**After:**
```tsx
// app/layout.tsx
import { AppRouterTransition } from 'mochi-motion'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AppRouterTransition>
          {children}
        </AppRouterTransition>
      </body>
    </html>
  )
}
```

<br/>

## Performance Notes

Mochi Motion is built for production. Here's what we've optimized:

- **Intersection Observer API** for efficient scroll detection
- **Hardware acceleration** for all animations
- **Tree shaking support** to keep bundles small
- **Smart defaults** that work in 90% of cases
- **Minimal re-renders** with optimized React patterns

### Bundle Size
- **8.8 KB compressed** (smaller than most images)
- **Tree shakable** — import only what you use
- **Zero runtime dependencies** — peer dependencies only

<br/>

## Browser Support

Mochi Motion works in all modern browsers:
- **Chrome/Edge**: 88+
- **Firefox**: 85+ 
- **Safari**: 14+
- **React**: 17.0.0+
- **Next.js**: 12.0.0+

<br/>

## API Reference

### RevealOnScroll

The primary component for scroll-triggered animations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `effect` | `AnimationEffect` | `'fade-up'` | Animation type |
| `preset` | `SpringPreset` | `'gentle'` | Spring physics preset |
| `spring` | `SpringConfig` | — | Custom spring configuration |
| `delay` | `number` | `0` | Animation delay in seconds |
| `distance` | `number` | `50` | Slide distance in pixels |
| `scale` | `number` | `0.8` | Scale factor for scale animations |
| `threshold` | `number` | `0.1` | Intersection observer threshold |
| `triggerOnce` | `boolean` | `true` | Whether to animate only once |

### Page Transition Components

| Component | Use Case |
|-----------|----------|
| `ReactTransition` | Universal React apps (Vite, CRA) |
| `AppRouterTransition` | Next.js 13+ App Router |
| `PageTransition` | Next.js Pages Router |

All transition components accept:
- `children`: React node to animate
- `preset`: Spring physics preset
- `className`: Additional CSS classes

<br/>

## Contributing

Mochi Motion is open source and welcomes contributions. Found a bug or have a feature request? [Open an issue](https://github.com/mirayatech/mochi-motion/issues).

<br/>

## License

MIT License © 2025 [@mirayatech](https://github.com/mirayatech)
