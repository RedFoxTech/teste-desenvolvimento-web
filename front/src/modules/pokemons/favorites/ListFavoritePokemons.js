import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import React from 'react'

import PokemonCard from '../_common/PokemonCard'

const ListPokemons = ({ favorites }) => (
	<Row>
		{favorites.map(pokemon => (
			<Col md={3} key={pokemon.id}>
				<PokemonCard pokemon={pokemon} />
			</Col>
		))}
	</Row>
)

const mapState = state => ({
	favorites: state.favoritePokemons.list
})

export default connect(mapState)(ListPokemons)
