import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Route from './Route'; 

import Home from 'Pages/Home';
import Pokemon from 'Pages/Pokemon';
// import Types from 'Pages/Types';
import Login from 'Pages/Login';
import IndexPokemons from 'Pages/Admin/Pokemon/index.js'; 
import Forms from 'Pages/Admin/Pokemon/Forms'; 
import Types from 'Pages/Admin/Types/index'; 
import TypesForm from 'Pages/Admin/Types/form'; 
import Weathers from 'Pages/Admin/Weathers/index'; 
import WeathersForm from 'Pages/Admin/Weathers/form'; 



import { connect } from 'react-redux';

class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/pokemon/:name' exact component={Pokemon} />
					{/* <Route path='/type/:type' exact component={Types} /> */}

					<Route path='/login' exact component={Login} />

					<Route
						path='/admin'
						exact
						component={<Redirect to='/admin/pokemons' />}
						isPrivate
					/>
					<Route
						path='/admin/pokemons'
						exact
						component={IndexPokemons}
						isPrivate
					/>
					<Route
						path='/admin/pokemons/edit/:id'
						exact
						component={Forms}
						isPrivate
					/>
					<Route
						path='/admin/pokemons/create/'
						exact
						component={Forms}
						isPrivate
					/>
					<Route
						path='/admin/types/'
						exact
						component={Types}
						isPrivate
					/>
					<Route
						path='/admin/types/edit/:id'
						exact
						component={TypesForm}
						isPrivate
					/>
					<Route
						path='/admin/weather'
						exact
						component={Weathers}
						isPrivate
					/>

					<Route
						path='/admin/weather/edit/:id'
						exact
						component={WeathersForm}
						isPrivate
					/>
				</Switch>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = state => {
	return {
		token: state.auth.token,
	};
};

export default connect(mapStateToProps)(Routes);
