## install next
```sh
npx create-next-app@latest
```

## install mdx support (optional)
```sh
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx remark-gfm remark-parse remark-unwrap-images remark-prism
```
`next.config.mjs`
```js
import remarkGfm from 'remark-gfm'
import remarkPrism from 'remark-prism'
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm, remarkPrism],
    rehypePlugins: [],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)

```