import { useRouter } from 'next/router'

import Pokemon, { PokemonTemplateProps } from 'templates/Pokemon'

export default function Index(props: PokemonTemplateProps) {
  //enquanto a rota nao tiver sido gerada.. o ideal é mostrar loading
  const router = useRouter()
  if (router.isFallback) return null

  return <Pokemon {...props} />
}

export async function getStaticPaths() {
  const response = await fetch(
    'http://localhost:3333/pokemons',
    //'https://run.mocky.io/v3/e85e336d-2a15-403b-a777-fdebaf38052f',
    //'https://run.mocky.io/v3/80f925cd-3c57-475d-9acb-b0b784f8f1f2',
  )

  const data = await response.json()

  const paths = data.map((pokemon: any) => ({
    params: { name: pokemon['Name'] },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }: any) {
  //get game data
  const response = await fetch(
    //usar a rota para buscar pelo nome que será criada na api.
    'https://run.mocky.io/v3/e85e336d-2a15-403b-a777-fdebaf38052f',
    //'https://run.mocky.io/v3/80f925cd-3c57-475d-9acb-b0b784f8f1f2',
  )

  const data = await response.json()

  if (!data.length) {
    return { notFound: false }
  }

  const pokemon = data[0]

  console.log(pokemon)

  return {
    revalidate: 60,
    props: {
      //pokemonInfo: pokemonsMapper(pokemon),
      pokemonInfo: {
        name: pokemon['Name'],
        id: pokemon['Pokedex Number'],
        image: pokemon['Img name']
          ? `/img/${pokemon['Img name']}.png`
          : `/img/pokemon-notfound.png`,
        generation: pokemon['Generation'],
        evolutionStage: pokemon['Evolution Stage'],
        evolved: pokemon['Evolved'],
        familyId: pokemon['FamilyID'],
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
