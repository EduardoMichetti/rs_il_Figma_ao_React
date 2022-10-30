/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx', //qualquer pasta e qualquer arquivo vão receber estilização.
  ],

  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24, 
      '2xl': 32, //nome de objetos não podem iniciar com numero por isso precisa ficar entre aspas
    },

    colors: {
      transparente: 'transparent',

      'preto': '#000',
      'branco': '#FFF',
  
      cinza:{
        900: '#000000',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },

      azul:{
        500: '#81D8F7',
        300: '#9BE1FB',
      }
  

    },

    extend: {
      fontFamily: { //define uma fonte sem serifa padrão
        sans: 'Inter, sans-serif' //vai carregar a font inter e se não conseguir a sans-serif
      }
    },
  },

  plugins: [],
}
