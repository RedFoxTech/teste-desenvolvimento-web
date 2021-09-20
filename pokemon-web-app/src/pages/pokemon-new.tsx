import { NewPokemonForm } from '../components/NewPokemonForm'
import * as C from '@chakra-ui/react'

export default function AddNewPokemon() {
  return (
    <C.VStack minHeight="100vh" alignItems="center" justify="center">
      <NewPokemonForm />
    </C.VStack>
  )
}
