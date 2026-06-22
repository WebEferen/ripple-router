import { Router, Route } from 'ripple-router';

import { Home } from './pages/Home.tsrx';
import { About } from './pages/About.tsrx';
import { NotFound } from './pages/NotFound.tsrx';

export function App() @{
	<>
		<Router>
			<Route path="/" element={Home} />
			<Route path="/about" element={About} />
			<Route path="**" element={NotFound} />
		</Router>

		<style>
			:global(*) {
				box-sizing: border-box;
			}

			:global(body) {
				margin: 0;
				font-family: system-ui, sans-serif;
				line-height: 1.5;
			}
		</style>
	</>
}
