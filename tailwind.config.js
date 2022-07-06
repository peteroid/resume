module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: { raw: 'print, (min-width: 640px)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
