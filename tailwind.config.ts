import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F0E3",
        "paper-deep": "#EFE7D2",
        ink: "#211D14",
        faint: "#75695A",
        rule: "#D8CCB0",
        gold: "#9A7B2D",
        "gold-deep": "#6F5719",
        up: "#1E7A4E",
        down: "#A63A2E",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        caps: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
