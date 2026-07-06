/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "nc-blue": "#273266",
        "nc-purple": { 400: "#5433ff66", 900: "#5433ffcf" },
        ink: "#1F2E1B",
        "accent-green": "#4CAF2E",
        backdrop: "#F4F1EA",
        muted: "#6B7A63",
        body: "#3E4A38",
        "card-bg": "#E4F1CB",
      },
      spacing: {
        112: "28rem",
      },
    },
  },
  plugins: [],
};
