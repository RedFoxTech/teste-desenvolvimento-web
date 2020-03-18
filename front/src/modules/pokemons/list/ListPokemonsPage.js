import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'

import FullPageTemplate from '../../../components/templates/FullPageTemplate'
import ListPokemons from './ListPokemons'
import ListPokemonsLoadMoreBar from './ListPokemonsLoadMoreBar'
import ListPokemonsLoader from './ListPokemonsLoader'
import ListPokemonsPageHeader from './ListPokemonsPageHeader'
import ListPokemonsSortBar from './ListPokemonsSortBar'
import Panel from '../../../components/sctructure/Panel'
import SearchPokemonsForm from './SearchPokemonsForm'

const ListPokemonsPage = () => (
	<FullPageTemplate>
		<ListPokemonsPageHeader />
		<Container>
			<Row>
				<Col lg={4}>
					<Panel overflowToTop>
						<SearchPokemonsForm />
					</Panel>
				</Col>

				<Col lg={8}>
					<ListPokemonsLoader>
						<ListPokemonsSortBar />
						<ListPokemons />
						<ListPokemonsLoadMoreBar />
					</ListPokemonsLoader>
				</Col>
			</Row>
		</Container>
	</FullPageTemplate>
)

export default ListPokemonsPage
