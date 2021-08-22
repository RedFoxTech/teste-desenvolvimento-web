import { BrowserRouter, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Single } from './pages/Single';
import { Add } from './pages/Add';
import { Edit } from './pages/Edit';

function Routes(){
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/single/:id" exact component={Single} />
      <Route path="/add-pokemon" exact component={Add} />
      <Route path="/edit-pokemon/:id" exact component={Edit} />
    </BrowserRouter>
  )
}

// export default Routes;
export { Routes }