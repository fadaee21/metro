import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "border-yellow": "var(--border-yellow-hex)",
        "button-red": "var(--button-red-hex)",
        "button-red-l": "var(--button-red-hex-l)",
        "field-background": "var(--field-background)",
        "field-border": "var(--field-border)",
        "field-label": "var(--field-label)",
        "font-title-black": "var(--font-title-black)",
        "background-gray": "var(--background-gray-hex)",
        "background-gray-l": "var(--background-gray-l-hex)",
      },
      width: {
        48: "48%",
        95: "95%",
        398: "398px",
        500: "500px",
      },
      height: {
        95: "95%",
      },
      fontSize: {
        2.3: "2.3rem",
      },
    },
  },
  plugins: [],
};
export default config;
