import React from 'react';
import { useParams } from 'react-router-dom';
import { Title } from 'reactbulma';
import { Buttons } from '../components';

const AttributesPage = () => {
  const { id, pokemonName } = useParams();

  return (
    <>
      <Title>Attributes</Title>
      <Buttons id={id} pokemonName={pokemonName} />
    </>
  );
};

export default AttributesPage;
