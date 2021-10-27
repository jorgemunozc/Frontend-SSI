module.exports = {
  purge: [
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '60': '.60',
        '70': '.70'
      },
      minWidth: {
        '1': '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
