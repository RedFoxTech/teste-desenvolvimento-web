import { connect } from 'react-redux'
import React from 'react'

import Header from '../../../components/sctructure/Header'

const ListPokemonsPageHeader = ({ pokemonsCount }) => {
	const subtitle = `${pokemonsCount} pokemons encontrados`

	return <Header title="Pokedex" subtitle={subtitle} overlay />
}

const mapState = state => ({
	pokemonsCount: state.pokemons.total
})

export default connect(mapState)(ListPokemonsPageHeader)
