import React, { Fragment, useState } from 'react';
import PokemonTable from './tables/PokemonTable';
import AddPokemonForms from './forms/AddPokemonForms.js';
import EditPokemonForm from './forms/EditPokemonForm';

const App = () => {

  const pokemonsData = [
    { id: 1, name: 'Bulbasaur', evolution: 1, type: 'Grass', atk: 118, def: 118, sta: 90 },
    { id: 2, name: 'Ivysaur', evolution: 2, type: 'Grass', atk: 151, def: 151, sta: 120 },
    { id: 3, name: 'Venusaur', evolution: 3, type: 'Grass', atk: 198, def: 198, sta: 160 },
  ]

  const [pokemons, setPokemons] = useState(pokemonsData);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: '', evolution: '', type: '', atk: 0, def: 0, sta: 0 }
  const [currentPokemon, setCurrentPokemon] = useState(initialFormState)

  const addPokemon = (pokemon) => {
    pokemon.id = pokemons.length + 1
    setPokemons([...pokemons, pokemon])
  }

  const deletePokemon = (id) => {
    setPokemons(pokemons.filter((pokemon) => pokemon.id !== id))
  }

  const updatePokemon = (id, updatedPokemon) => {
    setEditing(false)
  
    setPokemons(pokemons.map((pokemon) => (pokemon.id === id ? updatedPokemon : pokemon)))
  }

  const editPokemon = (pokemon) => {
    setEditing(true)
  
    setCurrentPokemon({ id: pokemon.id, name: pokemon.name, evolution: pokemon.evolution, type: pokemon.type, atk: pokemon.atk, def: pokemon.def, sta: pokemon.sta })
  }

  return (
    <div className="container">
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit pokemon</h2>
							<EditPokemonForm
								editing={editing}
								setEditing={setEditing}
								currentPokemon={currentPokemon}
								updatePokemon={updatePokemon}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add pokemon</h2>
							<AddPokemonForms addPokemon={addPokemon} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View pokemons</h2>
					<PokemonTable pokemons={pokemons} editPokemon={editPokemon} deletePokemon={deletePokemon} />
				</div>
			</div>
		</div>
  );
}

export default App;
