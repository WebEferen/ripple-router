export { Router } from './components/Router.tsrx';
export { Route } from './components/Route.tsrx';
export { Link } from './components/Link.tsrx';

export { default as navigateTo } from './utils/navigateTo';

// Type-safe routing utilities
// Disabled until we figure out how to pass component to function.

// export { createTypedRoute } from './utils/createTypedRoute';
// export type { PathParams } from './utils/createTypedRoute';
// export type {
//     ExtractPathParams,
//     TypedRouteProps,
//     TypedRouteComponent,
//     TypedRoute
// } from './types/route.d.ts';

// Legacy types for backward compatibility
export type { RouteProps } from './types';
