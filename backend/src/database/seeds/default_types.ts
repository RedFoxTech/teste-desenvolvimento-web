import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('type').insert([
        {name: 'Normal', image:'Normal.png'},
        {name: 'Fighting', image:'Fighting.png'},
        {name: 'Flying', image:'Flying.png'},
        {name: 'Poison', image:'Poison.png'},
        {name: 'Ground', image:'Ground.png'},
        {name: 'Rock', image:'Rock.png'},
        {name: 'Bug', image:'Bug.png'},
        {name: 'Ghost', image:'Ghost.png'},
        {name: 'Steel', image:'Steel.png'},
        {name: 'Fire', image:'Fire.png'},
        {name: 'Water', image:'Water.png'},
        {name: 'Grass', image:'Grass.png'},
        {name: 'Electric', image:'Electric.png'},
        {name: 'Psychic', image:'Psychic.png'},
        {name: 'Ice', image:'Ice.png'},
        {name: 'Dragon', image:'Dragon.png'},
        {name: 'Fairy', image:'Fairy.png'},
        {name: 'Dark', image:'Dark.png'}
    ]);
}