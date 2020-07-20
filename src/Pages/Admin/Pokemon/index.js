import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
	Col,
	Container,
	Card,
	Row,
	Image,
	FormGroup,
	FormLabel,
	FormControl,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

import EmptyImage from 'assets/images/empty_pokemon.png';
import { pad } from 'assets/scripts';
import Sidebar from 'Components/SideBar';
import Pagination from 'Components/Pagination';

import api from 'services/api';
import history from 'services/history';

class IndexPokemons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemons: [],
			types: [],
			count: 0,
			page: this.getParams('page'),
			search: {},
		};
	}
	componentDidMount() {
		this.getPokemons();
	}
	getPokemons() {
		console.log('chamou');
		var params = {};

		const page = this.state.page ? this.state.page : this.getParams('page');
		if (page) {
			params.page = page;
		}

		api.get('/ad/pokemons', { params }).then(response => {
			this.setState({
				pokemons: response.data.rows,
				count: response.data.count,
			});
		});

		api.get('/types').then(response =>
			this.setState({ types: response.data })
		);
	}

	onPaginate(page) {
		this.setState({ page });
		// console.log(history.location.pathname);
		history.push({
			pathname: history.location.pathname,
			search: `?page=${page}`,
		});
		this.getPokemons();
	}

	getParams(param) {
		var query = new URLSearchParams(this.props.location.search);
		return query.get(param);
	}

	search(input) {
		const { value, name } = input.target;
		console.log(name, value);
		let search = {};
		search = this.state.search;
		if (name === 'search_id_name') {
			if (Number(value)) {
				search.pokedex_number = Number(value);
			} else {
				search.name = value;
			}
		}

		if (name === 'type1') {
			search.type = value;
		}

		if (name === 'order') {
			search.filter = value.split('-')[0];
			search.order = value.split('-')[1];
		}
		this.setState({ search }); 
		api.get('/ad/pokemons', {
			params: search,
		}).then(response => {
			this.setState({
				pokemons: response.data.rows,
				count: response.data.count,
			});
		});
	}

	render() {
		return (
			<Sidebar>
				<Col className='mt-5'>
					<Container>
						<Card>
							<Card.Header className='pb-5 pt-5 d-flex justify-content-between '>
								<Col xs={4}>Pokemons</Col>
								<Col xs={2}>
									<Link to='/admin/pokemons/create'>
										<FontAwesomeIcon icon={faPlus} />
										<span> NOVO </span>
									</Link>
								</Col>
							</Card.Header>
							<Card.Body>
								<Row className="mb-4">
									<Col xs={12} sm={3} >
										<FormGroup>
											<FormLabel> Pesquisar </FormLabel>
											<FormControl
												name='search_id_name'
												placeholder='Numero da pokedex ou nome'
												onChange={event =>
													this.search(event)
												}
											/>
										</FormGroup>
									</Col>
									<Col xs={12} sm={3}>
										<FormGroup>
											<FormLabel> Tipo </FormLabel>
											<FormControl
												as='select'
												name='type1'
												placeholder='Numero da pokedex ou nome'
												onChange={event =>
													this.search(event)
												}
												className='text-capitalize'>
												<option value=""> Tipo 1 </option>
												{this.state.types.map(type => (
													<option
														key={type.id}
														value={type.name}>
														{' '}
														{type.name}{' '}
													</option>
												))}
												<option> </option>
											</FormControl>
										</FormGroup>
									</Col>
									<Col xs={12} sm={3}>
										<FormLabel> Ordenar </FormLabel>
										<FormControl
											as='select'
											id='order'
											name='order'
											onChange={event =>
												this.search(event)
											}>
											<option value=''>
												Ordenar por
											</option>
											<option value='pokedex_number-ASC'>
												Menor Numero
											</option>
											<option value='pokedex_number-DESC'>
												Maior Numero
											</option>
											<option value='name-ASC'>
												A-Z
											</option>
											<option value='name-DESC'>
												Z-A
											</option>
											<option value='cp1-DESC'>
												Maior CP
											</option>
											<option value='cp1-ASC'>
												Menor CP
											</option>
											<option value='stat_total-DESC'>
												Maior estatistica
											</option>
											<option value='stat_total-ASC'>
												Menor statistica 
											</option>
										</FormControl>
									</Col>
								</Row>
								<Row className='mb-3 border-bottom pb-2 text-center text-capitalize'>
									<Col xs={2}>Pokedex Number</Col>
									<Col xs={2} className='d-none d-sm-block'>
										Image
									</Col>
									<Col xs={4} sm={2}>
										name
									</Col>
									<Col xs={2}>type 1</Col>
									<Col xs={2}>type 2</Col>
									<Col xs={1}>cp</Col>
									<Col xs={1}></Col>
								</Row>
								{this.state.pokemons.map(pokemon => (
									<Row
										className='border-bottom pb-4 text-center align-items-center text-capitalize'
										key={pokemon.id}>
										<Col xs={2}>
											{pokemon.pokedex_number}
										</Col>
										<Col
											xs={2}
											className='d-none d-sm-block'>
											<Image
												src={
													pokemon.pokedex_number
														? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' +
														  pad(
																pokemon.pokedex_number,
																3
														  ) +
														  '.png'
														: EmptyImage
												}
												fluid
											/>
										</Col>
										<Col xs={4} sm={2}>
											{' '}
											{pokemon.name}
										</Col>
										<Col xs={2}> {pokemon.type1.name} </Col>
										<Col xs={2}>
											{' '}
											{pokemon.type2
												? pokemon.type2.name
												: ''}{' '}
										</Col>
										<Col xs={1}>{pokemon.cp1}</Col>
										<Col xs={1}>
											<Link
												to={`pokemons/edit/${pokemon.id}`}>
												<FontAwesomeIcon
													icon={faEdit}
												/>
											</Link>
										</Col>
									</Row>
								))}

								{this.state.count > 20 ? (
									<Pagination
										callBackParent={page =>
											this.onPaginate(page)
										}
										count={this.state.count}
										current={
											this.state.page
												? this.state.page
												: 1
										}
									/>
								) : (
									<> </>
								)}
							</Card.Body>
						</Card>
					</Container>
				</Col>
			</Sidebar>
		);
	}
}

export default connect()(IndexPokemons);
