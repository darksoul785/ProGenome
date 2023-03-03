/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#3961AB",
        secondary: "#44AF58",
        cont: "#E4E8EB",
        white: "rgba(255, 255, 255, 1)",
        dimBlue: "#3961AB",
        dimGray: "#000000"
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};