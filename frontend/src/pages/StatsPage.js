import React from 'react';
import { useParams } from 'react-router-dom';
import { Title } from 'reactbulma';
import { Buttons } from '../components';

const StatsPage = () => {
  const { id, pokemonName } = useParams();

  return (
    <>
      <Title>Stats</Title>
      <Buttons id={id} pokemonName={pokemonName} />
    </>
  );
};

export default StatsPage;
