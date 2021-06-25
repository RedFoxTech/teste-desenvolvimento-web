/* eslint-disable react/prop-types */
import React from 'react';
import { StyledContainer, Title } from './styles';

export default function Container({ children }) {
  return (
    <StyledContainer>
      <Title src="pokedex-logo.png" alt="logo" />
      {children}
    </StyledContainer>
  );
}
