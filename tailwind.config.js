/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily:{
        'overpass': ['overpass'],
        'ubuntu': ['ubuntu']
      },
      colors:{
        'vlightRed': ' hsl(13, 100%, 72%)',
        'ctaRed': 'hsl(356, 100%, 66%)',
        'hoverBack': ' hsl(355, 100%, 74%)',
        'vdarkblue': 'hsl(208, 49%, 24%)',
        'white': 'hsl(0, 0%, 100%)',
        'grayishBlue': 'hsl(240, 2%, 79%)',
        'vdarkgrayishblue': 'hsl(207, 13%, 34%)',
        'vdarkblackBlue': 'hsl(240, 10%, 16%)',
        'lightRed': 'hsl(353, 100%, 62%)',
        'vdarkgrayBlue': 'hsl(237, 17%, 21%)',
        'vdarkdesaturatedBlue': 'hsl(237, 23%, 32%)'
      }
    },
  },
  plugins: [],
}
