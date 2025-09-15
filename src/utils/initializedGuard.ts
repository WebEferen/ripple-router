/**
 * Base error class for the router.
 */
class RouterError extends Error {
	name: string = 'RouterError';
    code: string = 'ROUTER_ERROR';

	constructor(message: string) {
		super(message);
	}
}

/**
 * Guards against undefined values.
 *
 * @param value - The value to guard against.
 * @param message - The error message to throw if the value is undefined.
 * @throws {RouterError} If the value is unset.
 */
export function initializedGuard<T>(value: T, message: string): void {
	if (value === undefined) {
		throw new RouterError(message);
	}
}
