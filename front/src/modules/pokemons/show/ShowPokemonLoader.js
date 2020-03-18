import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import React from 'react'

import { SET_POKEMON_LOADING, SET_POKEMON_SINGLE } from './pokemon.reducer'
import { pokemonsResource } from '../../../api/pokemons/pokemonsApi'
import { sd } from '../../../helpers/redux'

class ShowPokemonLoader extends React.Component {
	componentWillMount() {
		const { id, fetchData } = this.props
		fetchData(id)
	}

	componentWillReceiveProps(nextProps) {
		const { id, fetchData } = nextProps
		if (id !== this.props.id) {
			fetchData(id)
		}
	}

	render() {
		const { isLoading, children } = this.props
		if (!!isLoading) return <Spinner animation="grow" variant="info" />
		return children
	}
}

const mapState = state => ({
	isLoading: state.pokemon.isLoading
})

const mapActions = dispatch => ({
	fetchData: id => {
		sd(dispatch, SET_POKEMON_LOADING, true)
		pokemonsResource
			.get(id)
			.then(data => {
				sd(dispatch, SET_POKEMON_SINGLE, data)
			})
			.catch(err => {
				sd(dispatch, SET_POKEMON_LOADING, false)
			})
	}
})

export default connect(mapState, mapActions)(ShowPokemonLoader)
