import { Renderer } from '../components/Renderer.tsrx';
import type { PropsWithChildrenOptional } from 'ripple';

/**
 * Router component.
 *
 * @param props - The router props.
 * @param props.children - The router children.
 * @returns The router component.
 */
export function Router(props: PropsWithChildrenOptional) @{
	<>
		{props.children}
		<Renderer />
	</>
}
