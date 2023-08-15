/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primerColor' : '#203F71',
        'secunsColor' : '#1CB9C8',
        'titleColor' : '#203F71',
        'paragraphColor' : '#FFFFFF',
        'bgPrimerColor' : ' rgb(55 65 81)'
      }
    },
  },
  plugins: [],
}

