import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('controlPokemon', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.decimal('pokedexNumber').notNullable();
        table.string('imgName').notNullable();
        table.decimal('generation').notNullable();
        table.decimal('evolutionStage').notNullable();
        table.boolean('evolved').notNullable();
        table.string('familyId').notNullable();
        table.string('type1').notNullable();
        table.string('type2');
        table.string('weather1').notNullable();
        table.string('weather2');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('controlPokemon');
}