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

 
  corePlugins: {
    preflight: false,
  },

  theme: {
    extend: {

    },
  },
  plugins: [],
};
