/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Header,
  Title,
  Id,
  Wrapper,
  Generation,
  Lendary,
  Habitat,
  Type1,
  Type2,
  HP,
  ATK,
  DEF,
  TOTAL,
  BackButton,
  PokemonImage,
} from './styles';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const { name } = useParams();

  async function getPokemonSpecies() {
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      .then((r) => r.json())
      .then((json) => {
        setPokemonSpecies(json);
      });
  }
  async function getPokemon() {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((r) => r.json())
      .then((json) => {
        setPokemon(json);
      });
  }

  useEffect(() => {
    getPokemonSpecies();
    getPokemon();
  }, [name]);

  if (!pokemon) {
    return null;
  }

  const Type2Exists = () => {
    if (!pokemon.types[1].type.name) {
      return 'no-exists';
    } else {
      return pokemon.types[1].type.name;
    }
  };

  return (
    <>
      <Container>
        <Header>
          <Id>
            <p>{pokemon.id}</p>
          </Id>
          <Title>{pokemon.name}</Title>
        </Header>
        <Wrapper>
          <Generation>
            <h2>Generation</h2>
            <p>{pokemonSpecies.generation.name}</p>
          </Generation>
          <Lendary>
            <h2>Lendary</h2>
            <p>{pokemonSpecies.is_legendary ? 'Yes' : 'No'}</p>
          </Lendary>
        </Wrapper>

        <Wrapper>
          <Habitat>
            <h2>Habitat</h2>
            <p>{pokemonSpecies.habitat.name}</p>
          </Habitat>
          <Type1 type1={pokemon.types[0].type.name}>
            <h2>Type 1</h2>
            <p>{pokemon.types[0].type.name}</p>
          </Type1>
          <Type2 type2={Type2Exists()}>
            <h2>Type 2</h2>
            <p>{Type2Exists()}</p>
          </Type2>
        </Wrapper>
        <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
        <Wrapper>
          <HP>
            <h2>HP</h2>
            <p>{pokemon.stats[0].base_stat}</p>
          </HP>
          <ATK>
            <h2>ATK</h2>
            <p>{pokemon.stats[1].base_stat}</p>
          </ATK>
          <DEF>
            <h2>DEF</h2>
            <p>{pokemon.stats[2].base_stat}</p>
          </DEF>
          <TOTAL>
            <h2>TOTAL</h2>
            <p>{pokemon.stats[0].base_stat + pokemon.stats[1].base_stat + pokemon.stats[2].base_stat}</p>
          </TOTAL>
        </Wrapper>
      </Container>
      <BackButton to="/">Back to the List</BackButton>
    </>
  );
}
