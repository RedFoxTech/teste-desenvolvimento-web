import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('pokemon', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('pokedex_number').notNullable();
        table.string('image').notNullable();
        table.integer('generation').notNullable();
        table.integer('evolution_stage').notNullable();
        table.integer('family_id');
        table.integer('atk').notNullable();
        table.integer('def').notNullable();
        table.integer('sta').notNullable();
        table.integer('max_cp_at_40').notNullable();
        table.integer('max_cp_at_39').notNullable();
        table.integer('type1').notNullable().references('id').inTable('type');
        table.integer('type2').references('id').inTable('type');
        table.integer('weather1').notNullable().references('id').inTable('weather');
        table.integer('weather2').references('id').inTable('weather');
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('pokemon');
}