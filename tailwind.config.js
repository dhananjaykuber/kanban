/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      lightgrey: '#dbdbdb',
      grey: '#f5f5f5',
      darkgrey: '#787486',
    },
  },
  plugins: [],
};
