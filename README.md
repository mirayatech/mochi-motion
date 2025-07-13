# Mochi Motion 🍡

**Bouncy, smooth animations for React & Next.js** — As soft and delightful as mochi!

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

<RevealOnScroll effect="fade-up" delay={0.3}>
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
- `effect`: `'fade-up' | 'fade-down' | 'fade-left' | 'fade-right'` (default: `'fade-up'`)
- `delay`: Animation delay in seconds (default: `0`)
- `children`: React node to animate

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

## TypeScript Support

Motion Kit is built with TypeScript and includes full type definitions:

```tsx
import { RevealOnScroll, AppRouterTransition } from 'mochi-motion'

// All props are fully typed
<RevealOnScroll 
  effect="fade-up"    // ✅ Autocomplete works
  delay={0.5}         // ✅ Number type enforced
>
  <div>Content</div>
</RevealOnScroll>
```

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