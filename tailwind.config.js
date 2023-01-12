/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#4ECCA3',
        'background-black': '#393E46',
      },
      fontFamily: {
        'Bungiee': ['Bungee Spice', 'cursive']
      }

    },
  },
  plugins: [],
}
