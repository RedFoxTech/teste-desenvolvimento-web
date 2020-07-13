import React, { Component } from 'react';
import Main from 'Components/main';

// import api from 'services/api';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';

import pokemons from 'assets/pokemons.json';
import { Type, Pokemons, Types } from './style';
import { Link } from 'react-router-dom';
import { pad } from 'assets/scripts';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		console.log(pokemons.Sheet1[0].Type_1);
		console.log(pokemons.Sheet1);
		// api.get('/events').then(res => {
		// 	console.log(res.data);
		// 	console.log(pokemons.Sheet1);
		// 	this.setState({ data: res.data });
		// });
	}

	render() {
		return (
			<Main>
				<Container className='mt-5'>
					<Row>
						{pokemons.Sheet1.slice(0, 20).map(pokemon => (
							<Col
								xs={12}
								sm={6}
								md={4}
								lg={3}
								xl={3}
								key={pokemon.Row}
								className='mb-3'>
								<Flip top>
									<Pokemons type={pokemon.Type_1}>
										<Link to={'/pokemon/' + pokemon.Name}>
											<h3> {pad(pokemon.Row, 3)} </h3>

											<Image
												src={
													'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' +
													pad(pokemon['Pokedex Number'], 3) +
													'.png'
												}
											/>
											<h2> {pokemon.Name} </h2>
										</Link>
										<Container>
											<Types type={pokemon.Type_1}>
												<Type
													type={pokemon.Type_1}
													first='true'>
													{pokemon.Type_1}
												</Type>

												{pokemon.Type_2 ? (
													<Type type={pokemon.Type_2}>
														{pokemon.Type_2}
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
			</Main>
		);
	}
}
