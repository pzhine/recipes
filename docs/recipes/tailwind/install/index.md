---
sidebar_position: 0
---

# install
https://tailwindcss.com/docs/guides/vite

```sh
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### `tailwind.config.js`
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Update user settings (global)
If you see error "unknown at rule @tailwind:
[CMD+Shift+P "Open User Settings JSON"](command:workbench.action.openSettingsJson)
```json
"files.associations": {
  "*.css": "tailwindcss"
}
```

### Prettier plugin for class sorting
A Prettier v3+ plugin for Tailwind CSS v3.0+ that automatically sorts classes based on our recommended class order.
```sh
pnpm install -D prettier prettier-plugin-tailwindcss
```

`prettier.config.cjs`
```js
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}
```

