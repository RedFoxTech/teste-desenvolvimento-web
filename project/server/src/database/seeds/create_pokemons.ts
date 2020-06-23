import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('controlPokemon').insert([
        {
            name: 'Bulbasaur',
            pokedexNumber: 1,
            imgName: '1',
            generation: 1,
            evolutionStage: 1,
            evolved: 0,
            familyId: '1',
            type1: 'grass',
            type2: 'poison',
            weather1: 'Sunny/clear',
            weather2: 'Cloudy'
        },
        {
            name: 'Ivysaur',
            pokedexNumber: 2,
            imgName: '2',
            generation: 1,
            evolutionStage: 2,
            evolved: 0,
            familyId: '1',
            type1: 'grass',
            type2: 'poison',
            weather1: 'Sunny/clear',
            weather2: 'Cloudy'
        },
        {
            name: 'Venusaur',
            pokedexNumber: 3,
            imgName: '3',
            generation: 1,
            evolutionStage: 3,
            evolved: 1,
            familyId: '1',
            type1: 'grass',
            type2: 'poison',
            weather1: 'Sunny/clear',
            weather2: 'Cloudy'
        },
        {
            name: 'Charmander',
            pokedexNumber: 4,
            imgName: '4',
            generation: 1,
            evolutionStage: 1,
            evolved: 0,
            familyId: '2',
            type1: 'fire',
            type2: '',
            weather1: 'Sunny/clear',
            weather2: ''
        },
        {
            name: 'Charmeleon',
            pokedexNumber: 5,
            imgName: '5',
            generation: 1,
            evolutionStage: 2,
            evolved: 0,
            familyId: '2',
            type1: 'fire',
            type2: '',
            weather1: 'Sunny/clear',
            weather2: ''
        },
        {
            name: 'Charizard',
            pokedexNumber: 6,
            imgName: '6',
            generation: 1,
            evolutionStage: 3,
            evolved: 1,
            familyId: '2',
            type1: 'fire',
            type2: 'flying',
            weather1: 'Sunny/clear',
            weather2: 'Windy'
        },
        {
            name: 'Squirtle',
            pokedexNumber: 7,
            imgName: '7',
            generation: 1,
            evolutionStage: 1,
            evolved: 0,
            familyId: '3',
            type1: 'water',
            type2: '',
            weather1: 'Rainy',
            weather2: ''
        },
        {
            name: 'Wartortle',
            pokedexNumber: 8,
            imgName: '8',
            generation: 1,
            evolutionStage: 2,
            evolved: 0,
            familyId: '3',
            type1: 'water',
            type2: '',
            weather1: 'Rainy',
            weather2: ''
        },
        {
            name: 'Blastoise',
            pokedexNumber: 9,
            imgName: '9',
            generation: 1,
            evolutionStage: 3,
            evolved: 1,
            familyId: '3',
            type1: 'water',
            type2: '',
            weather1: 'Rainy',
            weather2: ''
        },
    ]);
}