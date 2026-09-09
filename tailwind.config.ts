import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f29118",
          olive: "#94a723",
          terracotta: "#ab421d",
          cream: "#f1e3d5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgba(171, 66, 29, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
