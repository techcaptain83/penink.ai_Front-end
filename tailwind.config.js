/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#407BFF",
        blackish: "#53585F",
        grey: "#858C99"
      }
    },
    screens: {
      msm: '0px',
      ...defaultTheme.screens 

    }
  },
  plugins: [],
}