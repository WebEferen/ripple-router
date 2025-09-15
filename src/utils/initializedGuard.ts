export function initializedGuard<T>(value: T, message: string) {
	if (value === undefined) {
		throw new Error(message);
	}
}
