import { RippleMap } from 'ripple';
import { Renderer } from '../components/Renderer.tsrx';
import { RoutesContext } from '../contexts/RoutesContext.tsrx';
import type { Component, PropsWithChildrenOptional } from 'ripple';

/**
 * Router component.
 *
 * @param props - The router props.
 * @param props.children - The router children.
 * @returns The router component.
 */
export function Router(props: PropsWithChildrenOptional) @{
	const routes = new RippleMap<string, Component>();
	RoutesContext.set(routes);

	<>
		{props.children}
		<Renderer />
	</>
}
