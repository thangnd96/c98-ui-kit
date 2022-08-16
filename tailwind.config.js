module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FEBD2F'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
