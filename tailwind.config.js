/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/main.css",
    "./src/main.js",
  ],
  theme: {
    extend: {},
    colors: {
      SoftBlue: "hsl(231, 69%, 60%)",
      SoftRed: "hsl(0, 94%, 66%)",
      GrayishBlue: "hsl(229, 8%, 60%)",
      VeryDarkBlue: "hsl(229, 31%, 21%)",
      white: "hsl(0, 0%, 100%)"
    },
    fontWeight: {
      500: "500",
      400: "400",
    },
  },
  plugins: [],
}
