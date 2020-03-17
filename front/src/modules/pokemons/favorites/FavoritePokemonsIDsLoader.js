import { connect } from 'react-redux'
import React from 'react'

import { SET_FAVORITE_POKEMONS_IDS } from './favoritePokemons.reducer'
import { getFavoritesIDsFromLocalStorage } from '../../../helpers/favorites'
import { sd } from '../../../helpers/redux'

class FavoritePokemonsIDsLoader extends React.Component {
	componentWillMount() {
		const { fetchData, ids } = this.props
		if (!ids.length) {
			fetchData()
		}
	}

	render() {
		const { children } = this.props
		return children
	}
}

const mapState = state => ({
	ids: state.favoritePokemons.ids
})

const mapActions = dispatch => ({
	fetchData: () => {
		const ids = getFavoritesIDsFromLocalStorage()
		sd(dispatch, SET_FAVORITE_POKEMONS_IDS, ids)
	}
})

export default connect(mapState, mapActions)(FavoritePokemonsIDsLoader)
