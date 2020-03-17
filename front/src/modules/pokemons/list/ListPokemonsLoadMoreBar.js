import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import React from 'react'

import { ADD_POKEMONS_PAGE } from './pokemons.reducer'
import { sd } from '../../../helpers/redux'
import FlexGrid from '../../../components/sctructure/FlexGrid'

const ListPokemonsSortBar = ({ canLoadMore, loadMore, isLoadingMore }) => {
	if (!canLoadMore) return false
	return (
		<FlexGrid padding={32}>
			<Button onClick={!isLoadingMore && loadMore} variant="outline-secondary">
				{!isLoadingMore ? 'Ver Mais' : 'Carregando...'}
			</Button>
		</FlexGrid>
	)
}

const mapState = state => ({
	isLoadingMore: state.pokemons.isLoadingMore,
	canLoadMore: state.pokemons.canLoadMore
})

const mapActions = d => ({
	loadMore() {
		sd(d, ADD_POKEMONS_PAGE)
	}
})

export default connect(mapState, mapActions)(ListPokemonsSortBar)
