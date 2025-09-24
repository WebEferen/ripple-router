import type { Component } from 'ripple';
import type { TypedRouteComponent, ExtractPathParams } from '../types/route';

/**
 * Creates a type-safe route configuration that ensures the component
 * receives properly typed params based on the path pattern.
 * 
 * @param path - The route path with parameter placeholders (e.g., "/users/:id/posts/:postId")
 * @param component - The component that will receive typed params
 * @returns A route configuration object
 * 
 * @example
 * ```typescript
 * const userRoute = createTypedRoute("/users/:id", ({ params }) => {
 *   // params.id is automatically typed as string
 *   return <div>User ID: {params.id}</div>;
 * });
 * ```
 */
export function createTypedRoute<T extends string>(
    path: T,
    component: TypedRouteComponent<T>
): { path: T; component: Component } {
    return {
        path,
        component: component as Component
    };
}

/**
 * Type helper to extract parameter types from a path string.
 * Useful for creating components with properly typed params.
 * 
 * @example
 * ```typescript
 * type UserParams = PathParams<"/users/:id">; // { id: string }
 * type PostParams = PathParams<"/users/:userId/posts/:postId">; // { userId: string, postId: string }
 * ```
 */
export type PathParams<T extends string> = ExtractPathParams<T>;