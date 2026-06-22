# Examples

This page contains runnable examples and patterns you can copy into your app.

## Simple blog with dynamic post pages

```tsx
export function Post({ params }) @{
  <article>
    <h1>Post: {params.slug}</h1>
    {/* fetch post by slug */}
  </article>
}

export function App() @{
  <Router>
    <Route path="/" element={Home} />
    <Route path="/posts/:slug" element={Post} />
    <Route path="**" element={NotFound} />
  </Router>
}
```

## Query parameters example

Use `navigateTo` helper to build query parameters. Route components can read
query parameters from `window.location.search`.

```typescript
navigateTo('/search', { searchParams: { q: 'ripple', page: '2' } })
```

## Protected routes

Wrap protected route elements with an auth-checking component that redirects to login if necessary.

```tsx
export function Protected({ element }) @{
  if (!isAuthenticated()) {
    navigateTo('/login')
    return null
  }
  const ProtectedElement = element

  <ProtectedElement />
}

<Route path="/account" element={() => <Protected element={Account} />} />
```

## Route modules

```tsx
import { Profile } from './Profile.tsrx'

<Route path="/profile" element={Profile} />
```
