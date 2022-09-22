/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      small: '0px',
      mobile: '359px',
      mobileHor: '640px',
      tablet: '768px',
      laptop: '976px',
      desktop: '1440px',
    },
    extend: {
      fontFamily: {
        'rubik': 'Rubik, sans-serif',
        },
        colors: {
          azulAgro: '#1755A1',
          azulAgroClaro: '#00ABEA',
          offWhite: '#F2F2F2',
        },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
