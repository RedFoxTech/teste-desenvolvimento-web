import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

addDecorator(withNextRouter())

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: theme.colors.white },
      {
        name: 'dark',
        value: theme.colors.black,
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  ),
]
/* export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
 */
