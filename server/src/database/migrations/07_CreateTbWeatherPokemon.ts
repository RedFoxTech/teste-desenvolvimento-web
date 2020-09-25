import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('tbWeatherPokemon', table => {
    table.increments('idWeatherPokemon').primary();

    table.integer('idPokemon')
      .notNullable()
      .references('idPokemon')
      .inTable('tbPokemon')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.integer('idWeather')
      .notNullable()
      .references('idWeather')
      .inTable('tbWeather')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tbWeatherPokemon');
}