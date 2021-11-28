module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
       '13': 'repeat(13, minmax(0, 1fr))',
       '14': 'repeat(14, minmax(0, 1fr))',
       '15': 'repeat(15, minmax(0, 1fr))',
       '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
      },
      screens: {
        'xs': '320px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
