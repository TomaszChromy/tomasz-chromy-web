/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
        },
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 45px rgba(0,0,0,0.55)",
      },
      borderRadius: {
        card: "1.25rem",
      },
    },
  },
  plugins: [],
};
