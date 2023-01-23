
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('/img/sanFrancisco.jpg')",
        'bali': "url('/img/bali.jpg')",
        'chicago': "url('/img/chicago.jpg')",
        'europe': "url('/img/europe.jpg')",
        'iceland': "url('/img/iceland.jpg')",
        'LA': "url('/img/LA.jpg')",
        'miami': "url('/img/miami.jpg,')",
        'new_york': "url('/img/new_york.jpg')",
        'norway': "url('/img/norway.jpg')",
        'sanFranciscoDesktop': "url('/img/sanFranciscoDesktop.jpg')",
        'seattle': "url('/img/seattle.jpg')",
        'switzerland': "url('/img/switzerland.jpg')",
        'sydney': "url('/img/sydney.jpg')",
        'yosemite': "url('/img/yosemite.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('Colors'),
        'primary':"#CC2D4A",
        'secondary':"#8FA206",
        'tertiary':"#61AEC9",
      }),
      textColor: {
        'primary':"#CC2D4A",
        'secondary':"#8FA206",
        'tertiary':"#61AEC9",
      },
      fontFamily: {
        Montserrat : ['Montserrat','san-serif']
      }
    },
  },
  variants: {
    width:["responsive","hover","focus"],
  },
  plugins: [],
}
