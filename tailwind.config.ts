// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    // Include additional paths if you create other directories (e.g., components/)
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f6ca8c",    // Example: a strong blue for header/footer backgrounds
        secondary: "#F59E0B",  // Example: a warm yellow for buttons/links
        accent: "#10B981",     // Example: a fresh green for accents
      },
    },
  },
  plugins: [],
}
