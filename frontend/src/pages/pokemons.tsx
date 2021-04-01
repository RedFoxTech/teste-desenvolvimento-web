import Pokemons, { PokemonsTemplateProps } from 'templates/Pokemons'
import { pokemonsMapper } from 'utils/mappers'

export default function Index(props: PokemonsTemplateProps) {
  return <Pokemons {...props} />
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/pokemons/')

  const data = await response.json()

  if (!data) {
    return {
      redirect: {
        destination: '/pokemons',
        permanent: false,
      },
    }
  }
  return {
    props: {
      pokemons: pokemonsMapper(data),
    },
  }
}
