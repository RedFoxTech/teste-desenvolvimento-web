"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbilities = exports.getPokemons = void 0;
function getPokemons(filter) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("/getPokemons").then((res) => res.json());
        const pokemonList = response[0].data;
        // Removing excel header.
        pokemonList.shift();
        var formatedPokemons = [];
        pokemonList.forEach((pokemon) => {
            const formatedPokemon = formatPokemon(pokemon);
            formatedPokemons.push(formatedPokemon);
        });
        if (filter) {
            formatedPokemons = stringFilter(formatedPokemons, filter);
        }
        return formatedPokemons;
    });
}
exports.getPokemons = getPokemons;
function formatPokemon(pokemon) {
    var i = 0;
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
    };
}
function stringFilter(pokemons, filter) {
    return pokemons.filter((pokemon) => pokemon.Name.toLowerCase().includes(filter.toLowerCase()) ||
        pokemon.Type1.toLowerCase().includes(filter.toLowerCase()) ||
        (pokemon.Type2 && pokemon.Type2.toLowerCase().includes(filter.toLowerCase())) ||
        pokemon.Weather1.toLowerCase().includes(filter.toLowerCase()) ||
        (pokemon.Weather2 && pokemon.Weather2.toLowerCase().includes(filter.toLowerCase())) ||
        pokemon.PokedexNumber === +filter);
}
function getAbilities(pokemonId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`/getPokemonAbilities?id=${pokemonId}`).then((res) => res.json());
        return response;
    });
}
exports.getAbilities = getAbilities;
