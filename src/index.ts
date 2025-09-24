// @ts-expect-error: known issue, we're working on it
export { Router } from './components/Router.ripple';

// @ts-expect-error: known issue, we're working on it
export { Route } from './components/Route.ripple';

// @ts-expect-error: known issue, we're working on it
export { Link } from './components/Link.ripple';

export { default as navigateTo } from './utils/navigateTo';

// Type-safe routing utilities
export { createTypedRoute } from './utils/createTypedRoute';
export type { PathParams } from './utils/createTypedRoute';
export type { 
    ExtractPathParams, 
    TypedRouteProps, 
    TypedRouteComponent, 
    TypedRoute 
} from './types/route.d.ts';

// Legacy types for backward compatibility
export type { RouteProps } from './types/index.d.ts';
