/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/pages/**/*.html"],
  theme: {
    extend: {
      colors: {
        mint: "#3EB489",
        primary: "#44576d",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
