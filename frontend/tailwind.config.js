module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        '2xl': '10px 10px 60px #e9e8e7',
        'move': 'inset 0 0 0 1px #e9e8e7'
      },
      flex: {
        '2': '0 0 auto',
        '3': '0 0 300px',
        '4': '0 0 128px',
        '5': '3 0',
        '6': '2 0',
        '7': '0 0 100%'
      },
      dropShadow: {
        '3xl': '4px 4px 4px rgba(4,8,12,.2)',
      },
      minHeight: {
        '0': '96px',
       },
       minWidth: {
        '0': '96px',      
       },
       colors:{
        gray:{
          'light': '#e9e8e7'
        },
        green: {
          'card': 'rgba(41, 210, 41, 1)',
        }
       },
       borderRadius: {
       'sm': '2.5rem',
       
      },
      lineHeight: {
        'extra': '3.75rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
