# Getter Hiss Next.js Website

## Install
`npx create-next-app@latest --typescript`

## Getting Started

First, run the development server:
`npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tailwind
- [Documentation](https://tailwindcss.com/docs/)
- [Install Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Customizing Colors](https://tailwindcss.com/docs/customizing-colors)

### Add Tailwind CSS
- [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
- `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
- `npx tailwindcss init -p`
- FIX: 
  - [@tailwind is flagged as unknown](https://stackoverflow.com/a/61333686)

### Add Tailwind UI
- [Documentation](https://tailwindui.com/documentation)
- `npm install @headlessui/react @heroicons/react`

### Added @tailwindcss/forms 
- `npm install @tailwindcss/forms`
```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
```