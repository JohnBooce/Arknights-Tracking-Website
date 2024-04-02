/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      xs: '0.75rem',
      lg: '1.075rem',
      xl: '2.5rem',
      base: '1.5rem',
      '2xl': '3.0rem',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [],
}

