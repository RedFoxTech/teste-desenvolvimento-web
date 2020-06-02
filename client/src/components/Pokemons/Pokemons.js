import React, { Fragment } from 'react';
import {Tab, Grid, Container, Item, Pagination, Modal, Divider, Search, Label} from "semantic-ui-react";
import axios from 'axios';
import PokemonItem from './PokemonItem';
import PokemonModal from './PokemonModal';
const baseSpriteAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
export default class PokemonsPane extends React.Component {
    state = {
        loading: false,
		pokemons: [],
		activePage: 1,
		pages: 0,
		currentPokemonDetails: {},
		detailsModalVisible: false,
		selectedPokemons: [],
		searchLoading: false,
		searchKey: '',
		searchResult: [],
		searchSource: []
	}

	componentDidMount() {
		this.fetchAll();
	}

	fetchAll = () => {
		return Promise.all([
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
			url: `http://localhost:8000/pokemons?page=${page - 1}&searchkey=${this.state.searchKey.toLocaleLowerCase()}`,
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

	toggleModalDetails = (pokemon) => {
		console.log('toggle modal', pokemon);
		this.setState({currentPokemonDetails: pokemon, detailsModalVisible: !this.state.detailsModalVisible});
	}

	handleResultSelect = (e, { result }) => {
		console.log(result);
		this.setState({
			searchKey: result.name
		})
	}

	handleSearchChange = (e, {value}) => {
		console.log(value);
		this.setState({searchLoading: true, searchKey: value});

		setTimeout(() => {
			if (this.state.searchKey.length < 1) this.setState({
				searchLoading: false, searchResult: []
			});

			this.fetchPokemons();

			const result = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
			const normalizedResult = result.map(pokemon => ({
				title: pokemon.name,
				description: pokemon.type1,
				image: `${baseSpriteAPI}/${pokemon.imgNumber}.png`,
				price: pokemon.statTotal
			}));
			this.setState({
				searchLoading: false,
				searchResult: normalizedResult
			});
		}, 300)
	}

    render () {
		const {
			activePage, pages, currentPokemonDetails, detailsModalVisible,
			searchLoading, searchKey, searchResult
		} = this.state;
		return (
			<Fragment>
				<Tab.Pane loading={this.loading}>
					<Container textAlign='left'>
						<Grid padded>
							<Grid.Row>
								<Label>search</Label>
								<Search
									size='mini'
									loading={searchLoading}
									onResultSelect={this.handleResultSelect}
									onSearchChange={this.handleSearchChange}
									results={searchResult}
									value={searchKey}
									{...this.props}
								>
								</Search>
							</Grid.Row>
						</Grid>
						
					</Container>

					<Divider></Divider>
					<Grid padded>
						{
							this.state.pokemons.map(pokemon => (
								<Grid.Row key={Math.random() * 999}>
									<Grid.Column>
										<Item.Group>
											<PokemonItem
												details={pokemon}
												openModalDetails={this.toggleModalDetails}>
											</PokemonItem>
										</Item.Group>
									</Grid.Column>
								</Grid.Row>
							))
						}
					</Grid>
				</Tab.Pane>
				
				<Modal open={detailsModalVisible}>
					<PokemonModal
						details={currentPokemonDetails}
						close={this.toggleModalDetails}
						fetch={this.fetchAll}>
					</PokemonModal>
				</Modal>


				<Container textAlign='center'>
				<Pagination activePage={activePage} totalPages={pages} 
					onPageChange={this.handlePageChange}/>
				</Container>
			</Fragment>
		);
    }
}