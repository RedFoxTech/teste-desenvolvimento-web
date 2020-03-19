import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function PokeHeader(props) {    
    return (
        <header id="pokemon-header">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand" href="/">RedFox Pokemon</Link>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link" href="/">Lista de pokemons <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/adicionar" className="nav-link" href="/adicionar">Adicionar pokemon</Link>
                            </li>                            
                        </ul>
                        
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default PokeHeader; 