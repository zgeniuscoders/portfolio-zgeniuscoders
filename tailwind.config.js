/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark": "#151C21",
        "blue-sky": "#1CACCE",
        "b-black": "#010101",
        "w-white": "#FFFFFF"
      },
      colors: {
        "dark": "#151C21",
        "blue-sky": "#1CACCE",
        "b-black": "#010101",
        "w-white": "#FFFFFF"
      },
      gradientColorStops:{
        "dark": "#151C21",
      }
    },
  },
  plugins: [],
}