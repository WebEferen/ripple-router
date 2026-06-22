import { Context } from 'ripple';
import type { Component } from 'ripple';

/**
 * Routes context.
 */
export const RoutesContext = new Context(new Map<string, Component>());
