/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        '1200px': '1200px',
        '1280px': '1280px',
        '1400px': '1400px',
      },
    },
  },
  plugins: [],
}

