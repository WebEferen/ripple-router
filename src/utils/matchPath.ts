import { PathFragment } from '../types';

/**
 * Matches two path fragments arrays.
 *
 * @param path1 - The first path fragments array.
 * @param path2 - The second path fragments array.
 * @returns {boolean} True if the paths match, false otherwise.
 */
export function matchPath(path1: PathFragment[], path2: PathFragment[]): boolean {
	if (path1.length !== path2.length) {
		return false;
	}

	for (let i = 0; i < path1.length; i++) {
		const fragment1 = path1[i];
		const fragment2 = path2[i];

		if (fragment1.isDynamic) {
			continue;
		}

		if (fragment1.name !== fragment2.name) {
			return false;
		}
	}

	return true;
}
