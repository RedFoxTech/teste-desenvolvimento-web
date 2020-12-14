import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">Pokedex</Link>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/criarPokemon" className="nav-link active">Criar Pokemon</Link>
                    </li>                
                </ul>
                </div>
            </div>
        </nav>
    )
    
}

export default Header;