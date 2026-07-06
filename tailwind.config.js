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
        "ink-dark": "#11200E",
        "ink-light": "#32492D",
        "accent-green": "#4CAF2E",
        "accent-green-hover": "#3E9623",
        backdrop: "#F4F1EA",
        "backdrop-dark": "#EBE7DD",
        muted: "#6B7A63",
        body: "#3E4A38",
        "card-bg": "#E4F1CB",
        "card-bg-light": "#F2F9E8",
        emerald: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
        }
      },
      spacing: {
        112: "28rem",
      },
      boxShadow: {
        "premium": "0 20px 40px -15px rgba(31, 46, 27, 0.08), 0 0 0 1px rgba(31, 46, 27, 0.02)",
        "premium-hover": "0 30px 60px -20px rgba(31, 46, 27, 0.15), 0 0 0 1px rgba(31, 46, 27, 0.04), 0 12px 24px -10px rgba(76, 175, 46, 0.1)",
        "premium-dark": "0 20px 40px -15px rgba(0, 0, 0, 0.4)",
        "glass": "0 8px 32px 0 rgba(31, 46, 27, 0.08)",
      }
    },
  },
  plugins: [],
};
