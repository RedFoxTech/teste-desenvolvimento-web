import React, { Fragment } from 'react';
import {Tab, Grid, Container, Item, Pagination} from "semantic-ui-react";
import axios from 'axios';
import PokemonItem from './PokemonItem';

export default class PokemonsPane extends React.Component {
    state = {
        loading: false,
		pokemons: [],
		activePage: 1,
		pages: 0
	}

	componentDidMount() {
		Promise.all([
			this.fetchLengthList(),
			this.fetchPokemons()
		]);
	}

	fetchLengthList = async () => {
		return axios({
			url: 'http://localhost:8000/pokemons/length',
			method: 'GET'
		})
		.then(response => {
			console.log(response.data);
			if (response.data.success) {
				this.setState({
					pages: response.data.info.pages
				});
			}
		})
		.then(err => console.log(err));
	}

    fetchPokemons = async (page) => {
		return axios({
			url: `http://localhost:8000/pokemons?page=${page - 1}`,
			method: 'GET',
		})
		.then(response => {
			console.log(response.data.info);
			this.setState({pokemons: response.data.info});
		})
		.catch(err => console.log(err));
    }

	handlePageChange = (e, { activePage }) => {
		this.setState({ activePage });
		this.fetchPokemons(activePage);
	}


    render () {
		const {activePage, pages} = this.state;
		return (
			<Fragment>
				<Tab.Pane loading={this.loading}>
					<h2>Pokemons</h2>
					<Grid padded>
						{
							this.state.pokemons.map(pokemon => (
								<Grid.Row key={Math.random() * 999}>
									<Grid.Column>
										<Item.Group>
											<PokemonItem
												details={pokemon}>
											</PokemonItem>
										</Item.Group>
									</Grid.Column>
								</Grid.Row>
							))
						}
					</Grid>
				</Tab.Pane>

				<Container textAlign='center'>
				<Pagination activePage={activePage} totalPages={pages} 
					onPageChange={this.handlePageChange}/>
				</Container>
			</Fragment>
		);
    }
}