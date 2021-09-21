import * as C from '@chakra-ui/react'
import { DataTable } from '../DataTable'
import { Header } from '../Header'
import { Pokemon } from '../../interfaces'

interface Props {
  pokemons: Pokemon[]
}

export const Main = ({ pokemons }: Props) => {
  return (
    <C.Flex alignItems="center" justifyContent="center" w="100%">
      <C.Stack maxWidth={1200} width="full" spacing={10}>
        <Header />

        <DataTable data={pokemons} />
      </C.Stack>
    </C.Flex>
  )
}
