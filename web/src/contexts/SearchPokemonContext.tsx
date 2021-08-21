import React, { createContext } from 'react';

const SearchPokemonContext = createContext({
    searchedPokemon: "",
    setSearchedPokemon: (pokemon: string) => {}
});

export default SearchPokemonContext;