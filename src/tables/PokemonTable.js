import React from 'react';

const PokemonTable = (props) => (
<table>
    <thead>
        <tr>
            <th >Name</th>
            <th>Evolution</th>
            <th>Type</th>
            <th>ATK</th>
            <th>DEF</th>
            <th>STA</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {props.pokemons.length > 0 ? (
            props.pokemons.map((pokemon) => (
            <tr key={pokemon.id}>
                <td>{pokemon.name}</td>
                <td>{pokemon.evolution}</td>
                <td>{pokemon.type}</td>
                <td>{pokemon.atk}</td>
                <td>{pokemon.def}</td>
                <td>{pokemon.sta}</td>
                <td>
                    <div className="botao">
                        <div className="botao1">
                        <button 
                        onClick={() => props.editPokemon(pokemon)}
                        className="button muted-button1"
                        >
                            Edit
                        </button>
                        </div>

                        <div className="botao2">
                        <button
                        onClick={() => props.deletePokemon(pokemon.id)}
                        className="button muted-button2"
                        >
                            Delete
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
            ))
        ) : (
        <tr>
            <td colSpan={3}>No pokemons</td>
        </tr>
        )}
    </tbody>
</table>
);

export default PokemonTable;