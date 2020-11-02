import React, { useState, useEffect } from 'react';
import { Container } from 'reactbulma';
import { Cards } from '../components';
import api from '../services/api';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const pokemonsList = await api.getAllPokemons();
    setPokemons(pokemonsList);
  }, []);

  return (
    <Container className="columns is-multiline is-centered">
      {pokemons.map((pokemon) => (
        <Cards key={pokemon.id} pokemon={pokemon} />
      ))}
    </Container>
  );
};

export default HomePage;
