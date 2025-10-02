# Getting Started

This guide will help you install and use Ripple Router in a Ripple application.

## Installation

Install from npm (pnpm/yarn also supported):

```bash
npm install ripple-router
# or
pnpm add ripple-router
```

If you're developing the library locally, you can `pnpm link` or use a local
workspace to test examples.

## Basic example

Create a small app with two pages and client-side navigation.

``` JSX
import { Router, Route, Link } from 'ripple-router'

export component Home() {
    <div>
        <h1>Home</h1>
        <Link to="/about">About</Link>
    </div>
}

export component About() {
    <div>
        <h1>About</h1>
        <Link to="/">Home</Link>
    </div>
}

export component App() {
    <Router>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
    </Router>
}
```

## Dynamic parameters and hooks

Routes can include dynamic segments. Ripple Router exposes route parameters
to the route's element via props (see API Reference -> Types).

``` JSX
export component UserProfile({ params }) {
    <div>
        <h1>User: {params.id}</h1>
    </div>
}

export component App() {
    <Router>
        <Route path="/users/:id" element={UserProfile} />
    </Router>
}
```

## Programmatic navigation

Use `navigateTo` to navigate from code:

```typescript
import { navigateTo } from 'ripple-router'

function goToSearch(query: string) {
    navigateTo('/search', { searchParams: { q: query } })
}
```
