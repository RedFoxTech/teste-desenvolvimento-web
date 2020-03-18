import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import React from 'react'

import { formatTo3Digits } from '../../../helpers/numbers'
import FlexGrid from '../../../components/sctructure/FlexGrid'
import PokemonFavoriteToggler from './PokemonFavoriteToggler'
import PokemonTypeTag from '../../pokemonTypes/show/PokemonTypeTag'

const PokemonCard = ({ pokemon, goTo }) => (
	<Card style={{ marginTop: '22px', marginBottom: '22px' }}>
		<Card.Img
			onClick={() => goTo(pokemon)}
			variant="top"
			src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatTo3Digits(pokemon.number)}.png`}
		/>
		<Card.Body>
			<Card.Title>
				{pokemon.number}. {pokemon.name}
			</Card.Title>
			<Card.Text>
				<PokemonTypeTag type={pokemon.type1} />
				<PokemonTypeTag type={pokemon.type2} />
			</Card.Text>
			<FlexGrid justifyContent="space-between">
				<Button variant="outline-secondary" onClick={() => goTo(pokemon)}>
					Ver Detalhes
				</Button>
				<PokemonFavoriteToggler pokemon={pokemon} />
			</FlexGrid>
		</Card.Body>
	</Card>
)

const mapActions = d => ({
	goTo(pokemon) {
		d(push('/pokemons/' + pokemon.id))
	}
})

export default connect(null, mapActions)(PokemonCard)
