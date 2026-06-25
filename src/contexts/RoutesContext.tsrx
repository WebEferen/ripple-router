import { Context } from 'ripple';
import type { Component, RippleMap } from 'ripple';

export type RoutesMap = RippleMap<string, Component>;

/**
 * Routes context.
 */
export const RoutesContext = new Context<RoutesMap | null>(null);
