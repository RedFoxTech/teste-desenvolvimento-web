import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Pokemon Dashboard</title>
        <link rel="shortcut icon" href="img/icon-512.png" />
        <link rel="apple-touch-icon" href="img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="simple content boilerplate" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
