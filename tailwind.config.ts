import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xxl: "1440px",
      },
      colors: {
        background: "#1a1b26",
        greentext: "#59d1c2",
        body: "#9CA3AF",
        container: "#4B5563",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require('flowbite/plugin')],
};
export default config;
