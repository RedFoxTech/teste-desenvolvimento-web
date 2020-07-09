import React, { Component } from 'react';
import Main from 'Components/main';

import api from 'services/api';
import { Col, Row, Container, Image } from 'react-bootstrap';
import pokemons from 'assets/pokemons.json';
import { Type, Pokemons, Types } from './style';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
		this.pad = this.pad.bind(this);
	}

	pad(number, length) {
		//add numbers in front of the numbers.
		var str = '' + number;
		while (str.length < length) {
			str = '0' + str;
		}
		return str;
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
				<Container>
					<h1> Home </h1>
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
								<Pokemons type={pokemon.Type_1}>
									<Image
										src={
											'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' +
											this.pad(pokemon.Row, 3) +
											'.png'
										}
									/>
									<h3> {pokemon.Name} </h3>

									<Container>
										<Types>
											<Type type={pokemon.Type_1} first>
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
							</Col>
						))}
					</Row>
				</Container>
			</Main>
		);
	}
}
