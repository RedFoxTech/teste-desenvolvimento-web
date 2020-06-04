import React from 'react';

import { Grid, Container } from './styles';

function PokemonSkeleton() {
  return (
    <Grid>
      <Container>
        <div />
        <div />
        <div />
        <div />
      </Container>
      <Container>
        <div />
        <div />
        <div />
        <div />
      </Container>
      <Container>
        <div />
        <div />
        <div />
        <div />
      </Container>
      <Container>
        <div />
        <div />
        <div />
        <div />
      </Container>
      <Container>
        <div />
        <div />
        <div />
        <div />
      </Container>
    </Grid>
  );
}

export default PokemonSkeleton;
