import Knex from 'knex'

export async function up(knex:Knex){
    return knex.schema.createTable('pokemon', table =>{
        table.increments('pokedexNumber').primary()
        table.string('namePokemon', 50).notNullable()
        table.integer('generation').notNullable()
        table.integer('evolutionStage').notNullable()
        table.boolean('evolved').notNullable()
        table.integer('familyId').notNullable()
        table.boolean('cross').notNullable()
        table.string('type1', 50).notNullable()
        table.string('type2', 50).notNullable()
        table.string('weather1', 50).notNullable()
        table.string('weather2', 50).notNullable()
        table.integer('statTotal').notNullable()
        table.integer('atk').notNullable()
        table.integer('def').notNullable()
        table.integer('sta').notNullable()
        table.boolean('legendary').notNullable()
        table.integer('aquireable').notNullable()
        table.boolean('spawns').notNullable()
        table.boolean('regional').notNullable()
        table.integer('raidable').notNullable()
        table.integer('hatchable').notNullable()
        table.integer('shiny').notNullable()
        table.boolean('nest').notNullable()
        table.boolean('new').notNullable()
        table.boolean('notGettable').notNullable()
        table.boolean('futureEvolved').notNullable()
        table.integer('cp40').notNullable()
        table.integer('cp39').notNullable()
    })
}
export async function down(knex:Knex){
    return knex.schema.dropTable('pokemon')
}