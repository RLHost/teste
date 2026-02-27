/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        neon: {
          400: '#a3e635', // lime-400 equivalent for that toxic/extreme green
          500: '#84cc16',
        }
      }
    },
  },
  plugins: [],
}