/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'],
  
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1230px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1230px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      fontFamily : {
        circularStd : 'Circular Std',
      },
      colors: {
        primary: '#0074FF',
        secondary: '#1380FF',
        tertiary: '#0E233D',
        dark:'#0D0D0D'
      }
    },
  },
  variants : {
    extend : {
       display : ["group-hover"],
       margin : ["group-hover"],
       visibility : ["group-hover"],
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
