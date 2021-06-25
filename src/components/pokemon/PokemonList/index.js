/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import PokemonCard from '../PokemonCard';

export default function PokemonList() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <Container>
      {allPokemons.map((pokemon, index) => (
        <PokemonCard
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          type={pokemon.types[0].type.name}
          HP={pokemon.stats[0].base_stat}
          ATK={pokemon.stats[1].base_stat}
          DEF={pokemon.stats[2].base_stat}
          key={index}
        />
      ))}
      <Container.Button onClick={() => getAllPokemons()}>Load More</Container.Button>
    </Container>
  );
}
