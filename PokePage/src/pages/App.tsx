import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "../styles/global";
import { Router } from "../components/Router";

 export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
