import React from 'react';
import Header from './components/header/index.js'
import styled from 'styled-components'

const ResetDiv = styled.div `
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
`

function App() {
  return (
    <ResetDiv>
     <Header/>
    </ResetDiv>
  );
}

export default App;
