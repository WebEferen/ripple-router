import type { PathFragment } from '../types/internal';

/**
 * Get route params from location fragments.
 *
 * @param routeFragments - The route path fragments.
 * @param locationFragments - The location path fragments.
 * @returns The route params.
 */
export function getParams(routeFragments: PathFragment[], locationFragments: PathFragment[]) {
	const params: Record<string, string> = {};

	for (let i = 0; i < routeFragments.length; i++) {
		const routePathFragment = routeFragments[i];
		const locationFragment = locationFragments[i];

		// If the route path fragment is dynamic, add it to the params.
		if (routePathFragment.isDynamic && locationFragment) {
			params[routePathFragment.name] = locationFragment.name;
		}
	}
	return params;
}
