const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
        rose: colors.rose,
        'card-bg': '#0f0e17',
        'card-heading': '#fffffe',
        'card-text': '#a7a9be'

      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      }
    },
  },
  variants: {

  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
}