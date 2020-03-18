import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import React from 'react'

import { SET_POKEMON_FAMILY_LOADING, SET_POKEMON_FAMILY_SINGLE } from './pokemonFamily.reducer'
import { pokemonFamiliesResource } from '../../../api/pokemonFamilies/pokemonFamiliesApi'
import { sd } from '../../../helpers/redux'

class ListPokemonsLoader extends React.Component {
	componentWillMount() {
		const { fetchData, familyID, family } = this.props
		if (!family || family.id !== familyID) {
			fetchData(familyID)
		}
	}

	componentWillReceiveProps(nextProps) {
		const { familyID, fetchData } = nextProps
		if (familyID !== this.props.familyID) {
			fetchData(familyID)
		}
	}

	render() {
		const { isLoading, children } = this.props
		if (!!isLoading) return <Spinner animation="grow" variant="info" />
		return children
	}
}

const mapState = state => ({
	family: state.pokemonFamily.single,
	isLoading: state.pokemonFamily.isLoading
})

const mapActions = dispatch => ({
	fetchData: familyID => {
		sd(dispatch, SET_POKEMON_FAMILY_LOADING, true)
		pokemonFamiliesResource
			.get(familyID)
			.then(data => {
				sd(dispatch, SET_POKEMON_FAMILY_SINGLE, data)
			})
			.catch(err => {
				sd(dispatch, SET_POKEMON_FAMILY_LOADING, false)
			})
	}
})

export default connect(mapState, mapActions)(ListPokemonsLoader)
