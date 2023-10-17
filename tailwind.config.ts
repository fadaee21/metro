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
        "button-red": "var(--button-red-custom)",
        "button-red-l": "var(--button-red-custom-l)",
        "button-green": "var( --button-green-custom)",
        "button-green-l": "var( --button-green-custom-l)",
        "button-orange": "var(--button-orange-custom)",
        "button-orange-l": "var(--button-orange-custom-l)",
        "field-background": "var(--field-background)",
        "field-disabled": "var(--field-disabled)",
        "field-border": "var(--field-border)",
        "field-label": "var(--field-label)",
        "font-title-black": "var(--font-title-black)",
        "background-gray": "var(--background-gray-hex)",
        "background-gray-l": "var(--background-gray-l-hex)",
        "gray-light-5": "var(--gray-light-5)",
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
      borderRadius: {
        customRadius_1: "var(--border-radius_1)",
      },
    },
  },
  plugins: [],
};
export default config;
