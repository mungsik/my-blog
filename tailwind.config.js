/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jalnan: ["Jalnan", "sans-serif"],
        SCore_Regular: ["S-Core_Regular", "sans-serif"],
        SCore_Medium: ["S-Core_Medium", "sans-serif"],
        SCore_Bold: ["S-Core_Bold", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
