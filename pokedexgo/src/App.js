import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import fundo from './assets/fundo.png';
import NavBar from './components/layout/NavBar';
import PainelPokemon from './components/layout/PainelPokemon';

function App() {
  return (
    <div className="App" style={{ background: `url(${fundo})` }}>
      <NavBar />
      <div className="container">
        <PainelPokemon />
      </div>
    </div>
  );
}

export default App;
