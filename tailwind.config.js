module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#cda349'
        },
        grey: {
          DEFAULT: '#454545',
          24: '#242424',
          55: '#555555'
        },
        white: {
          DEFAULT: '#ffffff',
          fa: '#fafafa'
        }
      }
    }
  },
  plugins: []
}
