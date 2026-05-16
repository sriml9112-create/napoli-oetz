import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        bg: {
          DEFAULT: "#0e0c0a", // deep elegant near-black
          soft: "#161311",
          card: "#1c1815",
        },
        cream: {
          50: "#fbf6ec",
          100: "#f6efde",
          200: "#ece1c5",
          300: "#e0d0a4",
          400: "#cdb47b",
        },
        tomato: {
          DEFAULT: "#b21f1f",
          deep: "#8a1414",
          bright: "#d83434",
        },
        olive: {
          DEFAULT: "#6b7c3a",
          dark: "#4d5a26",
          light: "#9aa86a",
        },
        gold: {
          DEFAULT: "#c5a25a",
          soft: "#d9bd80",
          deep: "#a07f3a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grain":
          "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
        "warm-fade":
          "linear-gradient(180deg, rgba(14,12,10,0) 0%, rgba(14,12,10,0.65) 60%, rgba(14,12,10,0.95) 100%)",
      },
      boxShadow: {
        elev:
          "0 24px 60px -20px rgba(0,0,0,0.65), 0 8px 16px -8px rgba(0,0,0,0.45)",
        soft: "0 10px 30px -12px rgba(0,0,0,0.5)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
