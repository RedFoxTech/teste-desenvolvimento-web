import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// importe as paginas
import Home from './pages/Home/';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      {/* <Route path="/dev" exact /> */}
    </BrowserRouter>
  );
};

export default Routes;