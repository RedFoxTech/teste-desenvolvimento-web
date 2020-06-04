import React from 'react';

import OptionsBar from '~/components/OptionsBar';
import PokemonsTable from '~/components/PokemonsTable';
import PageContainer from '~/components/PageContainer';

import { Container, Middle } from './styles';

function Main() {
  return (
    <Container>
      <Middle>
        <OptionsBar />
        <PokemonsTable />
        <PageContainer />
      </Middle>
    </Container>
  );
}

export default Main;
