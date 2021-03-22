import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { PokemonApiProvider } from "./contexts/pokemonApi";
import Routes from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <div>

      <BrowserRouter>
        <PokemonApiProvider>

          <Header />
          <GlobalStyle />
          <Routes />

        </PokemonApiProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;