module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#751AD6',
          200: '#521296',
          300: '#2F0A57',
          400: '#28094A',
          500: '#1C0633',
          default: '#28094A',
        },
        secondary: {
          100: '#F22970',
          200: '#B31E52',
          300: '#A61C4C',
          400: '#8C1841',
          500: '#66112F',
          default: '#F22970',
        },
        success: {
          100: '#6FF233',
          200: '#52B325',
          300: '#357318',
          400: '#2F6615',
          500: '#234D10',
          default: '#6FF233',
        },
        danger: {
          100: '#FA4838',
          200: '#E04031',
          300: '#BA3529',
          400: '#7A231B',
          500: '#3B110D',
          default: '#E04031',
        },
        warning: {
          100: '#FAB938',
          200: '#E0A631',
          300: '#BA8A29',
          400: '#7A5B1B',
          500: '#3B2B0D',
          default: '#FAB938',
        },
        info: {
          100: '#00E6E6',
          200: '#00A6A6',
          300: '#009999',
          400: '#008080',
          500: '#005959',
          default: '#00A6A6',
        },
      },
      fontFamily: {
        sans: ['Assistant', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
