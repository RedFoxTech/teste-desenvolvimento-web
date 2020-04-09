'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Type2Schema extends Schema {
  up () {
    this.create('type_2_s', (table) => {
      table.increments()
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('type_2_s')
  }
}

module.exports = Type2Schema
