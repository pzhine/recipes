### Default breakpoints
```
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
```

### Customizing breakpoints
`tailwind.config.js`
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      // override defaults
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',

      // add custom breakpoints
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}
```