import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { connect } from 'react-redux'
import React from 'react'

import { TOGGLE_FAVORITE_POKEMON } from '../favorites/favoritePokemons.reducer'
import { hasObjectWithID } from '../../../helpers/collection'
import { sd } from '../../../helpers/redux'

const PokemonFavoriteToggler = ({ pokemon, favorites, toggle }) => {
	let Icon = IoIosHeartEmpty

	if (pokemon && hasObjectWithID(favorites, pokemon.id)) {
		Icon = IoIosHeart
	}

	return (
		<a onClick={() => toggle(pokemon)}>
			<Icon color="#e3350d" size="1.5em" />
		</a>
	)
}

const mapState = state => ({ favorites: state.favoritePokemons.list })

const mapAction = d => ({
	toggle(pokemon) {
		sd(d, TOGGLE_FAVORITE_POKEMON, pokemon)
	}
})

export default connect(mapState, mapAction)(PokemonFavoriteToggler)
