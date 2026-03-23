/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Ajoute tes propres couleurs
      colors: {
        primary: "#1E40AF",     // bleu personnalisé
        secondary: "#F59E0B",   // orange
        accent: "#10B981",      // vert
      },
      // Polices personnalisées
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      // Espacements, animations, etc.
      spacing: {
        "128": "32rem",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};