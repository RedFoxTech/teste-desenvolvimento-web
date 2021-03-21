import Header from "./components/Header";
import { PokemonApiProvider } from "./contexts/pokemonApi";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <div>

      <PokemonApiProvider>

        <Header />
        <GlobalStyle />
        <Home />

      </PokemonApiProvider>
    </div>
  );
}

export default App;