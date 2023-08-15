import type { Config } from "tailwindcss";

/*
mytheme: {
          primary: "#2ccff4",
          secondary: "#e24a70",
          accent: "#e88fdd",
          neutral: "#1c2130",
          "base-100": "#294656",
          info: "#91dcf2",
          success: "#6ddfd3",
          warning: "#b59a12",
          error: "#ed3731",
        },
*/

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fbfd05",
          secondary: "#2ccff4",
          accent: "#e88fdd",
          neutral: "#1c2130",
          "base-100": "#294656",
          info: "#91dcf2",
          success: "#6ddfd3",
          warning: "#b59a12",
          error: "#ed3731",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
