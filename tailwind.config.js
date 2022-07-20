/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-yellow": "#e8be76",
        "my-green": "#3c8154",
      }
    },
  },
  plugins: [],
}
