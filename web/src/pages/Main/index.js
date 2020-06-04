import React from 'react';

import OptionsBar from '~/components/OptionsBar';
import PokemonsTable from '~/components/PokemonsTable';
import PageContainer from '~/components/PageContainer';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <OptionsBar />
      <PokemonsTable />
      <PageContainer />
    </Container>
  );
}

export default Main;
