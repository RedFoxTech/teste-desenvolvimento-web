import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './components/Main'
import NewPokemon from './components/NewPokemon'


function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/newpokemon" component={NewPokemon} />
      </Switch>
    </BrowserRouter>
  )
}


export default App
