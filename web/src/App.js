import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './styles/index.css';

import Routes from "./routes";
import CustomThemeProvider from './styles/theme';

function App() {
  return (
    <CustomThemeProvider>
      <ToastContainer />
      <Routes />
    </CustomThemeProvider>
  );
}

export default App;
