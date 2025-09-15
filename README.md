# Ripple Router

🚧 **Alpha Version** - This library is currently in alpha development and may have breaking changes.

A lightweight, type-safe router for [Ripple](https://github.com/trueadm/ripple) applications.

## Installation

```bash
npm install ripplejs-router
# or
pnpm add ripplejs-router
# or
yarn add ripplejs-router
```

## Requirements

- Node.js >= 20.0.0
- Ripple framework

## Quick Start

```ripple
import { RouterProvider, Route, Link } from 'ripplejs-router';

// Define your components
export component Home() {
    <div>
        <h1>Welcome to Home</h1>
        <Link to="/about">Go to About</Link>
    </div>
}

export component About() {
    <div>
        <h1>About Page</h1>
        <Link to="/">Back to Home</Link>
    </div>
}

// Set up your router
export component App() {
    <RouterProvider>
        <Route path="/" $element={Home} />
        <Route path="/about" $element={About} />
    </RouterProvider>
}
```

## API Reference

### Components

#### `RouterProvider`

The root router component that manages routing state and navigation.

```ripple
<RouterProvider>
    {/* Your routes go here */}
</RouterProvider>
```

**Props:**
- `$children: Component` - Child components (typically Route components)

#### `Route`

Defines a route with a path pattern and associated component.

```ripple
<Route path="/users/:id" $element={UserProfile} />
```

**Props:**
- `path: string` - URL path pattern (supports dynamic segments with `:`)
- `$element: Component` - Component to render when route matches

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
import { navigateTo } from 'ripplejs-router';

navigateTo('/dashboard');
```

#### `navigateTo(path: string, options?: { searchParams?: Record<string, string>  })`

Navigate with query parameters.

```typescript
import { navigateTo } from 'ripplejs-router';

navigateTo('/search', { searchParams: { q: 'ripple', category: 'framework' } });
// Navigates to: /search?q=ripple&category=framework
```

#### `navigateTo(path: string, options?: { hash?: string })`

Navigate with a hash fragment.

```typescript
import { navigateTo } from 'ripplejs-router';

navigateTo('/docs', { hash: 'installation' });
// Navigates to: /docs#installation
```

### Types

#### `RouteProps`

Props passed to route components:

```typescript
type RouteProps = {
    params: Record<string, string>;      // Dynamic route parameters
    searchParams?: Record<string, string>; // Query parameters
};
```

#### `PathFragment`

Internal type for path parsing:

```typescript
type PathFragment = {
    name: string;
    isDynamic: boolean;
};
```

## Dynamic Routes

Support for dynamic route segments using `:` syntax:

```ripple
// Route definition
<Route path="/users/:userId/posts/:postId" $element={PostDetail} />

// Component receives params
export component PostDetail(props: RouteProps) {
    const { params } = props;
    // params.userId and params.postId are available
    
    <div>
        <h1>Post {params.postId} by User {params.userId}</h1>
    </div>
}
```

## Development Status

⚠️ **This is an alpha release** - The API may change significantly before the stable release. Use in production at your own risk.

### Known Issues

- TypeScript integration is still being refined (temporary `@ts-expect-error` comments in exports)
- API may have breaking changes in future versions

## Contributing

This project is part of the Ripple framework ecosystem. Contributions are welcome!

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Michal Makowski (michal.makowski97@gmail.com)

---

**Note:** This router is specifically designed for the Ripple framework and requires Ripple as a peer dependency.