import React, { Component } from 'react';
import Main from 'Components/main';

import PokemonsJson from 'assets/pokemons.json';
import { Col, Image, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Type, Pokemons, Typesa } from './style';
import { pad } from 'assets/scripts';
import Flip from 'react-reveal/Flip';

export default class Types extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemons: [],
        };
        this.getPokemons = this.getPokemons.bind(this); 
    }
    
    componentDidUpdate(nextProps){
		if (nextProps.match.params.type !== this.props.match.params.type) {
			this.getPokemons();
		}
    }

	componentDidMount() {
		this.getPokemons();
    }
    
    getPokemons(){ 
        const pokemons = PokemonsJson.Sheet1.filter(p => {
			if (p.Type_1 === this.props.match.params.type) {
				return p;
			} else if (p.Type_2 === this.props.match.params.type) {
				return p;
			}
		});
		this.setState({ pokemons: pokemons });
    }

	render() {
		return (
			<Main>
				<Container className='mt-5'>
					<Row>
						{this.state.pokemons.map(pokemon => (
							<Col
								xs={12}
								sm={6}
								md={4}
								lg={3}
								xl={3}
								key={pokemon['Pokedex Number']}
								className='mb-3'>
								<Flip top>
									<Pokemons type={pokemon.Type_1}>
										<Link to={'/pokemon/' + pokemon.Name}>
											<h3>
												{pad(
													pokemon['Pokedex Number'],
													3
												)}
											</h3>

											<Image
												src={
													'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' +
													pad(
														pokemon[
															'Pokedex Number'
														],
														3
													) +
													'.png'
												}
											/>
											<h2> {pokemon.Name} </h2>
										</Link>
										<Container>
											<Typesa type={pokemon.Type_1}>
												<Type
													type={pokemon.Type_1}
													first='true'>
													<Link
														to={
															'/type/' +
															pokemon.Type_1
														}>
														{pokemon.Type_1}
													</Link>
												</Type>

												{pokemon.Type_2 ? (
													<Type type={pokemon.Type_2}>
														<Link
															to={
																'/type/' +
																pokemon.Type_2
															}>
															{pokemon.Type_2}
														</Link>
													</Type>
												) : (
													<> </>
												)}
											</Typesa>
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
