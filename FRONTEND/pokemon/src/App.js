import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import './App.css'
import { PokemonList } from './pages/PokemonList'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className="content">
          <Route exact path="/" component={ PokemonList } />
        </div>
      </HashRouter>
    )
  }
}

export default App
