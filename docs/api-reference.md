# API Reference

Comprehensive reference for Ripple Router's public API: components, helpers,
and types. This page focuses on how to use the public exports from `ripple-router`.

## Components

### Router

Root component that provides routing context to child routes. Use it at the
top-level of your application.

```tsx
<Router>
    { /* Route components */ }
</Router>
```

Props
- `children?: Component` — children, typically `Route` elements.

Notes
- Router listens to browser `popstate` events and Ripple Router navigation
    events, then updates the matching route.

### Route

Defines a declarative route mapping a path to an element/component.

```tsx
<Route path="/users/:id" element={UserProfile} />
```

Props
- `path: string` — path pattern. Supports dynamic segments with `:`. Use `**` for a fallback route.
- `element: Component` — component to render when the route matches.

Behavior
- Normal routes are matched in declaration order. A route with `path="**"` is
  rendered when no normal route matches.

### Link

Declarative navigation component. Prevents full-page reloads and updates history.

```tsx
<Link href="/dashboard">Go to Dashboard</Link>
```

Props
- `href: string` — target location. Can contain a path and search/hash.
- `children?: Component` — link content.
- All standard anchor (`<a>`) HTML attributes are also supported.

## Navigation helpers

### navigateTo(path: string, options?: { replace?: boolean; searchParams?: Record<string,string>; hash?: string })

- Programmatically navigate to a location.

**Examples**

1. Simple navigate

```typescript
import { navigateTo } from 'ripple-router'

navigateTo('/dashboard')
```

2. With query params and hash

```typescript
navigateTo('/search', { searchParams: { q: 'ripple' }, hash: 'results' })
// -> /search?q=ripple#results
```

3. With replace

```typescript
navigateTo('/login', { replace: true })
```

## Types

These types are described roughly here to help you understand data shapes used by the library

### RouteProps

Props passed to route components.

```typescript
type RouteProps = {
    params: Record<string, string>
}
```

Route components do not receive query parameters as props. Read them with
`new URLSearchParams(window.location.search)` when needed.

### RouteMatch

Low-level match result returned by the internal resolver.

```typescript
type RouteMatch = {
    route: string
    element: Component
    params: Record<string, string>
}
```
