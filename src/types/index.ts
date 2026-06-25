import type { Component } from "ripple";
import { ExtractPathParams } from "./route";

export type RouteProps<T extends string = string> = {
    params: ExtractPathParams<T>;
};

export declare function Route(props: { path: string, element: Component }): void;
export declare function Router(props: { children: Component }): void;
export declare function Link(props: { href: string; children: Component }): void;

export declare function navigateTo(
    path: string,
    options?: { replace?: boolean; searchParams?: Record<string, string>; hash?: string }
): void;
