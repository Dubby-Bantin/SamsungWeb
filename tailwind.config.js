/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "red",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('../../assets/galaxy-s23-ultra-highlights-kv.avif')",
      },
    },
  },
  plugins: [],
};
