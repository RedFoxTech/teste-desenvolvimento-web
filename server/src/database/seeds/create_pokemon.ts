import Knex from 'knex'

export async function seed(knex:Knex){
    await knex('pokemon').insert([
    {
        namePokemon: 'Bulbasaur',
        generation: 1,
        evolutionStage: 1,
        evolved: false,
        familyId: 1,
        cross: false,
        type1: 'grass',
        type2: 'poison',
        weather1: 'Sunny/Clear',
        weather2: 'Cloudy',
        statTotal: 326,
        atk: 118,
        def: 118,
        sta: 90,
        legendary: false,
        aquireable: 1,
        spawns: true,
        regional: false,
        raidable: 0,
        hatchable: 5,
        Shiny: 0,
        nest: true,
        new: false,
        notGettable: false,
        futureEvolved: false,
        cp40: 981, 
        cp39: 967, 
    }
    ])
}