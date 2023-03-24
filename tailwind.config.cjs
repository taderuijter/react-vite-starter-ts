/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@tailwindcss/forms")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#391484",
        secondary: "#594D6D",
      },
    },
  },
};
