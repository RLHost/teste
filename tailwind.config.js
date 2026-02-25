/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0B1E36',
          800: '#143154',
          700: '#1E4675',
          600: '#2A5D99',
          500: '#3875BE',
        }
      }
    },
  },
  plugins: [],
}