import { effect } from 'ripple';
import type { Component } from 'ripple';

import { RoutesContext } from '../contexts/RoutesContext.tsrx';

/**
 * Route component.
 *
 * @param props - The route props.
 * @param props.path - The path of the route.
 * @param props.element - The element to render when the route matches.
 */
export function Route(props: { path: string; element: Component }) {
	const { path, element } = props;

	const routes = RoutesContext.get();

	if (!routes) {
		throw new Error('Route must be used within a Router.');
	}

	effect(() => {
		routes.set(path, element);

		return () => {
			if (routes.get(path) === element) {
				routes.delete(path);
			}
		};
	});
}
