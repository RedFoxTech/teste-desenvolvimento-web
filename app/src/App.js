import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './components/Main'
import NewPokemon from './components/NewPokemon'
import Edit from './components/Edit'

function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/newpokemon" component={NewPokemon} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  )
}


export default App
