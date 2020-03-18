import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import React from 'react'

import PokemonCard from '../_common/PokemonCard'

const ListPokemons = ({ pokemons }) => (
	<Row>
		{pokemons.map(pokemon => (
			<Col md={4} key={pokemon.id}>
				<PokemonCard pokemon={pokemon} />
			</Col>
		))}
	</Row>
)

const mapState = state => ({
	pokemons: state.pokemons.list
})

export default connect(mapState)(ListPokemons)
