import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Title, SubTitle, Container } from 'reactbulma';
import api from '../services/api';

const AttributesPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(async () => {
    const attributesDetails = await api.getAttributesById(id);
    setData(attributesDetails[0]);
  }, []);

  console.log(data);
  return (
    <Container>
      <Title>Attributes</Title>
      <SubTitle>Weather: {data.weather1}</SubTitle>
      {data.weather2 ? <SubTitle>Weather 2: {data.weather2}</SubTitle> : null}
      <SubTitle>Legendary: {data.legendary}</SubTitle>
      <SubTitle>Not Gettable: {data.notGettable}</SubTitle>
      <SubTitle>Aquireable: {data.aquireable}</SubTitle>
      <SubTitle>Spawns: {data.spawns}</SubTitle>
      <SubTitle>Regional: {data.regional}</SubTitle>
      <SubTitle>Raidable: {data.raidable}</SubTitle>
      <SubTitle>Hatchable: {data.hatchable}</SubTitle>
      <SubTitle>Shiny: {data.shiny}</SubTitle>
      <SubTitle>Nest: {data.nest}</SubTitle>
      <SubTitle>New Pokemon: {data.newPokemon}</SubTitle>
    </Container>
  );
};

export default AttributesPage;
