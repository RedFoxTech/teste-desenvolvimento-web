import Pokemons, { PokemonsTemplateProps } from 'templates/Pokemons'
import { pokemonsMapper } from 'utils/mappers'

export default function Index(props: PokemonsTemplateProps) {
  return <Pokemons {...props} />
}

export async function getServerSideProps() {
  const response = await fetch(
    'http://localhost:3333/pokemons/',
    //'https://run.mocky.io/v3/e85e336d-2a15-403b-a777-fdebaf38052f',
    //'https://run.mocky.io/v3/80f925cd-3c57-475d-9acb-b0b784f8f1f2',
  )

  const data = await response.json()
  return {
    props: {
      pokemons: pokemonsMapper(data),
    },
  }
}
