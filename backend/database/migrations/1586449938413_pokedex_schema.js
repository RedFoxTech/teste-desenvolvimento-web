'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokedexSchema extends Schema {
  up () {
    this.create('pokedexes', (table) => {
      table.increments()
      table.string('name')
      table.string('family_id')
      table.string('atk')
      table.string('def')
      table.string('sta')
      table.integer('evolution_id')
      table.integer('weather1_id')
      table.integer('weather2_id')
      table.integer('type_id')
      table.integer('type2_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('pokedexes')
  }
}

module.exports = PokedexSchema
