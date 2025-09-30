# Examples

This page contains runnable examples and patterns you can copy into your app.

## Simple blog with dynamic post pages

``` JSX
export component Post({ params }) {
  <article>
    <h1>Post: {params.slug}</h1>
    {/* fetch post by slug */}
  </article>
}

export component App() {
  <Router>
    <Route path="/" element={Home} />
    <Route path="/posts/:slug" element={Post} />
    <Route element={NotFound} />
  </Router>
}
```

## Query parameters example

Use `navigateTo` helper to build query parameters, or read them from `searchParams` if provided to route props.

```typescript
navigateTo('/search', { searchParams: { q: 'ripple', page: '2' } })
```

## Protected routes

Wrap protected route elements with an auth-checking component that redirects to login if necessary.

``` JSX
export component Protected({ element }) {
  if (!isAuthenticated()) {
    navigateTo('/login')
    return null
  }
  else {
    return <element />
  }
}

<Route path="/account" element={() => <Protected element={Account} />} />
```

## Lazy-load route elements

``` JSX
const Profile = () => import('./Profile.ripple')
<Route path="/profile" element={Profile} />
```