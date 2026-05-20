import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0e0c0a",
          800: "#14110d",
          700: "#1c1813",
          600: "#262019",
          500: "#332b21",
          400: "#473c2e",
        },
        bone: {
          50: "#f5efe2",
          100: "#e9e1d0",
          200: "#dacdb0",
          300: "#c4b491",
          400: "#a89870",
          500: "#8a7a55",
        },
        cinnabar: {
          900: "#5e1b13",
          800: "#7e271b",
          700: "#9c3122",
          600: "#bb3c29",
          500: "#cf4a32",
          400: "#dd6a52",
          300: "#e89580",
        },
        bronze: {
          600: "#8a6f3c",
          500: "#a8894e",
          400: "#c2a466",
          300: "#d6bd88",
        },
        jade: {
          600: "#4f6f5c",
          500: "#6a8c76",
          400: "#8aa896",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        serif: ['"Spectral"', "ui-serif", "Georgia", "serif"],
        zh: ['"Noto Serif SC"', '"Source Han Serif SC"', "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        seal: "0 0 0 1px rgba(187,60,41,0.4), 0 8px 30px -12px rgba(0,0,0,0.8)",
        leaf: "inset 0 0 0 1px rgba(168,137,78,0.25), 0 14px 40px -18px rgba(0,0,0,0.85)",
      },
    },
  },
  plugins: [],
};

export default config;
