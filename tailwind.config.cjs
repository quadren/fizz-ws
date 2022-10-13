/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      "primary" : "#9349FF",
      "secondary" : "#FFCE47",
      "bg" : "#FAFAFA",
      "surface" : "#EEEEEE",
      "on-surface" : "#111111",
    },
    letterSpacing : {
      "spaced" : "3.3%",
    },
    extend: {
      fontFamily : {
        'general' : ["General", "sans-serif"],
      },
    },
  },
  plugins: [],
}
