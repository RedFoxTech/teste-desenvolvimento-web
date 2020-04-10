'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokedexSchema extends Schema {
  up () {
    this.create('pokedexes', (table) => {
      table.increments()
      table.string('name')
      table.string('code')
      table.string('atk')
      table.string('def')
      table.string('sta')
      table.integer('weather1')
      table.integer('weather2')
      table.integer('type1')
      table.integer('type2')
      table.timestamps()
    })
  }

  down () {
    this.drop('pokedexes')
  }
}

module.exports = PokedexSchema
