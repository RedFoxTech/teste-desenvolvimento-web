import { PokemonCardProps } from 'components/PokemonCard'

export const pokemonsMapper = (pokemons: PokemonCardProps[] | undefined) => {
  return pokemons
    ? pokemons.map((pokemon: any) => ({
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
        new: pokemon['New'],
        notGettable: pokemon['Not-Gettable'],
        futureEvolve: pokemon['Future Evolve'],
        cp40: pokemon['100% CP @ 40'],
        cp39: pokemon['100% CP @ 39'],
      }))
    : []
}
