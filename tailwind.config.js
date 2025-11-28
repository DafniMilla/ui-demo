
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],

 
  corePlugins: {
    preflight: false,
  },

  theme: {
    extend: {
      colors: {
        
      botao: {
          500: "#fc26dfff",
      
        }}

    },
  },
  plugins: [],
};
