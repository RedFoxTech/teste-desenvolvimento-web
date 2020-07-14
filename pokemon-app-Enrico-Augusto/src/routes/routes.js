const pokemonRoutes = require('./pokemonRoutes.js');
const typeRoutes = require('./typeRoutes.js');
const habitatRoutes = require('./habitatRoutes.js');

module.exports = app => {
    pokemonRoutes(app),
    typeRoutes(app),
    habitatRoutes(app)
}