import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a1b26",
        greentext: "#59d1c2",
        body: "#9CA3AF",
        container: "#4B5563",
      },
    },
  },
  plugins: [],
};
export default config;
