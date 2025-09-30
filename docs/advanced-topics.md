# Advanced Topics

This page covers advanced usage patterns, performance tips, and integration
patterns for Ripple Router.

## Nested routing patterns

Ripple Router supports nesting by simply placing `Route` components inside other
components. The router resolves the best matching route by walking the tree.

Example: nested dashboard with side nav

``` JSX
<Router>
  <Route path="/">
    <Route path="dashboard" element={Dashboard} />
    <Route path="settings" element={Settings} />
  </Route>
</Router>
```

When structuring nested routes, prefer small components and delegate parameter
parsing to child route elements for clarity.

## Route-based code-splitting

To reduce initial bundle size, load route elements lazily using dynamic imports
and a small loader component.

``` JSX
const LazyProfile = () => import('./Profile.ripple')

<Route path="/profile" $element={LazyProfile} />
```

Ensure your bundler handles asynchronous components properly (most modern bundlers do).

## Performance considerations

- Keep path matching patterns simple and avoid overly permissive wildcards.
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