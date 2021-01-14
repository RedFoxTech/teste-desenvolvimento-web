import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
        <Router>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Router>
      </>
  );
}

export default App;
