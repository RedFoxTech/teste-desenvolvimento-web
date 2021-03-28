import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0065cd",
    },
    secondary: {
      main: "#e68b04"
    },
    dark: {
      main: "#000c18"
    },
    darkLight: {
      main: "#0f1720"
    },
    error: {
      main: "#b12139"
    },
    success: {
      main: "#109b43"
    },
    white: {
      main: "#F8FAFC"
    },
    gray: {
      main: "#D1D5DB"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif']
  }
});

function CustomThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}

export default CustomThemeProvider;