/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#141413',
        'custom-blue': '#88D1FF',
      },
    },
  },
  plugins: [],
}