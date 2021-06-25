import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import db from './db.json';
import Pokemon from './components/pokemon/Pokemon';
import PokemonList from './components/pokemon/PokemonList';
import Container from './components/layout/Container';

const theme = db.theme;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Anton', sans-serif;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Router>
            <Switch>
              <Route exact path="/" component={PokemonList} />
              <Route exact path="/pokemon/:name" component={Pokemon} />
            </Switch>
          </Router>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
