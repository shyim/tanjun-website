/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#4240B2',
      },
      fontFamily: {
        fira: ['Fira Sans Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
