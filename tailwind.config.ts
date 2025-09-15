import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004080', // example dark blue from logo
          light: '#3366cc',
          dark: '#00264d',
        },
        secondary: {
          DEFAULT: '#ffcc00', // example yellow from logo
          light: '#ffdd33',
          dark: '#cc9900',
        }
      }
    }
  },
  plugins: []
};
export default config;
