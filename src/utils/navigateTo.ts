/**
 * Navigates to a path.
 *
 * @param path - The path to navigate to.
 */
export default function navigateTo(path: string) {
	window.location.href = path;
}

/**
 * Navigates to a path with search params.
 *
 * @param path - The path to navigate to.
 * @param searchParams - The search params to navigate with.
 */
export function navigateToWithSearchParams(path: string, searchParams: Record<string, string>) {
	const search = new URLSearchParams(searchParams).toString();
	navigateTo(`${path}?${search}`);
}

/**
 * Navigates to a path with hash.
 *
 * @param path - The path to navigate to.
 * @param hash - The hash to navigate with.
 */
export function navigateToWithHash(path: string, hash: string) {
	navigateTo(`${path}#${hash}`);
}
