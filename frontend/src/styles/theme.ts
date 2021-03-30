export default {
  grid: {
    container: '93.5rem',
  },
  border: {
    radius: '1.5rem',
  },
  font: {
    family: 'Roboto',
    light: 300,
    normal: 'normal',
    bold: 700,
    semibold: 500,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.4rem',
      xxlarge: '4.0rem',
      huge: '6.0rem',
    },
  },
  colors: {
    primary: '#e42021',
    mainBg: '#FEFEFE',
    white: '#FFFFFF',
    black: '#707070',
    darkGray: '#A8A8B3',
    gray: '#BFBFBF',
    lightGray: '#EAEAEA',
  },
  spacings: {
    xxsmall: '0.7rem',
    xsmall: '1.6rem',
    small: '2.0rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '5.0rem',
    xxlarge: '10.0rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const
