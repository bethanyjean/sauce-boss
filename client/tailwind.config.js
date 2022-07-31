
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ['Great Vibes'],
    },
    colors: {
      'beige': '#cdc295ff',
      'sepia': '#653400ff',
      'red': '#b80809ff',
      'green': '#567c01ff',
      'brown': '#4E2618',
      'light': '#ffd6adff',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}