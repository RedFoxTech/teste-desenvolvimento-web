import React from 'react';

class PokeCard extends React.Component {
	state = {
		pokemons: []
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
			<>						
				{this.state.pokemons.map(pokemon => (
					<div className="col-12 col-md-4 col-lg-2" key={pokemon._id}>
					
						<p><b>Nome:</b> {pokemon.name}</p>
						<p><b>Row:</b> {pokemon.row}</p>
						<p><b>CP_40:</b> {pokemon.CP_40}</p>
						<p><b>weather_2:</b> {pokemon.weather_2}</p>
					</div>
				))}
			</>
		);
	}
}

export default PokeCard;