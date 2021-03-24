import { BrowserRouter } from "react-router-dom";
import Asidebar from "./components/Asidebar";
import { PokemonApiProvider } from "./contexts/pokemonApi";
import Routes from "./routes";
import { Content, GlobalStyle } from "./styles/GlobalStyle";

function App() {

  return (
    <div>

      <BrowserRouter>
        <PokemonApiProvider>
          <GlobalStyle />
          <Asidebar />
          <Content>
            <Routes />
          </Content>
        </PokemonApiProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;