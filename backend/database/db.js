const Sequelize = require('sequelize')
require('dotenv').config()


const connection = new Sequelize('pokemons', 'root', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = connection