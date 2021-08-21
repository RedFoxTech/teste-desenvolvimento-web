import { BrowserRouter, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

function Routes(){
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
    </BrowserRouter>
  )
}

// export default Routes;
export { Routes }