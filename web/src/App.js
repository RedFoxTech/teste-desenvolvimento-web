import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './Header';

import './Global.css';
import './Main.css';

function App() {
   
    const [pokemons, setPokemons] = useState('');

    useEffect(() => {
        async function loadPokemons () {
            const resp = await api.get('/pokemons');            
            setPokemons(resp.data);
        }

        loadPokemons();
    }, []);    
    
    return (
        <div id="app">
            <Header title="Pokemon RedFox"/>  

            <div id="main" className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="input-group mb-3">                            
                            <input type="text" className="form-control" placeholder="Pesquisar pokemon" aria-label="Pesquisar pokemon" aria-describedby="basic-addon1"/>
                        </div>                      

                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Adicionar um Pokemon</button>

                        <div className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form >
                                            <label htmlFor="name">First name</label>
                                            <input type="text" className="form-control" id="name"/>
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Send message</button>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-4 offset-5 text-right">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" className="card-img" alt="..."/>
                            </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btn btn-warning">Editar</button>
                        <button type="button" className="btn btn-danger ml-3">Excluir</button>                     
                    </div>                    
                </div>
            </div>

            <div id="pokemon-card-small" className="container">
                <div className="row">                    
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="card">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>#001</h5>
                                <strong>Bulbasaur</strong>
                                <p>Type: grass</p>
                            </div>
                        </div>
                    </div>                     
                </div>
            </div>

        </div>
    
    );
}

export default App;
