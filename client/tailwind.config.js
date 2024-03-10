/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Bakilda"],
        Value_Sans_Pro_one: ["Value Sans Pro one"],
        Value_Sans_Pro_Two: ["Value_Sans_Pro_Two"],
        Abril: ["Abril"],
      },

      colors: {
        "wood-bark": "#270A05",
        "coffee-color": "#86371C",
        "custom-blue": "#344D67",
      },
    },
  },
  plugins: [],
};
