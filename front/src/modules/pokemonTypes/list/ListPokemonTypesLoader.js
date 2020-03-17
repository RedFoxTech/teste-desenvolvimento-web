import { connect } from 'react-redux'
import React from 'react'

import { SET_POKEMON_TYPES_LIST } from './pokemonTypes.reducer'
import { pokemonTypesResource } from '../../../api/pokemonTypes/pokemonTypesApi'
import { sd } from '../../../helpers/redux'

class ListPokemonTypesLoader extends React.Component {
	componentWillMount() {
		const { fetchData, types } = this.props
		if (!types || !types.commercial) {
			fetchData()
		}
	}

	render() {
		const { types, children } = this.props
		if (!types.length) return false
		return children
	}
}

const mapState = state => ({
	types: state.pokemonTypes.list
})

const mapActions = dispatch => ({
	fetchData: () => {
		pokemonTypesResource.getList().then(data => {
			sd(dispatch, SET_POKEMON_TYPES_LIST, data)
		})
	}
})

export default connect(mapState, mapActions)(ListPokemonTypesLoader)
