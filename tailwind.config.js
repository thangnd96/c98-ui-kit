const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        yellow: {
          ...colors.yellow,
          DEFAULT: '#cda349'
        },
        grey: {
          ...colors.grey,
          DEFAULT: '#454545'
        },
        white: {
          ...colors.white,
          fa: '#fafafa'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
