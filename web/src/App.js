import React from 'react';

import PokeCard from './components/PokeCard/index';
import PokeAdd from './components/PokeAdd/index';

import Header from './Header';

import './Global.css';
import './Main.css';

function App() {    

    return (
        <div id="app">
            <Header title="Pokemon RedFox"/>  

            <div id="main" className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="input-group mb-3">                            
                            <input type="text" className="form-control" placeholder="Pesquisar pokemon" aria-label="Pesquisar pokemon" aria-describedby="basic-addon1"/>
                        </div>  
                    </div>

                    <div className="col-9 text-right">
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <h5 className="card-title">Bulbasaur</h5>
                                    <p>Row:</p>20
                                    <p>Row:</p>20
                                    <p>Row:</p>20
                                   
                                </div>
                            </div>
                        </div>  
                            <PokeAdd />
                            <button type="button" className="btn btn-warning">Editar</button>
                            <button type="button" className="btn btn-danger ml-3">Excluir</button>                     
                    </div>                    
                </div>
            </div>

            <div id="pokemon-card-small" className="container">
                <div className="row"> 

                    <PokeCard/>                    

                </div>
            </div>

        </div>
    
    );
}

export default App;
