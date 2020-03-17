import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import React from 'react'

import FlexGrid from '../../../components/sctructure/FlexGrid'
import PokemonCard from '../../pokemons/_common/PokemonCard'
import ShowPokemonFamilyLoader from './ShowPokemonFamilyLoader'

const ShowPokemonFamily = ({ familyID, familyMembers }) => {
	if (!familyID) return false

	return (
		<ShowPokemonFamilyLoader familyID={familyID}>
			<div style={{ padding: 32, maxWidth: 800, margin: 'auto' }}>
				<FlexGrid>
					<h3>Evoluções</h3>
				</FlexGrid>
				<Row>
					{familyMembers.map(pokemon => (
						<Col md={4}>
							<PokemonCard pokemon={pokemon} />
						</Col>
					))}
				</Row>
			</div>
		</ShowPokemonFamilyLoader>
	)
}

const mapState = state => ({
	familyMembers: state.pokemonFamily.single.members || []
})

export default connect(mapState)(ShowPokemonFamily)
