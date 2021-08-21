import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';

import Header from '../../components/Header';
import PokemonsList from '../../components/PokemonsList';

import SearchPokemonContext from '../../contexts/SearchPokemonContext';

import pokeBall from '../../assets/pokemon.png';

import PokemonData from '../../dtos/PokemonData';

const Home: React.FC = () => {
    const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const {
        searchedPokemon
    } = useContext(SearchPokemonContext);

    async function fetchPokemons(name?: string, type?: string) {
        const res = await axios.get('https://ljbb-pokedex.herokuapp.com/pokemons/find', {
            params: {
                name,
                type
            }
        });

        if(res.status === 200) {
            const pokemonsData: PokemonData[] = res.data.pokemons;
            
            setPokemonsData(pokemonsData);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);

        if(searchedPokemon.length <= 1) {
            setPokemonsData([]);
            setIsLoading(false);
        }

          setTimeout(() => {
            if(searchedPokemon.length >= 2) {

                fetchPokemons(searchedPokemon, searchedPokemon);
            }
        }, 500);

    }, [searchedPokemon]);

    return (
        <div className="home-container">
            <Header />

            {isLoading ? (
                <img src={pokeBall} alt="Logo" className="h-10 w-10 m-auto mt-16 animate-spin" />
            ) : (
                <PokemonsList 
                    pokemons={pokemonsData}
                />
            )}
            
        </div>
    )
};

export default Home;