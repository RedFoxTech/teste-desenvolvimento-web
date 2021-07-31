import * as types from "../../../server/types";

export async function getPokemons(filter?: string) {
    const response = await fetch("/getPokemons").then((res) => res.json());
    const pokemonList = response[0].data;

    // Removing excel header.
    pokemonList.shift();

    var formatedPokemons: types.Pokemon[] = [];

    pokemonList.forEach((pokemon: any) => {
        const formatedPokemon = formatPokemon(pokemon);
        formatedPokemons.push(formatedPokemon);
    });

    if (filter) {
        formatedPokemons = stringFilter(formatedPokemons, filter)
    }

    return formatedPokemons;
}

function formatPokemon(pokemon: any): types.Pokemon {
    var i = 0
    return {
        Row: pokemon[i++],
        Name: pokemon[i++],
        PokedexNumber: pokemon[i++],
        ImgName: pokemon[i++],
        Generation: pokemon[i++],
        EvolutionStage: pokemon[i++],
        Evolved: pokemon[i++],
        FamilyID: pokemon[i++],
        CrossGen: pokemon[i++],
        Type1: pokemon[i++],
        Type2: pokemon[i++],
        Weather1: pokemon[i++],
        Weather2: pokemon[i++],
        StatTotal: pokemon[i++],
        ATK: pokemon[i++],
        DEF: pokemon[i++],
        STA: pokemon[i++],
        Legendary: pokemon[i++],
        Aquireable: pokemon[i++],
        Spawns: pokemon[i++],
        Regional: pokemon[i++],
        Raidable: pokemon[i++],
        Hatchable: pokemon[i++],
        Shiny: pokemon[i++],
        Nest: pokemon[i++],
        New: pokemon[i++],
        NotGettable: pokemon[i++],
        FutureEvolve: pokemon[i++],
        CP40: pokemon[i++],
        CP39: pokemon[i++],
    }
}

function stringFilter(pokemons: types.Pokemon[], filter: string): types.Pokemon[] {

    return pokemons.filter((pokemon) =>
        pokemon.Name.toLowerCase().includes(filter.toLowerCase()) ||
        pokemon.Type1.toLowerCase().includes(filter.toLowerCase()) ||
        (pokemon.Type2 && pokemon.Type2.toLowerCase().includes(filter.toLowerCase())) ||
        pokemon.Weather1.toLowerCase().includes(filter.toLowerCase()) ||
        (pokemon.Weather2 && pokemon.Weather2.toLowerCase().includes(filter.toLowerCase())) ||
        pokemon.PokedexNumber === +filter
    );
}


export async function getAbilities(pokemonId: number): Promise<types.PokemonAbility[]> {
    const response = await fetch(`/getPokemonAbilities?id=${pokemonId}`).then((res) => res.json());

    return response;
}