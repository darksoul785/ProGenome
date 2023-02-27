/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#6EB330",
        secondary: "#3D71BD",
        white: "rgba(255, 255, 255, 1)",
        dimBlue: "rgba(61, 113, 189, 1)",
      },
      fontFamily: {
        poppins: ["Montserrat"],
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