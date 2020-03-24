import React, { useState } from 'react';
import { getAllPokes } from './components/API';
import PokeBar from './components/PokeBar';
import PokeList from './components/PokeList';

function App() {
  const [pokemons, setPokemons] = useState([]);
  let all = [];

  function getAll() {
    console.log("foi");
    getAllPokes().then(pokes => {
      all = [pokes]
      setPokemons(all)
    }).catch(e => alert(e))
  }

  return (
    <>
      <PokeBar getAll={getAll} />
      <PokeList data={pokemons} />
    </>
  );
}

export default App;
