import { ROUTER_NAVIGATION_EVENT } from '../constants';

/**
 * Navigates to a path.
 *
 * @param path - The path to navigate to.
 * @param options - The options to navigate with.
 * @param options.replace - Whether to replace the current history entry.
 * @param options.searchParams - The search params to navigate with.
 * @param options.hash - The hash to navigate with.
 */
export default function navigateTo(
	path: string,
	options?: { replace?: boolean; searchParams?: Record<string, string>; hash?: string }
) {
	const search = new URLSearchParams(options?.searchParams).toString();
	const url = search ? `${path}?${search}` : path;
	const target = options?.hash ? `${url}#${options.hash}` : url;

	options?.replace
		? window.history.replaceState({}, '', target)
		: window.history.pushState({}, '', target);

	window.dispatchEvent(new Event(ROUTER_NAVIGATION_EVENT));
	window.dispatchEvent(new Event('popstate'));
}
