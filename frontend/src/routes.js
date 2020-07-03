import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Save from './pages/Save'
import Header from './components/Header'

export default function routes() {
  return (
    <Router>
      <Header/>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/save" exact component={Save}/>
          <Route path="/save/:id" exact component={Save}/>
        </Switch>
    </Router>
  )
}
