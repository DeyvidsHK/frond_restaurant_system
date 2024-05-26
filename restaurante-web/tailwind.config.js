/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'negro-claro' : '#242422',
        'gris-oscuro' : '#2D2D2D'
      }
    },
  },
  plugins: [],
}

