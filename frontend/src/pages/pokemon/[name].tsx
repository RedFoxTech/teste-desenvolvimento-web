import { useRouter } from 'next/router'

import Pokemon, { PokemonTemplateProps } from 'templates/Pokemon'

export default function Index(props: PokemonTemplateProps) {
  //enquanto a rota nao tiver sido gerada.. o ideal é mostrar loading
  const router = useRouter()
  if (router.isFallback) return null

  return <Pokemon {...props} />
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3333/pokemons')

  const data = await response.json()

  const paths = data.map((pokemon: any) => ({
    params: { name: pokemon['Name'] },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }: any) {
  const response = await fetch(`http://localhost:3333/pokemons/${params.name} `)

  const data = await response.json()

  if (!data.length) {
    return { notFound: false }
  }

  const pokemon = data[0]
  console.log(pokemon)
  return {
    revalidate: 60,
    props: {
      pokemonInfo: {
        name: pokemon['Name'],
        id: pokemon._id,
        pokedexNumber: pokemon['Pokedex Number'],
        image: `http://localhost:3333/images/${pokemon['Img name']}`,
        generation: pokemon['Generation'],
        evolutionStage: pokemon['Evolution Stage'],
        evolved: pokemon['Evolved'],
        familyID: pokemon['FamilyID'],
        crossGen: pokemon['Cross Gen'],
        pokemonType: pokemon['Type 1'],
        pokemonType2: pokemon['Type 2'],
        weather: pokemon['Weather 1'],
        weather2: pokemon['Weather 2'],
        statTotal: pokemon['STAT TOTAL'],
        atk: pokemon['ATK'],
        def: pokemon['DEF'],
        sta: pokemon['STA'],
        legendary: pokemon['Legendary'],
        aquireable: pokemon['Aquireable'],
        spawns: pokemon['Spawns'],
        regional: pokemon['Regional'],
        raidable: pokemon['Raidable'],
        hatchable: pokemon['Hatchable'],
        shiny: pokemon['Shiny'],
        nest: pokemon['Nest'],
        notGettable: pokemon['Not-Gettable'],
        futureEvolve: pokemon['Future Evolve'],
        cp40: pokemon['100% CP @ 40'],
        cp39: pokemon['100% CP @ 39'],
      },
    },
  }
}
