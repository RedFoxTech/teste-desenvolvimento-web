import React, { Component } from 'react';

import SideBar from 'Components/SideBar';

import api from 'services/api';
import {
	Col,
	Card,
	Form,
	FormGroup,
	FormLabel,
	FormControl,
	Row,
	Container,
	Image,
	Button,
} from 'react-bootstrap';

import { toast } from 'react-toastify';

import { pad } from 'assets/scripts';
import PBar from 'react-bootstrap/ProgressBar';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import EmptyImage from 'assets/images/empty_pokemon.png';
import history from 'services/history';
toast.configure();
export default class Forms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			pokedex_number: '',
			generation: '',
			evolution: '',
			family_id: '',
			type_1: '',
			type_2: '',
			weather_1: '',
			weather_2: '',
			stat_total: '',
			atk: '',
			def: '',
			sta: '',
			legendary: '',
			cp1: '',
			types: [],
			weather: [],
		};
	}

	componentDidMount() {
		const { id } = this.props.match.params;

		api.get('/ad/type/weather').then(response => {
			const { data } = response;
			this.setState({ types: data.types, weather: data.weathers });
		});
		if (id) {
			api.get(`/ad/pokemons/${id}`).then(response => {
				const { data } = response;

				for (const [key, value] of Object.entries(data)) {
					this.setState({ [key]: value });
				}
			});
		}
	}

	onChangeHandler(event) {
		const { value, name } = event.target;
		this.setState({ [name]: value });
		this.calcStatTotal();
	}

	calcStatTotal() {
		var { atk, def, sta } = this.state;
		atk = Number(atk);
		def = Number(def);
		sta = Number(sta);
		this.setState({ stat_total: atk + def + sta });
	}

	onSubmitHandler(event) {
		event.preventDefault();
		if (this.props.match.params.id) {
			//update

			api.put('/pokemons', this.state).then(response => {
				if (response.status === 200) {
					toast.success('Sucesso ao atualizar.');
					toast.info('A página vai recarregar em 5s');
					setTimeout(() => {
						window.location.reload();
					}, 5000);
					console.log(response);
				} else {
					//to-do craiar tratativas de erros
					toast.error('Erro ao atualizar');

					console.log('Como??');
				}
			});
		} else {
			//create
			api.post('/pokemons', this.state).then(response => {
				if (response.status === 200) {
					console.log(response);
					var id;
					api.get('/ad/pokemons', {
						params: { name: this.state.name },
					}).then(res => (id = res.data.rows[0].id));
					toast.success('Sucesso ao cadastrar');
					toast.info('A página vai recarregar em 5s');

					setTimeout(() => {
						window.location.href = `/admin/pokemons/edit/${id}`;
					}, 5000);
				} else {
					toast.error('Falha ao cadastrar, verifique os campos');
				}
			});
		}
		console.log(event);
	}

	render() {
		return (
			<SideBar>
				<Col className='mt-5'>
					<Container>
						<Card>
							<Card.Header className='pt-5 pb-5'>
								<Row>
									<Button
										variant='link'
										onClick={() => history.back()}>
										<FontAwesomeIcon icon={faArrowLeft} />{' '}
										Voltar
									</Button>

									<Col>
										<h4>
											{this.props.match.params.id
												? 'Edição de pokemon'
												: 'Criação de pokemon'}
										</h4>
									</Col>
								</Row>
							</Card.Header>
							<Card.Body>
								<Form
									onSubmit={event =>
										this.onSubmitHandler(event)
									}>
									<Container>
										<Row>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>Name</FormLabel>
													<FormControl
														name='name'
														placeholder='Nome do pokemon'
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														value={this.state.name}
														required
													/>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														Pokedex Number
													</FormLabel>
													<FormControl
														name='pokedex_number'
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														value={
															this.state
																.pokedex_number
														}
														placeholder='Pokedex Number'
														required
													/>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														Generation
													</FormLabel>
													<FormControl
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														value={
															this.state
																.generation
														}
														name='generation'
														placeholder='0'
													/>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														Evolution
													</FormLabel>
													<FormControl
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														value={
															this.state.evolution
														}
														name='evolution'
														placeholder='0'
													/>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														FamilyID
													</FormLabel>
													<FormControl
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														value={
															this.state.family_id
														}
														name='family_id'
														placeholder='0'
													/>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														Type 1
													</FormLabel>
													<FormControl
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														className='text-capitalizetypes'
														name='type_1'
														as='select'
														value={
															this.state.type_1
														}
														required>
														<option>
															{' '}
															select a type{' '}
														</option>
														{this.state.types ? (
															this.state.types.map(
																type => (
																	<option
																		key={
																			type.id
																		}
																		value={
																			type.id
																		}>
																		{
																			type.name
																		}
																	</option>
																)
															)
														) : (
															<> </>
														)}
													</FormControl>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														Type 2
													</FormLabel>
													<FormControl
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														name='type_2'
														className='text-capitalizetypes'
														as='select'
														value={
															this.state.type_2
														}
														required>
														<option>
															select a type
														</option>
														{this.state.types ? (
															this.state.types.map(
																type => (
																	<option
																		key={
																			type.id
																		}
																		value={
																			type.id
																		}>
																		{
																			type.name
																		}
																	</option>
																)
															)
														) : (
															<> </>
														)}
													</FormControl>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														Weather 1
													</FormLabel>
													<FormControl
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														name='weather_1'
														value={
															this.state.weather_1
														}
														as='select'
														placeholder='Sunny/clear'>
														<option>
															{' '}
															Select a weather{' '}
														</option>
														{this.state.weather.map(
															weather => (
																<option
																	value={
																		weather.id
																	}>
																	{' '}
																	{
																		weather.name
																	}{' '}
																</option>
															)
														)}
													</FormControl>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														Weather 2
													</FormLabel>
													<FormControl
														as='select'
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														value={
															this.state.weather_2
														}
														name='weather_2'
														placeholder='Cloudy'
														required>
														{this.state.weather.map(
															weather => (
																<option
																	value={
																		weather.id
																	}>
																	{' '}
																	{
																		weather.name
																	}{' '}
																</option>
															)
														)}
													</FormControl>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														STAT Total
													</FormLabel>
													<FormControl
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														min='1'
														max='1000'
														placeholder='0'
														name='stat_total'
														value={
															this.state
																.stat_total
														}
														readOnly
														required
													/>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														Attack
													</FormLabel>
													<FormControl
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														name='atk'
														value={this.state.atk}
														min='1'
														max='1000'
														required
														placeholder='1-1000'
													/>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														Defense
													</FormLabel>
													<FormControl
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														min='1'
														max='1000'
														required
														name='def'
														value={this.state.def}
														placeholder='1-1000'
													/>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														Stamina
													</FormLabel>
													<FormControl
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														min='1'
														max='1000'
														required
														name='sta'
														value={this.state.sta}
														placeholder='1-1000'
													/>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>
														Legendary
													</FormLabel>
													<FormControl
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														name='legendary'
														value={
															this.state.legendary
														}
														placeholder='Legendary'
													/>
												</FormGroup>
											</Col>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel> CP</FormLabel>
													<FormControl
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														min='1'
														max='5000'
														name='cp1'
														value={this.state.cp1}
														placeholder='1-5000'
													/>
												</FormGroup>
											</Col>
										</Row>
									</Container>
									<Image
										src={
											this.state.pokedex_number
												? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' +
												  pad(
														this.state
															.pokedex_number,
														3
												  ) +
												  '.png'
												: EmptyImage
										}
										width='200px'
										thumbnail
									/>

									<div className='mt-5 mb-5 mt-lg-3'>
										<div className='justify-content-center'>
											<h6>Max CP</h6>
											<PBar
												variant='info'
												max={5000}
												now={Number(this.state.cp1)}
											/>
											<CountUp
												end={
													this.state.cp1 !== undefined
														? Number(this.state.cp1)
														: 0
												}
												delay={0}
												duration={1}
												preserveValue={true}>
												{({ countUpRef }) => (
													<span ref={countUpRef} />
												)}
											</CountUp>
										</div>
										<div>
											<h6>Attack </h6>
											<PBar
												variant='danger'
												max={1000}
												now={Number(this.state.atk)}
											/>
											<CountUp
												end={
													this.state.atk !== undefined
														? Number(this.state.atk)
														: 0
												}
												delay={0}
												duration={1}
												preserveValue={true}>
												{({ countUpRef }) => (
													<span ref={countUpRef} />
												)}
											</CountUp>
										</div>
										<div>
											<h6>Defense</h6>
											<PBar
												max={1000}
												now={Number(this.state.def)}
											/>
											<CountUp
												end={
													this.state.def !== undefined
														? Number(this.state.def)
														: 0
												}
												delay={0}
												duration={1}
												preserveValue={true}>
												{({ countUpRef }) => (
													<span ref={countUpRef} />
												)}
											</CountUp>
										</div>
										<div>
											<h6>Stamina</h6>
											<PBar
												variant='success'
												max={1000}
												now={Number(this.state.sta)}
											/>
											<CountUp
												end={
													this.state.sta !== undefined
														? Number(this.state.sta)
														: 0
												}
												delay={0}
												duration={1}
												preserveValue={true}>
												{({ countUpRef }) => (
													<span ref={countUpRef} />
												)}
											</CountUp>
										</div>
									</div>
									<Button type='submit'>
										{' '}
										{this.props.match.params.id
											? 'Atualizar'
											: 'Cadastrar'}{' '}
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Container>
				</Col>
			</SideBar>
		);
	}
}
