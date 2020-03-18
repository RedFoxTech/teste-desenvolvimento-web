import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import pokemon from '../modules/pokemons/show/pokemon.reducer.js'
import pokemonTypes from '../modules/pokemonTypes/list/pokemonTypes.reducer.js'
import pokemonFamily from '../modules/pokemonFamily/show/pokemonFamily.reducer.js'
import pokemons from '../modules/pokemons/list/pokemons.reducer.js'
import favoritePokemons from '../modules/pokemons/favorites/favoritePokemons.reducer.js'

export default history =>
	combineReducers({
		pokemons,
		favoritePokemons,
		pokemon,
		pokemonFamily,
		pokemonTypes,
		router: connectRouter(history)
	})
