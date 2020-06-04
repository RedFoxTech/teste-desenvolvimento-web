import React from 'react';

import Header from '~/components/Header';
import { Wrapper } from './styles';

// eslint-disable-next-line react/prop-types
export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
