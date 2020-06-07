import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('weather').insert([
        {name: 'Sunny / Clear', image: 'Sunny.png'},
        {name: 'Rain', image: 'Rain.png'},
        {name: 'Wind', image: 'Wind.png'},
        {name: 'Snow', image: 'Snow.png'},
        {name: 'Fog', image: 'Fog.png'},
        {name: 'Cloudy', image: 'Cloudy.png'},
        {name: 'Partly cloudy', image: 'Partly_Cloudy.png'}
    ])
}