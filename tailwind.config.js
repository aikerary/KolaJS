/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        'cola-red': '#DC143C',
        'cola-dark-red': '#B22222',
        'cola-white': '#FFFFFF',
        'cola-light-gray': '#F5F5F5',
        'cola-dark-gray': '#2C2C2C',
      },
      fontFamily: {
        'coca-cola': ['Bebas Neue', 'Arial', 'sans-serif'],
        'content': ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

