/**
 * Configure Tailwind CSS
 * https://tailwindcss.com/docs/configuration
 */
module.exports = {
  // Configure Tailwind to remove unused styles in production
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Spartan', 'Helvetica', 'Avenir', 'san-serif'],
      'serif': ['Corben', 'Times New Roman', 'Garamond', 'serif'],
    },
    extend: {
      colors: {
        'brand': '#291854'
      },
      backgroundColor: {
        'desert': '#F9F5ED',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
