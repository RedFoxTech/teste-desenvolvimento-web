import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './style.css';

const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function PokeCard() {

	const [pokemons, setPokemons] = useState([]);	

	useEffect(() => {
		async function loadPokemons() {
			const res = await api.get('/pokemons');
	
			setPokemons(res.data);
		}
		loadPokemons();
	}, []);

	return(	
		<div id="pokemon-card" className="container">	
			<div className="row">
				{pokemons.map(pokemon => (
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
	)
}

export default PokeCard;