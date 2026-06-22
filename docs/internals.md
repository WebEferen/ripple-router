# Internals

This page explains the key internal modules and algorithms used inside Ripple
Router. 

It's useful if you want to contribute or understand performance
characteristics.

The whole codebase of the router can be seen at its [GitHub repo](https://github.com/WebEferen/ripple-router)

## Matching algorithm

Route matching is coordinated by `src/utils/resolveRoute.ts`, using
`src/utils/matchPath.ts` for path comparison. The matcher does the following:

1. Split the candidate path into fragments by `/`.
2. Compare fragments to the route pattern; dynamic segments start with `:` and
   capture their value.
3. Skip the `**` fallback route during normal matching.

`matchPath()` returns a boolean. `resolveRoute()` returns the matched route
pattern, component, and params, or `null` when no normal route matches.

## Navigation and history

- Navigation functions live in `src/utils/navigateTo.ts` and wrap `history.pushState`/`replaceState`.
- `navigateTo()` dispatches a router-owned navigation event and a `popstate`
  event after updating history.
- The Renderer listens to both events and re-evaluates the current match.

## Contexts

Route definitions are stored in `src/contexts/RoutesContext.tsrx`.

`Route` components register their `path` and `element`. `Renderer` resolves the
current location against that route map and renders the active component with
`params`.

## Link implementation details

`src/components/Link.tsrx` prevents full page reloads using an `onClick` handler, then calls `navigateTo()` to update history. 

It also falls back to normal anchor behavior if the user opens the link in a new tab or uses modifier
keys.

## Testing

Unit tests should focus on `matchPath.ts`, `resolveRoute.ts`, and
`navigateTo.ts`. For components, write renderer-level tests that assert which
element is rendered for a given path and that route changes remount the active
component.
