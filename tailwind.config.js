/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'sm': '26px',
      'md': '32px',
      'lg': '40px',
      'xl': '67px',
      '2xl': '80px',
    },
    letterSpacing: {
      normal: '0.045em',
    },
    extend: {
      colors: {
        lightCream: "#FDECDA",
        cream: "#FCDDBC",
        lightPinkole: "#FBE6E7",
        pinkole: "#EF959D",
        blackole: "#2C2226",
        swampole: "#B3D0B4"
      },
      spacing: {
        '98': '25em',
      },
      fontFamily: {
        sans: ["Catamaran", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
        rosario: ["Rosario", "sans-serif"]
      }
    },
  },
  plugins: [],
}
