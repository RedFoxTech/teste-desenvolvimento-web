import { ModalProvider } from '../context/ModalContext'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
//import { ToastContainer } from 'react-toastify'

import { AppProps } from 'next/app'
import Head from 'next/head'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title> RedFox - Test </title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="Wesley M. Oliveira" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </ModalProvider>
  )
}

export default App
