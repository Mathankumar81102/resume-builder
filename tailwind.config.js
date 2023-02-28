/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': 'hsl(160, 100%, 85%)',
      },
    },
  },
  plugins: [],
}
