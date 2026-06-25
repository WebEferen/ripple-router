import { effect, track } from 'ripple';
import { NotFound } from '../components/NotFound.tsrx';
import { RoutesContext } from '../contexts/RoutesContext.tsrx';
import { resolveRoute } from '../utils/resolveRoute';
import { ROUTER_NAVIGATION_EVENT, SYMBOLS } from '../constants';

export function Renderer() @{
	const routes = RoutesContext.get();

	if (!routes) {
		throw new Error('Renderer must be used within a Router.');
	}

	let &[path] = track(window.location.pathname);
	let &[match] = track(() => resolveRoute(routes, path));

	effect(() => {
		function listenToNavigation() {
			path = window.location.pathname;
		}

		listenToNavigation();

		window.addEventListener('popstate', listenToNavigation);
		window.addEventListener(ROUTER_NAVIGATION_EVENT, listenToNavigation);

		return () => {
			window.removeEventListener('popstate', listenToNavigation);
			window.removeEventListener(ROUTER_NAVIGATION_EVENT, listenToNavigation);
		};
	});

	@if (match) {
		@for (const routeMatch of [match]; key routeMatch.route) {
			const RouteElement = routeMatch.element;

			<RouteElement params={routeMatch.params} />
		}
	} @else {
		const CustomNotFound = routes.get(SYMBOLS.CATCH_ALL);

		@if (CustomNotFound) {
			<CustomNotFound />
		} @else {
			<NotFound />
		}
	}
}
