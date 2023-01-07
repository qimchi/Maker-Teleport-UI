/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      green: "#1AAB9B",
      darkBlack: "#10182B",
      borderColor: "#F4F6F6",
      lightGrey: "#96999C",
      lightText: "#BFBFBF",
      darkBtn: "#25273D",
    },
  },
  plugins: [],
};
