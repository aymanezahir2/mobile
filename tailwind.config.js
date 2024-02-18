/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        mainColor:"#4D2F41",
        secondaryColor:"#FB84C6",
        bgC:"#f7d2e7"
      },
      fontFamily:{
        boldMain: "CairoBold",
        lightMain: "CairoLight",
      },
      screens:{
        xs:'469px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
