import { connect } from 'react-redux'
import React from 'react'

import Header from '../../../components/sctructure/Header'

const ListFavoritePokemonsPageHeader = ({ favoritesCount }) => {
	const subtitle = `${favoritesCount} favoritos cadastrados`

	return (
		<Header
			title="Meus pokemons favoritos"
			subtitle={subtitle}
			overlay
			bgImage={process.env.PUBLIC_URL + 'favoritos-header-bg.jpg'}
		/>
	)
}

const mapState = state => ({
	favoritesCount: state.favoritePokemons.list.length
})

export default connect(mapState)(ListFavoritePokemonsPageHeader)
