import { PathFragment } from '../types';

/**
 * Formats a path string into an array of path fragments.
 *
 * @param path - The path string to format.
 * @returns {PathFragment[]} An array of path fragments.
 */
export function formatPath(path: string): PathFragment[] {
	const fragments = path.split('/');

	const pathFragments: PathFragment[] = [];

	for (const fragment of fragments) {
		if (fragment.startsWith(':')) {
			pathFragments.push({
				name: fragment.slice(1),
				isDynamic: true,
			});
		} else {
			pathFragments.push({
				name: fragment,
				isDynamic: false,
			});
		}
	}

	return pathFragments;
}
