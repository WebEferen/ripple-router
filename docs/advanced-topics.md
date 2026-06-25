# Advanced Topics

This page covers advanced usage patterns, performance tips, and integration
patterns for Ripple Router.

## Organizing route definitions

Ripple Router uses a flat route map. Keep route declarations together when that
makes the app easier to scan, or split them into small components that render
`Route` entries.

Example: dashboard routes grouped in a component

```tsx
export function DashboardRoutes() @{
  <>
    <Route path="/dashboard" element={Dashboard} />
    <Route path="/dashboard/settings" element={Settings} />
  </>
}

<Router>
  <DashboardRoutes />
</Router>
```

When structuring larger route lists, prefer explicit full paths.

## Route modules

For larger apps, place route elements in separate modules and import the
component function into your route list.

```tsx
import { Profile } from './Profile.tsrx'

<Route path="/profile" element={Profile} />
```

`Route` expects `element` to be a component function.

## Performance considerations

- Keep path matching patterns simple.
- Cache expensive operations (e.g., complex matchers) when used repeatedly.
- Minimize re-renders by keeping route element props stable; avoid creating
  new inline objects in parent renders.

## Accessibility

- Ensure `<Link>` components render semantic anchor tags with `href` so screen
  readers and keyboard users get expected behavior.
- Provide skip links for keyboard users when you have route changes that move
  focus.

## Tips for large apps

- Centralize route definitions in a single module for discoverability.
- Use a route meta system (simple JS object attached to routes) to store permissions, titles and breadcrumbs instead of duplicating logic across components.
