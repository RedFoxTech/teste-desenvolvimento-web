import React from 'react';

import PokeHeader from './components/PokeHeader/index';
import PokeCardBig from './components/PokeCardBig/index';
import PokeCard from './components/PokeCard/index';

import './Global.css';

function App() {    
    return (
        <div id="app">            
            <PokeHeader title="RedFox Pokemon"/>

            <PokeCardBig />

            <PokeCard/> 
        </div>    
    );
}

export default App;
