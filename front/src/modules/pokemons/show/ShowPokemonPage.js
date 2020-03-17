import { Container } from 'react-bootstrap'
import React from 'react'

import FullPageTemplate from '../../../components/templates/FullPageTemplate'
import PokemonDetails from './PokemonDetails'

const ShowPokemonPage = ({ match: { params } }) => (
	<FullPageTemplate>
		<Container>
			<PokemonDetails id={params.id} />
		</Container>
	</FullPageTemplate>
)

export default ShowPokemonPage
