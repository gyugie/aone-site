const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    colors: {
      white: {
        100: '#ffffff',
        500: '#F7F8FC'
      },
      gray: {
        100: '#DFE0EB',
        400: '#94a3b8',
        500: colors.gray,
      },
      blue:{
        200: '#65A7DB',
        500: '#469ada'
      },
      primary: {
        500: '#363740',
        600: '#505050',
      },
      red: {
        500: '#ef4444'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}

