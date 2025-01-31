In Next.js 15, a subtle issue can arise when using server components with dynamic imports within a layout. If the dynamic import's path depends on a route parameter, and that parameter isn't available during the initial server-side rendering (SSR), the import might fail silently. This leads to a runtime error or unexpected behavior in the client, especially in edge environments.  For example:

```javascript
// layout.js
'use client'

export default async function Layout({ children, params }) {
  const component = await import(`./components/${params.slug}.js`);
  return (
    <html>
      <body>{children}<component {...component.props}/></body>
    </html>
  );
}
```

In this case, if `params.slug` isn't immediately available during SSR, the import will likely fail.