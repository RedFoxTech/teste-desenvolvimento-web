/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import notloaded from '~/assets/question-mark.png';

import api from '~/services/secondaryApi';

import { Container, Header, TypesContainer, StatsContainer } from './styles';

function Pokemon({ info }) {
  const [image, setImage] = useState('');

  useEffect(() => {
    async function loadPokemonImage() {
      try {
        const response = await api.get(`pokemon/${info.name.toLowerCase()}`);
        setImage(response.data.sprites.front_default);
      } catch (err) {
        setImage(notloaded);
      }
    }

    loadPokemonImage();
  }, [info.name]);

  return (
    <Container>
      <Header>
        <span>{info.name}</span>
        <span>STAT {info.stat_total}</span>
      </Header>

      <img src={image} alt="bulbasaur" />

      <TypesContainer>
        <span>Tipo 1: {info.type_1}</span>
        <span>Tipo 2: {info.type_2}</span>
      </TypesContainer>

      <StatsContainer>
        <span>
          ATK: {info.atk} DEF: {info.def} STA: {info.sta}
        </span>
      </StatsContainer>
    </Container>
  );
}

export default Pokemon;
