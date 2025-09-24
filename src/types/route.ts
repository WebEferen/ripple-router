import type { Component } from "ripple";

// Utility types for extracting path parameters from route strings
export type ExtractPathParams<T extends string> = 
    T extends `${infer _Start}:${infer Param}/${infer Rest}`
        ? { [K in Param]: string } & ExtractPathParams<`/${Rest}`>
        : T extends `${infer _Start}:${infer Param}`
        ? { [K in Param]: string }
        : {};

// Type-safe route props based on path
export type TypedRouteProps<T extends string> = {
    params: ExtractPathParams<T>;
    searchParams?: Record<string, string>;
};

// Helper type for creating type-safe route components
export type TypedRouteComponent<T extends string> = Component<TypedRouteProps<T>>;

// Type-safe route definition
export type TypedRoute<T extends string> = {
    path: T;
    component: TypedRouteComponent<T>;
};