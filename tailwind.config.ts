/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // добавляем папку app
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        n1dark: "#0d0d0d",
        n1red: "#ff2c2c",
        n1gray: "#1f1f1f",
        n1gold: "#ffd700",
      },
    },
  },
  plugins: [],
};
