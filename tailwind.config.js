/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        one: "#14395B",
        two: "#2289FF",
        three: "#3777ff",
        four: "#0A94D5",
        five: "#61C8F1",
        darkbg0: "#232323",
        darkbg1: "#191919",
        darktext: "#ffffff",
      },
      boxShadow: {
        custom: "0px 0px 6px 0px #2289FF",
      },
    },

      // 473335
      // 413620
      // 524632
      // 432818
  },
  plugins: [require("tailwind-scrollbar")],
};
