import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import './styles.css';

import logo from '../../assets/logo.svg';

interface Pokemon {
    name: string,
    pokedexNumber: number,
    imgName: string,
    generation: number,
    evolutionStage: number,
    evolved: boolean,
    familyId: string,
    type1: string
    type2: string,
    weather1: string,
    weather2: string,
}

const SearchPokemon = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        api.get('pokemons').then(response => {
            setPokemons(response.data);
        });
    }, []);

    return (
        <div id="page-search">
            <header>
                <img src={logo} alt="Pokemon"/>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>
            <main>
                <h1>Sua lista de Pokémons</h1>
                {pokemons.map(pokemon => (
                    <p key={pokemon.pokedexNumber}>{pokemon.name}</p>
                ))}
            </main>

            
        </div>
    )
};

export default SearchPokemon;