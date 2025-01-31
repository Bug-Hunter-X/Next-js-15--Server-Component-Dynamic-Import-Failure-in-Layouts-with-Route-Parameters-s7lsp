// layout-solution.js
'use client'

export default async function Layout({ children, params }) {
  // Ensure params.slug is available before importing
  if (!params || !params.slug) {
    return <div>Loading...</div>; // Or handle the case gracefully
  }

  const component = await import(`./components/${params.slug}.js`);
  return (
    <html>
      <body>{children}<component {...component.props}/></body>
    </html>
  );
}

// Note:  Adding getStaticPaths or getServerSideProps to pages using this layout may be necessary to ensure params.slug is available.