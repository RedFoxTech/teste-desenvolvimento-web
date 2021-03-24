import { BrowserRouter, useHistory, } from "react-router-dom";

import Header from "./components/Header";
import Asidebar from "./components/Asidebar";
import { PokemonApiProvider } from "./contexts/pokemonApi";
import Routes from "./routes";
import { Content, GlobalStyle } from "./styles/GlobalStyle";

function App() {

  return (
    <div>

      <BrowserRouter>
        <PokemonApiProvider>

          <Header />
          <GlobalStyle />
          <Content>
            <Asidebar />
            <Routes />
          </Content>
        </PokemonApiProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;