import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import React from 'react'

import { SET_FAVORITE_POKEMONS_LIST, SET_FAVORITE_POKEMONS_LOADING } from './favoritePokemons.reducer'
import { pokemonsResource } from '../../../api/pokemons/pokemonsApi'
import { sd } from '../../../helpers/redux'

class FavoritePokemonsIDsLoader extends React.Component {
	componentWillMount() {
		const { fetchData, ids, list } = this.props

		if (ids.length != list.length || list.some(item => !ids.includes(item.id))) {
			fetchData(ids)
		}
	}

	render() {
		const { children, isLoading } = this.props
		if (!!isLoading) return <Spinner animation="grow" variant="info" />
		return children
	}
}

const mapState = state => ({
	ids: state.favoritePokemons.ids,
	list: state.favoritePokemons.list
})

const mapActions = dispatch => ({
	fetchData: ids => {
		sd(dispatch, SET_FAVORITE_POKEMONS_LOADING, true)
		pokemonsResource
			.getList({ queryParams: { withIDs: ids.join(',') } })
			.then(data => {
				sd(dispatch, SET_FAVORITE_POKEMONS_LIST, data)
			})
			.catch(err => {
				sd(dispatch, SET_FAVORITE_POKEMONS_LOADING, false)
			})
	}
})

export default connect(mapState, mapActions)(FavoritePokemonsIDsLoader)
