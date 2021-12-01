module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
        '186': '75vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
