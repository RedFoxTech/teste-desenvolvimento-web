import { Col, Image, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import React from 'react'

import { formatTo3Digits } from '../../../helpers/numbers'
import { sumPokemonStats } from '../../../helpers/pokemon'
import LabelValue from '../../../components/presentation/LabelValue'
import PokemonFavoriteToggler from '../_common/PokemonFavoriteToggler'
import PokemonTypeTag from '../../pokemonTypes/show/PokemonTypeTag'
import ShowPokemonFamily from '../../pokemonFamily/show/ShowPokemonFamily'
import ShowPokemonLoader from './ShowPokemonLoader'
import Text from '../../../components/presentation/Text'

const PokemonDetails = ({ pokemon, id }) => {
	if (!pokemon.id)
		return (
			<ShowPokemonLoader id={id}>
				<div />
			</ShowPokemonLoader>
		)

	return (
		<div>
			<Row>
				<Col md={6}>
					<Image
						src="holder.js/100px250"
						fluid
						src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatTo3Digits(pokemon.number)}.png`}
					/>
				</Col>
				<Col md={6} style={{ marginTop: 68 }}>
					<small>{pokemon.number}.</small>

					<h1>{pokemon.name}</h1>

					<div>
						<PokemonTypeTag type={pokemon.type1} />
						<PokemonTypeTag type={pokemon.type2} />
						<PokemonFavoriteToggler pokemon={pokemon} />
					</div>
					<ShowPokemonLoader id={id}>
						<Row>
							<Col xs={6}>
								<LabelValue label="Total" value={sumPokemonStats(pokemon)} />
							</Col>
							<Col xs={6}>
								<LabelValue label="Ataque" value={pokemon.atk} />
							</Col>
							<Col xs={6}>
								<LabelValue label="Defesa" value={pokemon.def} />
							</Col>
							<Col xs={6}>
								<LabelValue label="Stamina" value={pokemon.sta} />
							</Col>
							{!!pokemon.weather1 && (
								<Col xs={6}>
									<LabelValue label="Clima Primario" value={pokemon.weather1.name} />
								</Col>
							)}
							{!!pokemon.weather2 && (
								<Col xs={6}>
									<LabelValue label="Clima Secundario" value={pokemon.weather2.name} />
								</Col>
							)}
						</Row>
					</ShowPokemonLoader>
				</Col>
			</Row>

			<ShowPokemonFamily familyID={pokemon.familyID} />
		</div>
	)
}

const mapState = state => ({
	pokemon: state.pokemon.single
})

export default connect(mapState)(PokemonDetails)
