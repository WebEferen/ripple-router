# FAQ

Commonly asked questions about Ripple Router. Click a question to expand its answer.

<details>
<summary>Does Ripple Router support server-side rendering (SSR)?</summary>

Ripple Router is primarily a client-side router. You can render initial HTML on the
server but you must hydrate on the client and sync the initial location. There is
no built-in SSR-specific API; integration depends on your app framework and build
setup.

</details>

<details>
<summary>How do I handle query parameters?</summary>

Route elements receive `searchParams` (if provided). For building URLs, use
`navigateTo(path, { searchParams })`. 

Example:

```typescript
navigateTo('/search', { 
    searchParams: { 
        q: 'ripple' 
    } 
})
```
becomes: `/search?q=ripple`

</details>

<details>
<summary>How are dynamic segments exposed?</summary>

Dynamic segments (e.g. `/users/:id`) are available on `params` passed as props to
the routed component: `params.id`.

</details>

<details>
<summary>Can I use anchor tags for SEO?</summary>

Yes — `Link` renders semantic anchors. For pre-rendered or server-rendered
pages, make sure anchors contain proper `href` values so crawlers can follow
links.

</details>

<details>
<summary>How do I debug route matching?</summary>

Inspect `src/utils/matchPath.ts`. Add console logs or unit tests asserting expected
params for sample paths. Writing small unit tests for edge cases (wildcards,
trailing slashes) is recommended.

</details>
