import './styles/index.css';

import Routes from "./routes";
import CustomThemeProvider from './styles/theme';

function App() {
  return (
    <CustomThemeProvider>
      <Routes />
    </CustomThemeProvider>
  );
}

export default App;
