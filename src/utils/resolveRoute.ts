import type { Component } from 'ripple';

import { SYMBOLS } from '../constants';
import { formatPath } from './formatPath';
import { getParams } from './getParams';
import { matchPath } from './matchPath';

export type RouteMatch = {
	route: string;
	element: Component;
	params: Record<string, string>;
};

export function resolveRoute(routes: Map<string, Component>, path: string): RouteMatch | null {
	const locationPathFragments = formatPath(path);

	for (const route of routes.keys()) {
		if (route === SYMBOLS.CATCH_ALL) continue;

		const routePathFragments = formatPath(route);

		if (matchPath(routePathFragments, locationPathFragments)) {
			const element = routes.get(route);

			if (!element) return null;

			return {
				route,
				element,
				params: getParams(routePathFragments, locationPathFragments),
			};
		}
	}

	return null;
}
