import React, { useState, useContext } from 'react';

import SearchPokemonContext from '../../contexts/SearchPokemonContext';

const SearchInput: React.FC = () => {
    const [searchedValue, setSearchedValue] = useState("");

    const {
        setSearchedPokemon
    } = useContext(SearchPokemonContext);

    const handleSearchedPokemon = (pokemon: string) => {
        setSearchedValue(pokemon);

        setSearchedPokemon(pokemon);
    }

    return (
        <input
            className="search-input"
            placeholder="Search for an Pokémon or Type"
            value={searchedValue}
            onChange={e => handleSearchedPokemon(e.target.value)}
        >

        </input>
    );
};

export default SearchInput;