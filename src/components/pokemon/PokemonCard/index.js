/* eslint-disable react/prop-types */
import React from 'react';
import { Card, StyledLink, Header, Title, Id, Type, Stats } from './styles';

export default function PokemonCard({ id, name, image, type, HP, ATK, DEF }) {
  return (
    <StyledLink to={`pokemon/${name}`}>
      <Card>
        <Header>
          <Id>
            <p>{id}</p>
          </Id>
          <Title>{name}</Title>
          <Type type={type}>
            <p>Type: {type}</p>
          </Type>
        </Header>
        <img src={image} alt={name} />

        <Stats>
          <div>HP: {HP}</div>
          <div>ATK: {ATK}</div>
          <div>DEF: {DEF}</div>
        </Stats>
      </Card>
    </StyledLink>
  );
}
