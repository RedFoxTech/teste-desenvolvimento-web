import React from 'react';
import { FiLogIn, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Pokemon"/>
                </header>

                <main>
                    <h1>O seu gerenciador de Pokémon</h1>
                    <p>Adicione, edite, delete e selecione os seus Pokémons.</p>

                    <Link to="/create-pokemon">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastre um Pokémon</strong>
                    </Link>
                    <Link to="/search-pokemon">
                        <span>
                            <FiSearch />
                        </span>
                        <strong>Consultar os Pokémons</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
};

export default Home;