import * as R from 'react'
import { Pokemon } from '../interfaces'
import api from '../services/api'

type PokemonContext = {
  addNewPokemon: (data: any) => any
}
const PokemonContext = R.createContext<PokemonContext>(null)

export const PokemonProvider = ({ children }) => {
  const addNewPokemon = R.useCallback(async (values: any) => {
    try {
      const { data } = await api.post<Pokemon>('new', values)

      console.log(data)
    } catch (error) {
      throw new Error(error)
    }
  }, [])

  return (
    <PokemonContext.Provider value={{ addNewPokemon }}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemonContext = () => {
  const context = R.useContext(PokemonContext)
  if (!context) {
    throw new Error('PokemonContext must be inside App')
  }

  return context
}
