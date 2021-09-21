import { GetServerSideProps } from 'next'
import { Main } from '../components/Main'
import api from '../services/api'
import { Pokemon } from '../interfaces'

interface Props {
  pokemons: Pokemon[]
}

export default function Home({ pokemons }: Props) {
  return <Main pokemons={pokemons} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('list')
  const pokemons = response.data.body

  return {
    props: {
      pokemons
    }
  }
}
