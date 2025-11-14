import { color } from "./styles/color";
import { fontFamily } from "./styles/fontFamily";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],

  // 🔥 ESSA PARTE REMOVE O RESET QUE QUEBRA O NATIVEBASE
  corePlugins: {
    preflight: false,
  },

  theme: {
    extend: {
      // suas extensões
    },
  },
  plugins: [],
};
