import React, { Component } from 'react';
import './style.css';

const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class PokeCard extends Component {
	state = {
		loading: true,
		pokemons: [],
		allPokemons: []
	};

	componentDidMount() {
		fetch('http://localhost:3333/pokemons')
			.then(res => res.json())
			.then(res => {
				this.setState({
					pokemons: res
				});
			});
	}

	render() {
		return (
			<div id="pokemon-card" className="container">
				<div className="row">
					{this.state.pokemons.map(pokemon => (
						<div className="col-12 col-md-4 col-lg-3 col-xl-2 mb-4" key={pokemon._id}>
							<div className="card">
								<div className="img-card">
									<img src={img + pokemon.row + '.png'} alt={pokemon.name}></img>
								</div>
								<span className="number">#{pokemon.row}</span>
								<h4 className="name">{pokemon.name}</h4>
								<p>{pokemon.type_1}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default PokeCard;