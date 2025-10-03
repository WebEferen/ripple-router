# Ripple Router

🚧 **Alpha Version** - This library is currently in alpha development and may have breaking changes.

A lightweight, type-safe router for [Ripple](https://github.com/trueadm/ripple) applications.

## Installation

```bash
npm install ripple-router
# or
pnpm add ripple-router
# or
yarn add ripple-router
```

## Requirements

- Node.js >= 20.0.0
- Ripple framework

## Quick Start

```ripple
import { Router, Route, Link } from 'ripple-router';

// Define your components
export component Home() {
    <div>
        <h1>{"Welcome to Home"}</h1>
    <Link to="/about">{"Go to About"}</Link>
    </div>
}

export component About() {
    <div>
        <h1>{"About Page"}</h1>
        <Link to="/">{"Back to Home"}</Link>
    </div>
}

// Set up your router
export component App() {
    <Router>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
    </Router>
}
```

## Type-Safe Routing

Ripple Router now supports type-safe routing with automatic parameter type inference! When you define routes with parameters (like `:id`), TypeScript will automatically infer the correct types for your route components.

### Using `createTypedRoute` Helper

The `createTypedRoute` helper provides the best type-safety experience:

```typescript
import { createTypedRoute, Router, Route } from 'ripple-router';

// Create a type-safe route - params.id will be automatically typed as string
const userRoute = createTypedRoute("/users/:id", ({ params }) => {
    // TypeScript knows params.id is a string
    return <div>User ID: {params.id}</div>;
});

// Multiple parameters are also supported
const postRoute = createTypedRoute("/users/:userId/posts/:postId", ({ params }) => {
    // TypeScript knows params.userId and params.postId are strings
    return (
        <div>
            <h1>Post {params.postId}</h1>
            <p>By User {params.userId}</p>
        </div>
    );
});

// Use in your router
export component App() {
    <Router>
        <Route path={userRoute.path} element={userRoute.component} />
        <Route path={postRoute.path} element={postRoute.component} />
    </Router>
}
```

### Using `PathParams` Type Helper

For more control, you can use the `PathParams` type helper to manually type your components:

```typescript
import { PathParams, Router, Route } from 'ripple-router';

// Extract parameter types from a path string
type UserParams = PathParams<"/users/:id">; // { id: string }
type BlogParams = PathParams<"/blog/:category/:year/:slug">; // { category: string, year: string, slug: string }

export component UserProfile(props: { params: UserParams }) {
    const { params } = props;
    return (
        <div>
            <h1>User Profile</h1>
            <p>User ID: {params.id}</p> {/* TypeScript knows this is a string */}
        </div>
    );
}

export component BlogPost(props: { params: BlogParams }) {
    const { params } = props;
    return (
        <div>
            <h1>Blog Post</h1>
            <p>Category: {params.category}</p>
            <p>Year: {params.year}</p>
            <p>Slug: {params.slug}</p>
        </div>
    );
}

export component App() {
    <Router>
        <Route path="/users/:id" element={UserProfile} />
        <Route path="/blog/:category/:year/:slug" element={BlogPost} />
    </Router>
}
```

### Type Inference Examples

The type system automatically extracts parameters from your path strings:

```typescript
// Simple parameter
PathParams<"/users/:id"> // { id: string }

// Multiple parameters
PathParams<"/users/:userId/posts/:postId"> // { userId: string, postId: string }

// Complex nested paths
PathParams<"/api/:version/users/:id/settings/:section"> 
// { version: string, id: string, section: string }

// No parameters
PathParams<"/about"> // {}
```

## API Reference

### Components

#### `Router`

The root router component that manages routing state and navigation.

```ripple
<Router>
    {/* Your routes go here */}
</Router>
```

**Props:**
- `$children: Component` - Child components (typically Route components)

#### `Route`

Defines a route with a path pattern and associated component.

```ripple
<Route path="/users/:id" element={UserProfile} />
```

**Props:**
- `path: string` - URL path pattern (supports dynamic segments with `:`)
- `element: Component` - Component to render when route matches

#### `Link`

Navigational component for client-side routing.

```ripple
<Link to="/dashboard">
    <span>Go to Dashboard</span>
</Link>
```

**Props:**
- `to: string` - Target path
- `$children: Component` - Link content

### Navigation Functions

#### `navigateTo(path: string, options?: { replace?: boolean; searchParams?: Record<string, string>; hash?: string })`

Programmatically navigate to a path.

```typescript
import { navigateTo } from 'ripple-router';

navigateTo('/dashboard');
```

#### `navigateTo(path: string, options?: { searchParams?: Record<string, string>  })`

Navigate with query parameters.

```typescript
import { navigateTo } from 'ripple-router';

navigateTo('/search', { searchParams: { q: 'ripple', category: 'framework' } });
// Navigates to: /search?q=ripple&category=framework
```

#### `navigateTo(path: string, options?: { hash?: string })`

Navigate with a hash fragment.

```typescript
import { navigateTo } from 'ripple-router';

navigateTo('/docs', { hash: 'installation' });
// Navigates to: /docs#installation
```

### Types

#### `RouteProps`

Props passed to route components (legacy, use `TypedRouteProps` for type safety):

```typescript
type RouteProps = {
    params: Record<string, string>;      // Dynamic route parameters
    searchParams?: Record<string, string>; // Query parameters
};
```

#### `TypedRouteProps<T>`

Type-safe props for route components based on path pattern:

```typescript
type TypedRouteProps<T extends string> = {
    params: ExtractPathParams<T>;        // Automatically inferred parameters
    searchParams?: Record<string, string>; // Query parameters
};
```

#### `ExtractPathParams<T>`

Utility type that extracts parameter names and types from a path string:

```typescript
type ExtractPathParams<"/users/:id/posts/:postId"> = {
    id: string;
    postId: string;
}
```

## Dynamic Routes

Support for dynamic route segments using `:` syntax:

```ripple
// Route definition
<Route path="/users/:userId/posts/:postId" element={PostDetail} />

// Component receives params
export component PostDetail(props: RouteProps) {
    const { params } = props;
    // params.userId and params.postId are available
    
    <div>
        <h1>Post {params.postId} by User {params.userId}</h1>
    </div>
}
```

## Not Found Pages

Use the `**` wildcard pattern to create a catch-all route for 404 pages:

```ripple
export component NotFound() {
    <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/">Go back home</Link>
    </div>
}

// Add the not found route at the end of your routes
export component App() {
    <Router>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/users/:id" element={UserProfile} />
        {/* Catch-all route for 404 pages */}
        <Route path="**" element={NotFound} />
    </Router>
}
```

**Important:** The `**` route should be placed last in your route definitions, as it will match any path that hasn't been matched by previous routes.

## Development Status

⚠️ **This is an alpha release** - The API may change significantly before the stable release. Use in production at your own risk.

### Known Issues

- TypeScript integration is still being refined
- API may have breaking changes in future versions

## Contributing

This project is part of the Ripple framework ecosystem. Contributions are welcome!

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Michal Makowski (michal.makowski97@gmail.com)

---

**Note:** This router is specifically designed for the Ripple framework and requires Ripple as a peer dependency.