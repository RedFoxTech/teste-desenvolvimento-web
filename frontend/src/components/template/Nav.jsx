import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
            <FontAwesomeIcon icon="home" /> Home
            </Link>
            <Link to="/Pokemon">
            <FontAwesomeIcon icon="pen" /> Create Pokemóns
            </Link>
            <Link to="/PokemonList">
            <FontAwesomeIcon icon="dragon" /> List Pokemóns
            </Link>
        </nav>
    </aside>