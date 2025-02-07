/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "serif"],
      },
      backgroundImage: {
        "plant-image": "url('/plant-leaves.avif')",
      },
    },
  },
  plugins: [],
};
