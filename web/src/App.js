import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Add from './pages/add';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
        <Router>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route exact path='/add' exact component={Add}/>
          </Switch>
        </Router>
      </>
  );
}

export default App;
