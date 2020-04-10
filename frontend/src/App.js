import React from 'react';
import Header from './Components/Header/Header';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import List from './Components/Pokemon/List';

function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
