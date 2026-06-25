import type { Children } from 'ripple';
import navigateTo from '../utils/navigateTo';

/**
 * Check if a URL is external.
 */
function isExternalUrl(url: string): boolean {
	return /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(url) || url.startsWith('//');
}

/**
 * Link component - passes all props to anchor tag, intercepts onClick for client-side navigation.
 */
export function Link(props: {
	href: string;
	children?: Children;
} & AnchorHTMLAttributes<HTMLAnchorElement>) @{
	const { children, href, ...rest } = props;
	const isExternal = isExternalUrl(href);

	const handleClick = (e: MouseEvent) => {
		// Allow external links to behave normally
		if (isExternal) return;

		// Allow modified clicks (ctrl/cmd+click to open in new tab)
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

		// Allow if target is set (e.g., _blank)
		if (props.target) return;

		e.preventDefault();
		navigateTo(href);
	};

	<a href={href} onClick={handleClick} {...rest}>{children}</a>
}
