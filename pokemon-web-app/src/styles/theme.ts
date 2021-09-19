import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    blue: {
      '900': '#03000D'
    }
  },
  fonts: {
    // heading: 'Ubuntu',
    // body: 'Ubuntu'
  },
  styles: {
    global: {
      body: {
        bg: 'blue.900',
        color: 'blue.50'
      }
    }
  }
})
