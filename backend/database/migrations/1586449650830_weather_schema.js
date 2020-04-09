'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WeatherSchema extends Schema {
  up () {
    this.create('weathers', (table) => {
      table.increments()
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('weathers')
  }
}

module.exports = WeatherSchema
