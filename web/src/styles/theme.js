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
      main: "#ea0043"
    },
    success: {
      main: "#00d862",
    },
    white: {
      main: "#F8FAFC"
    },
    blue: {
      main: "#00add3",
    },
    gray: {
      main: "#D1D5DB"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 780,
      md: 980,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'],
    htmlFontSize: 10,
    "@media screen and (min-width: 360px)": {
      htmlFontSize: 8,
    }
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