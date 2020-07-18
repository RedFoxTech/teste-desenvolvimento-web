import React, { Component } from 'react';
import Main from 'Components/main';
import Pagination from 'Components/Pagination';

// import api from 'services/api';
import {
	Col,
	Row,
	Container,
	Image,
	InputGroup,
	FormControl,
	Accordion,
	Button,
	Card,
} from 'react-bootstrap';
import Flip from 'react-reveal/Flip';

import { Type, Pokemons, Types, Search, Filter, BtnFilter } from './style';
import { Link } from 'react-router-dom';
import { pad } from 'assets/scripts';

import api from 'services/api';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			rows: 0,
			searchWord: '',
			type: '',
		};
		this.search = this.search.bind(this);
		this.typeFilter = this.typeFilter.bind(this);
		this.clear = this.clear.bind(this);
		this.clearWord = this.clearWord.bind(this);
		this.clearType = this.clearType.bind(this);
	}

	componentDidMount() {
		api.get('/').then(response => {
			this.setState({ data: response.data.rows, rows : response.data.count });
		});
	}

	search(input) {
		const { id, value } = input.target;
		var search = {};

		if (this.state.type !== '') {
			search.type = this.state.type;
		}

		if (id === 'search') {
			this.setState({ searchWord: value });
			if (Number.isInteger(Number(value))) {
				search.pokedex_number = value;
			} else {
				search.name = value;
			}
		} else if (id === 'order') {
			if (value !== '') {
				search.filter = value.split('-')[0];
				search.order = value.split('-')[1];
			}
			search.name = this.state.searchWord;
		}
		api.get('/', {
			params: search,
		}).then(response => {
			this.setState({
				data: response.data.rows,
				rows: response.data.count,
			});
		});
		window.history.pushState({}, '/', '/');
	}

	typeFilter(btn) {
		const { target } = btn;
		const { types } = target.attributes;

		var params = {};
		params.type = types.value;
		if (this.state.searchWord) {
			if (Number.isInteger(Number(this.state.searchWord))) {
				params.pokedex_number = this.state.searchWord;
			} else {
				params.name = this.state.searchWord;
			}
		}

		api.get('/', {
			params,
		}).then(response => {
			this.setState({ type: types.value });
			this.setState({
				data: response.data.rows,
				rows: response.data.count,
			});
		});
	}

	clear(event) {
		this.setState({ type: '', searchWord: '' });
		api.get('/').then(response => {
			this.setState({
				data: response.data.rows,
				rows: response.data.count,
			});
		});
	}
	clearWord() {
		this.setState({ searchWord: '' });
		api.get('/', {
			params: { type: this.state.type },
		}).then(response => {
			this.setState({
				data: response.data.rows,
				rows: response.data.count,
			});
		});
	}
	clearType() {
		this.setState({ type: '' });

		var params = {};

		if (this.state.searchWord) {
			if (Number.isInteger(Number(this.state.searchWord))) {
				params.pokedex_number = this.state.searchWord;
			} else {
				params.name = this.state.searchWord;
			}
		}
		api.get('/', { params }).then(response => {
			let result = response.data.rows;
			this.setState({ data: result });
		});
	}

	render() {
		return (
			<Main>
				<Search>
					<Container>
						<Row>
							<Col
								xs={12}
								className='d-flex justify-content-center'>
								<Col xs={12} lg={6}>
									<InputGroup>
										<FormControl
											onChange={event =>
												this.search(event)
											}
											type='text'
											id='search'
											placeholder='Pokemon ou ID'
											value={this.state.searchWord}
										/>
									</InputGroup>
									<Row>
										{this.state.searchWord ? (
											<Col xs={3} className='mt-2'>
												<Button
													onClick={event =>
														this.clearWord()
													}>
													{this.state.searchWord}
												</Button>
											</Col>
										) : (
											<> </>
										)}
										{this.state.type ? (
											<Col xs={3} className='mt-2'>
												<BtnFilter
													types={`${this.state.type}`}
													onClick={event =>
														this.clearType(event)
													}>
													{this.state.type}
												</BtnFilter>
											</Col>
										) : (
											<> </>
										)}
										<Button
											variant='link'
											onClick={event =>
												this.clear(event)
											}>
											{' '}
											Limpar{' '}
										</Button>
									</Row>
								</Col>
							</Col>
						</Row>
					</Container>
				</Search>
				<Filter>
					<Container>
						<Col xs={12}>
							<Accordion className='d-flex justify-content-center text-center'>
								<Card>
									<Card.Header>
										<Accordion.Toggle
											as={Button}
											variant='dark'
											eventKey='0'>
											Busca Avançada
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey='0'>
										<Card.Body>
											<Row className='justify-content-center types_filter'>
												<Col xs={12} sm={4} md={3}>
													<Col>
														<BtnFilter
															types='grass'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															Grass
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='fire'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															Fire
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='water'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															Water
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='bug'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															Bug
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='normal'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															Normal
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='poison'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															Poison
														</BtnFilter>
													</Col>
												</Col>
												<Col xs={12} sm={4} md={3}>
													<Col>
														<BtnFilter
															types='electric'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															Electric
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='ground'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															ground
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='fairy'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															fairy
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='fighting'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															fighting
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='psychic'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															psychic
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='rock'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															rock
														</BtnFilter>
													</Col>
												</Col>
												<Col xs={12} sm={4} md={3}>
													<Col>
														<BtnFilter
															types='ghost'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															ghost
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='ice'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															ice
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='dragon'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															dragon
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='dark'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															dark
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='steel'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															steel
														</BtnFilter>
													</Col>
													<Col>
														<BtnFilter
															types='flying'
															onClick={event =>
																this.typeFilter(
																	event
																)
															}>
															flying
														</BtnFilter>
													</Col>
												</Col>
											</Row>
											<Row></Row>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</Col>
					</Container>
				</Filter>
				<Container className='mt-2'>
					<Row className='justify-content-end'>
						<Col xs={2}>
							<FormControl
								as='select'
								id='order'
								onChange={event => this.search(event)}>
								<option value=''> Ordenar por </option>
								<option value='pokedex_number-ASC'>
									Menor Numero
								</option>
								<option value='pokedex_number-DESC'>
									Maior Numero
								</option>
								<option value='name-ASC'> A-Z </option>
								<option value='name-DESC'> Z-A </option>
							</FormControl>
						</Col>
					</Row>
				</Container>
				<Container className='mt-5'>
					<Row>
						{this.state.data.map(pokemon => (
							<Col
								xs={12}
								sm={6}
								md={4}
								lg={3}
								xl={3}
								key={pokemon.id}
								className='mb-3'>
								<Flip top>
									<Pokemons type={pokemon.type1.name}>
										<Link to={'/pokemon/' + pokemon.name}>
											<h3>
												{pad(pokemon.pokedex_number, 3)}
											</h3>

											<Image
												src={
													'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' +
													pad(
														pokemon.pokedex_number,
														3
													) +
													'.png'
												}
											/>
											<h2> {pokemon.name} </h2>
										</Link>
										<Container>
											<Types type={pokemon.type1.name}>
												<Type
													type={pokemon.type1.name}
													first='true'>
													<Link
														to={
															'/type/' +
															pokemon.type1.name
														}>
														{pokemon.type1.name}
													</Link>
												</Type>

												{pokemon.type2 !== null ? (
													<Type
														type={
															pokemon.type2.name
														}>
														<Link
															to={
																'/type/' +
																pokemon.type2
																	.name
															}>
															{pokemon.type2.name}
														</Link>
													</Type>
												) : (
													<> </>
												)}
											</Types>
										</Container>
									</Pokemons>
								</Flip>
							</Col>
						))}
					</Row>
				</Container>
				{this.state.rows > 20 ? (
					<Pagination rows={this.state.rows} current={0} />
				) : (
					<> </>
				)}
			</Main>
		);
	}
}
