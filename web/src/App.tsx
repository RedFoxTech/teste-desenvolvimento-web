import React, { useState } from 'react';

import Home from './pages/Home/index';

import SearchPokemonContext from './contexts/SearchPokemonContext';

function App() {
  const [searchedPokemon, setSearchedPokemon] = useState("");

  return (
    <div className="app-box">
      <SearchPokemonContext.Provider
        value={{
          searchedPokemon,
          setSearchedPokemon
        }}
      >
        <Home />
      </SearchPokemonContext.Provider>
      
    </div>
  );
}

export default App;
