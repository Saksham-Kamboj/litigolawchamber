/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#e8c97a',
          400: '#d4a843',
          500: '#b8860b',
          600: '#9a6f00',
        },
        slate: {
          950: '#0a0d12',
        },
      },
    },
  },
  plugins: [],
}
