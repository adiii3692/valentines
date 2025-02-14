import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        moveUp: {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        moveUp: "moveUp 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
