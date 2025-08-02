import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futuristic: ["'Orbitron'", "sans-serif"],
      },
      colors: {
        primary: "#00FFE0",
        background: "#0A0A0A",
        accent: "#1B1F3B",
      },
    },
  },
  plugins: [],
};
export default config;
