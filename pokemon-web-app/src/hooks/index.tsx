import { PokemonProvider } from './pokemon'

export const AppProvider = ({ children }) => (
  <PokemonProvider>{children}</PokemonProvider>
)
