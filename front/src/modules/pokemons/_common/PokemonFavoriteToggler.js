import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { connect } from 'react-redux'
import React from 'react'

import { ADD_FAVORITE_POKEMONS, REMOVE_FAVORITE_POKEMONS } from '../favorites/favoritePokemons.reducer'
import { sd } from '../../../helpers/redux'

const PokemonFavoriteToggler = ({ pokemon, favoritesIDs, addFavorite, removeFavorite }) => {
	let Icon = IoIosHeartEmpty
	let action = addFavorite

	if (pokemon && favoritesIDs.includes(pokemon.id)) {
		action = removeFavorite
		Icon = IoIosHeart
	}

	return (
		<a onClick={() => action(pokemon)}>
			<Icon color="#e3350d" size="1.5em" />
		</a>
	)
}

const mapState = state => ({ favoritesIDs: state.favoritePokemons.ids })

const mapAction = d => ({
	addFavorite(pokemon) {
		sd(d, ADD_FAVORITE_POKEMONS, pokemon)
	},

	removeFavorite(pokemon) {
		sd(d, REMOVE_FAVORITE_POKEMONS, pokemon)
	}
})

export default connect(mapState, mapAction)(PokemonFavoriteToggler)
