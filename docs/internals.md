# Internals

This page explains the key internal modules and algorithms used inside Ripple
Router. 

It's useful if you want to contribute or understand performance
characteristics.

The whole codebase of the router can be seen at its [GitHub repo](https://github.com/WebEferen/ripple-router)

## Matching algorithm

Route matching is implemented in `src/utils/matchPath.ts`. The matcher does the
following:

1. Split the candidate path into fragments by `/`.
2. Compare fragments to the route pattern; dynamic segments start with `:` and
   capture their value.
3. Support `*` catch-all patterns by consuming the rest of the path.

The matcher returns a small object with `{ matched: boolean, params: Record }`.

## Navigation and history

- Navigation functions live in `src/utils/navigateTo.ts` and wrap `history.pushState`/`replaceState`.
- The Router listens to `popstate` events and re-evaluates route matches.

## Contexts

Routing state (current path, match data) is stored in a context provider located at `src/contexts/RoutesContext.ripple`. 

Route components consume this context to determine whether they should render and which params to pass to their elements.

## Link implementation details

`src/components/Link.ripple` prevents full page reloads using an `onClick` handler, then calls `navigateTo()` to update history. 

It also falls back to normal anchor behavior if the user opens the link in a new tab or uses modifier
keys.

## Testing

Unit tests should focus on `matchPath.ts` and `navigateTo.ts`. For components, write renderer-level tests that assert which element is rendered for a given path.