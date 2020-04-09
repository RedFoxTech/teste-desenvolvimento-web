'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pokedex extends Model {

    type() {
        return this.hasOne('App/Models/Type')
    }

    type2() {
        return this.hasOne('App/Models/Type2')
    }

    weather1() {
        return this.hasOne('App/Models/Weather1')
    }

    weather2() {
        return this.hasOne('App/Models/Weather2')
    }

    family() {
        return this.hasOne('App/Models/Family')
    }
}

module.exports = Pokedex
