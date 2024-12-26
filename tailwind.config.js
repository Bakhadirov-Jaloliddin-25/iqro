import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      clipPath: {
        "custom-curve": "ellipse(100% 75% at 100% 50%)",
      },
    },
    colors: {
      ...colors,
      primary: "#C61F1F",
      secondary: "#1E1E1E",
    },
    fontFamily: {
      k2d: ["k2d"],
      inter: ["inter"],
      poppins: ["poppins"],
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1040px",
        "2xl": "1308px",
      },
      padding: "1rem",
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms")],
};
