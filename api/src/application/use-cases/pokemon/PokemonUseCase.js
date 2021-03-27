const Pokemon = require("../../../domain/entities/Pokemon");

class PokemonUseCase {
  constructor({ pokemonRepository }) {
    this.pokemonRepository = pokemonRepository;
  }

  async create(data) {
    const pokemon = new Pokemon({...data});
    
    await this.pokemonRepository.create({...pokemon.getValues()});
    return;
  }

  async dropPokemon({ pokemonNumber , userId }) {
    const row = await this.pokemonRepository.dropPokemon({ pokemonNumber, userId });
    return row;
  }

  async dropAllPokemons({ userId }) {
    await this.pokemonRepository.dropAllPokemons({ userId });
    return;
  }

  async updatePokemon({ pokemonNumber, userId, newData }) {
    await this.pokemonRepository.updatePokemon({ pokemonNumber, userId, ...newData});
    return;
  }

  async existsPokemon({ name, userId }) {
    const exists = await this.pokemonRepository.existsPokemon({ name, userId });
    return exists;
  }

  async existsPokemonById({ pokemonNumber, userId }) { 
    const exists = await this.pokemonRepository.existsPokemonById({ pokemonNumber, userId });
    return exists;
  }

  async getAllPokemons({ userId, page, type, weather, minStatTotal, maxStatTotal, aboveStat }) {
    const pokemons = await this.pokemonRepository.getAllPokemons({ 
      userId, type, weather, 
      minStatTotal, maxStatTotal, 
      aboveStat, page});

    return pokemons;
  }
  
  async getOldPokemonImage({ pokemonNumber, userId }) {
    const row = await this.pokemonRepository.getOldPokemonImage({ pokemonNumber, userId });
    return row;
  }

  async updatePokemonImage({ pokemonNumber, userId, imageName }) {
    await this.pokemonRepository.updatePokemonImage({ pokemonNumber, userId, imageName });
    return;
  }

  async getPokemon({ pokemonNumber, userId }) {
    const pokemon = await this.pokemonRepository.getPokemon({ pokemonNumber, userId });
    return pokemon;
  }
}

module.exports = PokemonUseCase;