import React from 'react';

import Header from '~/components/Header';
import OptionsBar from '~/components/OptionsBar';
import PokemonsTable from '~/components/PokemonsTable';
import PageContainer from '~/components/PageContainer';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <Header />
      <OptionsBar />
      <PokemonsTable />
      <PageContainer />
    </Container>
  );
}

export default Main;
