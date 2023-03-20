/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  important: "#root",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "winter", "night"
    ],
  },
  theme: {
    extend: {},
    fontFamily: {
      Kanit: ['Palanquin Dark'],
      Polan: ['Kanit']
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
