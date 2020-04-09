'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FamilySchema extends Schema {
  up () {
    this.create('families', (table) => {
      table.increments()
      table.integer('family_code')
      table.timestamps()
    })
  }

  down () {
    this.drop('families')
  }
}

module.exports = FamilySchema
