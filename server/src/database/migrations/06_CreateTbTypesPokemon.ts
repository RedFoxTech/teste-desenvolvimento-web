import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('tbTypesPokemon', table => {
    table.increments('idTypesPokemon').primary();

    table.integer('idPokemon')
      .notNullable()
      .references('idPokemon')
      .inTable('tbPokemon')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.integer('idType')
      .notNullable()
      .references('idType')
      .inTable('tbType')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tbTypesPokemon');
}