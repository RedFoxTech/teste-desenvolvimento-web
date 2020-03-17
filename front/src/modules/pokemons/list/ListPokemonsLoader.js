import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import React from 'react'

import { MERGE_POKEMONS_LIST, SET_POKEMONS_LIST, SET_POKEMONS_LOADING } from './pokemons.reducer'
import { pokemonsResource } from '../../../api/pokemons/pokemonsApi'
import { prepareFilterParams } from '../../../helpers/filter'
import { sd } from '../../../helpers/redux'

class ListPokemonsLoader extends React.Component {
	componentWillMount() {
		const { fetchData, filter, list, refresh } = this.props
		if (!list.length || refresh) {
			fetchData(filter, 1)
		}
	}

	componentWillReceiveProps(nextProps) {
		const { refresh, filter, page, fetchMoreData, fetchData } = nextProps
		// If the page or refresh is different then before, fetch new data
		if (refresh && refresh !== this.props.refresh) {
			fetchData(nextProps.filter, 1)
		} else if (page > 1 && page !== this.props.page) {
			fetchMoreData(nextProps.filter, nextProps.page)
		}
	}

	render() {
		const { isLoading, children } = this.props
		if (!!isLoading) return <Spinner animation="grow" variant="info" />
		return children
	}
}

const mapState = state => ({
	list: state.pokemons.list,
	filter: state.pokemons.filter,
	page: state.pokemons.page,
	isLoading: state.pokemons.isLoading,
	refresh: state.pokemons.refresh
})

const mapActions = dispatch => ({
	fetchData: (filter, page) => {
		sd(dispatch, SET_POKEMONS_LOADING, true)
		pokemonsResource
			.getList({ queryParams: prepareFilterParams(filter) })
			.then(data => {
				sd(dispatch, SET_POKEMONS_LIST, data)
			})
			.catch(err => {
				sd(dispatch, SET_POKEMONS_LOADING, false)
			})
	},

	fetchMoreData: (filter, page) => {
		pokemonsResource.getList({ queryParams: { page, ...prepareFilterParams(filter) } }).then(data => {
			console.log(data)
			sd(dispatch, MERGE_POKEMONS_LIST, data)
		})
	}
})

export default connect(mapState, mapActions)(ListPokemonsLoader)
