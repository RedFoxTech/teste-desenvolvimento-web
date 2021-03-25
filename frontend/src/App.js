import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Header from './components/header/Header';
import Routes from './routes/routes';
// import Footer from './components/footer/Footer';
import './App.css';

// import { AuthProvider } from './Context/AuthContext';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
