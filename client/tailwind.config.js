/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "homepageImg": "url('/src/assets/cropped_background.jpg')"
      }
    },
  },
  plugins: [],
}

