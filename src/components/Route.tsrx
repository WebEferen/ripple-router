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

	// Add route to routes context
	routes.set(path, element);
	RoutesContext.set(routes);
}
