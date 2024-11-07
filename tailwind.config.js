/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/css/style.css", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mint: "#3EB489",
        primary: "#44576d",
      },
    },
  },
  plugins: [],
};
