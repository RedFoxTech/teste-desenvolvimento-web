import { Route, Switch } from 'react-router'
import React from 'react'

import ListFavoritePokemonsPage from '../modules/pokemons/favorites/ListFavoritePokemonsPage'
import ListPokemonsPage from '../modules/pokemons/list/ListPokemonsPage'
import ShowPokemonPage from '../modules/pokemons/show/ShowPokemonPage'

const Routes = () => (
	<div className="page-wrapper">
		<Switch>
			<Route exact path="/" component={ListPokemonsPage} />
			<Route exact path="/pokemons/:id" component={ShowPokemonPage} />
			<Route exact path="/favoritos" component={ListFavoritePokemonsPage} />
		</Switch>
	</div>
)

export default Routes
