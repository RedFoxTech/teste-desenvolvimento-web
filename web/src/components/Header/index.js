import React from 'react';

import logo from '~/assets/pokehandler.png';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
}

export default Header;
