import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
      },
      boxShadow: {
        premium: "0 30px 90px rgba(0, 0, 0, 0.38)",
        glow: "0 0 64px rgba(45, 212, 191, 0.16)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        "line-scan": {
          "0%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(140%)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.42" },
          "50%": { opacity: "0.95" },
        },
      },
      animation: {
        "line-scan": "line-scan 4.8s linear infinite",
        "soft-pulse": "soft-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
