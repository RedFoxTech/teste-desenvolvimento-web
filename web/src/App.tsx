import Header from "./components/Header";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <Header/>
      <GlobalStyle />
      <Home/>
    </div>
  );
}

export default App;