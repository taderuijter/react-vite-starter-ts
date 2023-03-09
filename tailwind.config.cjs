/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#12022F",
        secondary: "#594D6D",
        third: "#D8D5DD",
        fourth: "#FFDDA9",
        fifth: "#391484",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
