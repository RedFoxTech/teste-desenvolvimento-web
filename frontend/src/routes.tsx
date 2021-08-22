import { BrowserRouter, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Single } from './pages/Single';
import { Add } from './pages/Add';

function Routes(){
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/single/:id" exact component={Single} />
      <Route path="/add-pokemon" exact component={Add} />
    </BrowserRouter>
  )
}

// export default Routes;
export { Routes }