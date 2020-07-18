import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Main from 'Components/main';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ProgressBar, Step } from 'react-step-progress-bar'; 
import PBar from 'react-bootstrap/ProgressBar';
import 'react-step-progress-bar/styles.css';


import CountUp from 'react-countup';

import { pad } from 'assets/scripts';
import pokemons from 'assets/pokemons.json';
import { Type } from './style';

export default class Pokemon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon: [],
			evolutions: [],
		};
		this.getPokemon = this.getPokemon.bind(this);
	}

	componentDidMount() {
		this.getPokemon();
	}

	componentDidUpdate(nextProps) {
		if (nextProps.match.params.name !== this.props.match.params.name) {
			this.getPokemon();
		}
	}

	getPokemon() {
		const pokemon = pokemons.Sheet1.filter(
			p => p.Name === this.props.match.params.name
		)[0];
		for (var i = 0; i < 3; i++) {}
		var evolutions = pokemons.Sheet1.filter(
			p => p.FamilyID === pokemon.FamilyID
		);

		console.log(evolutions); 
		if (evolutions.length > 3 ) { 
			evolutions = evolutions.splice( 0, 0); 
		}
		this.setState({ pokemon: pokemon, evolutions: evolutions });
	}
	render() {
		var porcent = 0; 

		if (this.state.pokemon.length === undefined) {
			var guide = []; 
			switch (this.state.evolutions.length) {
				case 1  : 
					guide = [0]; 
					break; 
				case 2 : 
					guide = [ 0, 100]; 
					break; 
				case 3 : 
					guide = [0, 50, 100]; 
					break; 
				default : 
					guide = [100]; 
					break;

			}
			porcent = guide[this.state.pokemon['Evolution Stage'] - 1 ]; 
		}

		return (
			<Main>
				<Container className='mt-5'>
					<Row>
						<Col
							xs={12}
							sm={12}
							md={5}
							lg={4}
							xl={4}
							className='d-flex justify-content-lg-start justify-content-center'>
							<div className=''>
								<Image
									src={
										'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' +
										pad(
											this.state.pokemon[
												'Pokedex Number'
											],
											3
										) +
										'.png'
									}
									height='300px'
									fluid
									thumbnail
								/>
								<h3> {this.state.pokemon.Name} </h3>
								<div className='mt-5 mb-5 mt-lg-3'>
									<div className='justify-content-center'>
										<h6>Max CP</h6>
										<PBar
											variant='info'
											max={5000}
											now={Number(this.state.pokemon['100cp40'])}
										/>
										<CountUp
											end={
												this.state.pokemon[
													'100cp40'
												] !== undefined
													? Number(
															this.state.pokemon[
																'100cp40'
															]
													  )
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
											now={Number(this.state.pokemon.ATK)}
										/>
										<CountUp
											end={
												this.state.pokemon.ATK !==
												undefined
													? Number(
															this.state.pokemon
																.ATK
													  )
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
											now={Number(this.state.pokemon.DEF)}
										/>
										<CountUp
											end={
												this.state.pokemon.DEF !==
												undefined
													? Number(
															this.state.pokemon
																.DEF
													  )
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
											now={Number(this.state.pokemon.STA)}
										/>
										<CountUp
											end={
												this.state.pokemon.STA !==
												undefined
													? Number(
															this.state.pokemon
																.STA
													  )
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
							</div>
						</Col>

						<Col xs={12} sm={12} md={7} lg={6} xl={8}>
							<p></p>
							<div className='mb-5'>
								<ProgressBar
									percent={porcent}
									filledBackground='linear-gradient(to right, #fefb72, #f0bb31)'>
									{this.state.evolutions.map(evol => (
										<Step
											transition='scale'
											key={evol['Evolution Stage']}>
											{({ accomplished }) => (
												<Image
													src={
														'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' +
														pad(
															evol[
																'Pokedex Number'
															],
															3
														) +
														'.png'
													}
													width='30'
												/>
											)}
										</Step>
									))}
								</ProgressBar>
							</div>
							<Row>
								{this.state.evolutions.map(evol => (
									<Col key={evol.Row}>
										<Link to={'/pokemon/' + evol.Name}>
											<Image
												src={
													'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' +
													pad(evol.Row, 3) +
													'.png'
												}
												alt=''
												fluid
												roundedCircle
											/>
										</Link>

										<Type type={evol.Type_1}>
											<Link to={'/type/' + evol.Type_1}>
												{evol.Type_1}
											</Link>
										</Type>
										{evol.Type_2 ? (
											<Type type={evol.Type_2}>
												<Link
													to={'/type/' + evol.Type_2}>
													{evol.Type_2}
												</Link>
											</Type>
										) : (
											<></>
										)}
									</Col>
								))}
							</Row>
						</Col>
					</Row>
				</Container>
			</Main>
		);
	}
}
