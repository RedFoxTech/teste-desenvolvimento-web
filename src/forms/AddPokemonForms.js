import React, { useState } from 'react';

const AddPokemonForms = (props) => {

    const initialFormState = { id: null, name: '', evolution: 0, type: '', atk: 0, def: 0, sta: 0 }
    const [pokemon, setPokemon] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setPokemon({ ...pokemon, [name]: value })
    }

    return (
    <form
    onSubmit={(event) => {
        event.preventDefault();

        if (!pokemon.name ||!pokemon.evolution || !pokemon.type || !pokemon.atk || !pokemon.def || !pokemon.sta) return

        props.addPokemon(pokemon)
        setPokemon(initialFormState)
    }}
    >
        <div className="formulario">
        <div className="form1">

        <label>Name</label>
        <input
        type="text" 
        name="name" 
        value={pokemon.name} 
        onChange={handleInputChange}
        />

        <label>Evolution</label>
        <input 
        type="number" 
        name="evolution" 
        value={pokemon.evolution} 
        onChange={handleInputChange}
        />

        <label>Type</label>
        <input
        type="text" 
        name="type" 
        value={pokemon.type} 
        onChange={handleInputChange}
        />
        </div>

        <div className="form2">
        <label>ATK</label>
        <input
        type="number" 
        name="atk" 
        value={pokemon.atk} 
        onChange={handleInputChange}
        />

        <label>DEF</label>
        <input
        type="number" 
        name="def" 
        value={pokemon.def} 
        onChange={handleInputChange}
        />

        <label>STA</label>
        <input
        type="number" 
        name="sta" 
        value={pokemon.sta} 
        onChange={handleInputChange}
        />
        </div>
        </div>

        <button>Add new pokemon</button>
    </form>
    );
}

export default AddPokemonForms;