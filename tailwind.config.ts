import { Black_And_White_Picture } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        black:{
          DEFAULT : '#000',
          100:'#000319'
        }
      }
    },
  },
  plugins: [],
};
export default config;
