/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      matter: ["Matter", "sans-serif"],
      GTWalsheimPro: ["GTWalsheimPro", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
