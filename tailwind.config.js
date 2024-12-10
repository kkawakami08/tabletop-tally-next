/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#EEE5E9",
        black: "#171A21",
        terracotta: "#A26769",
        peach: "#F1BF98",
        forest: "#6B818C",
      },
      fontFamily: {
        crimson: ["Crimson Pro", "serif"],
      },
    },
  },
  plugins: [],
};
