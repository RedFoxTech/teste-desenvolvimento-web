import { Container } from 'react-bootstrap'
import React from 'react'

import FullPageTemplate from '../../../components/templates/FullPageTemplate'
import ListFavoritePokemons from './ListFavoritePokemons'
import ListFavoritePokemonsPageHeader from './ListFavoritePokemonsPageHeader'

const ListPokemonsPage = () => (
	<FullPageTemplate>
		<ListFavoritePokemonsPageHeader />
		<Container>
			<ListFavoritePokemons />
		</Container>
	</FullPageTemplate>
)

export default ListPokemonsPage
