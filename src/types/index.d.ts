import type { Component } from "ripple";

export type PathFragment = {
    name: string;
	isDynamic: boolean;
};

export type RouteProps = {
    params: Record<string, string>;
	searchParams?: Record<string, string>;
};

export declare function Route(props: { path: string, $element: Component }): void;
export declare function RouterProvider(props: { $children: Component }): void;
export declare function Link(props: { $to: string; $children: Component }): void;

export declare function navigateTo(path: string): void;
export declare function navigateToWithSearchParams(path: string, searchParams: Record<string, string>): void;
export declare function navigateToWithHash(path: string, hash: string): void;
