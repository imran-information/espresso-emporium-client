/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: ["Rancho", "cursive"],
      },
      backgroundImage: {
        'navbar-bg': "url('/src/assets/images/more/15.jpg')",
        'banner-bg': "url('/src/assets/images/more/3.png')",
        'footer-bg': "url('/src/assets/images/more/13.jpg')",
        'footer-bg-2': "url('/src/assets/images/more/24.jpg')",

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

