import React, { useState, useEffect } from 'react';

const EditPokemonForm = (props) => {
    const [pokemon, setPokemon] = useState(props.currentPokemon);

    useEffect(() => {
        setPokemon(props.currentPokemon)
    }, [props])

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setPokemon({ ...pokemon, [name]: value })
    }

    return (
    <form
        onSubmit={(event) => {
            event.preventDefault()

            props.updatePokemon(pokemon.id, pokemon)
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

        <button>Update pokemon</button>
        <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
        >
            Cancel
        </button>
        </form>
    )
}

export default EditPokemonForm;