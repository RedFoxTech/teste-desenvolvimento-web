import PokemonType from '../../../shared/declarations/enums/PokemonType';
import PokemonWeather from '../../../shared/declarations/enums/Weather';
import Pokemon from '../../../shared/declarations/interfaces/Pokemon';

/**
 * @filedescription Traz a Model que reflete a Pokedex na planilha de pokémon.
 * @module packages/backend/models/Pokemon
 * @see {@link module:packages/backend/schemas/PokemonSchema}
 * @version 0.0.2
 * @since 29/07/2021
 */

class PokemonModel {
    row: number;
    name: string;
    pokedexId: number;
    imageName: string;
    generation: string;
    evolutionState: string;
    evolved: boolean;
    familyId?: number;
    crossGeneration: boolean;
    type1: PokemonType;
    type2?: PokemonType;
    weather1: PokemonWeather;
    weather2?: PokemonWeather;
    statsSum: number;
    attack: number;
    defense: number;
    staminaHP: number;
    legendary: boolean;
    acquirable: boolean;
    spawns: boolean;
    regional: boolean;
    raidable: number;
    hatchable: number;
    shiny: boolean;
    nest: boolean;
    isNewPokemon: boolean;
    notGettable: boolean;
    futureEvolve: boolean;
    fullCPLevel40: number;
    fullCPLevel39: number;

    /**
     * @description Cria um novo objeto PokemonModel.
     * @param {Pokemon} pokemon - O objeto Pokemon.
     * @returns {PokemonModel}
     * @since 0.0.1
     * @version 0.0.1
     * @public
     * @alias module:packages/backend/models/Pokemon
     */

    constructor({
      row,
      name,
      pokedexId,
      imageName,
      generation,
      evolutionState,
      evolved,
      familyId,
      crossGeneration,
      type1,
      type2,
      weather1,
      weather2,
      statsSum,
      attack,
      defense,
      staminaHP,
      legendary,
      acquirable,
      spawns,
      regional,
      raidable,
      hatchable,
      shiny,
      nest,
      isNewPokemon,
      notGettable,
      futureEvolve,
      fullCPLevel40,
      fullCPLevel39,
    }: Pokemon) {
      this.row = row;
      this.name = name;
      this.pokedexId = pokedexId;
      this.imageName = imageName;
      this.generation = generation;
      this.evolutionState = evolutionState;
      this.evolved = evolved;
      this.familyId = familyId;
      this.crossGeneration = crossGeneration;
      this.type1 = type1;
      this.type2 = type2;
      this.weather1 = weather1;
      this.weather2 = weather2;
      this.statsSum = statsSum;
      this.attack = attack;
      this.defense = defense;
      this.staminaHP = staminaHP;
      this.legendary = legendary;
      this.acquirable = acquirable;
      this.spawns = spawns;
      this.regional = regional;
      this.raidable = raidable;
      this.hatchable = hatchable;
      this.shiny = shiny;
      this.nest = nest;
      this.isNewPokemon = isNewPokemon;
      this.notGettable = notGettable;
      this.futureEvolve = futureEvolve;
      this.fullCPLevel40 = fullCPLevel40;
      this.fullCPLevel39 = fullCPLevel39;
    }
}

export default PokemonModel;
