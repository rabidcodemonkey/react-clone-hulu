module.exports = {
  mode: 'jit', //- From papa video - use latest feature in tailwindo
  // purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], //- From tailwind install
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
