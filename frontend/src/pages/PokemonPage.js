import React from 'react';
import { useParams } from 'react-router-dom';
import { Title } from 'reactbulma';
import { Buttons } from '../components';

const PokemonPage = () => {
  const { id, pokemonName } = useParams();

  return (
    <>
      <Title>{pokemonName}</Title>
      <Buttons id={id} />
    </>
  );
};

export default PokemonPage;
