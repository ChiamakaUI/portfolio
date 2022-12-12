/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'abril': ['Abril Fatface', 'cursive'],
        'gabriela': ['Gabriela', 'serif']
      },
      colors: {
        'black-overlay': 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
