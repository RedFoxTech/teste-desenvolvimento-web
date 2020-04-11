'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const data = require('../data.json');

class InsertPokedexSchema extends Schema {

  up () {
    this.raw(data.data);
  }

  down () {
  }
}

module.exports = InsertPokedexSchema
