import { BrowserRouter, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Single } from './pages/Single';

function Routes(){
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/single/:id" exact component={Single} />
    </BrowserRouter>
  )
}

// export default Routes;
export { Routes }