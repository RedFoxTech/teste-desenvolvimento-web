'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Weather2Schema extends Schema {
  up () {
    this.create('weather_2_s', (table) => {
      table.increments()
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('weather_2_s')
  }
}

module.exports = Weather2Schema
