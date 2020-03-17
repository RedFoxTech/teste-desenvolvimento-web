const pokemonsRouter = require('./pokemons.router')
const pokemonTypesRouter = require('./pokemonTypes.router')
const pokemonFamiliesRouter = require('./pokemonFamilies.router')

const setupRoutes = app => {
	app.get('/', (req, res) => {
		res.send('Welcome to the pokemons api, to list all pokemons go to /pokemons')
	})

	app.use('/pokemons', pokemonsRouter)
	app.use('/pokemonTypes', pokemonTypesRouter)
	app.use('/pokemonFamilies', pokemonFamiliesRouter)
}

module.exports = { setupRoutes }
