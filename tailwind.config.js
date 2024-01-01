/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      glitch: ["Rubik Glitch", "sans"],
      quick: ["Quicksand", "sans"],
      oswald: ["Oswald", "sans"],
    },
    screens: {
      phone: { max: "550px" },
      tablet: { min: "550px", max: "1023.9px" },
    },
    extend: {},
  },
  plugins: [],
};
