import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from 'Pages/Home';
import Pokemon from 'Pages/Pokemon';
// import Types from 'Pages/Types';
import Login from 'Pages/Login';
import IndexPokemons from 'Pages/Admin/Pokemon/index.js'; 
import Forms from 'Pages/Admin/Pokemon/Forms'; 
import Types from 'Pages/Admin/Types/index'; 
import TypesForm from 'Pages/Admin/Types/form'; 



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
					{this.props.token !== null || undefined ? (
						<>
							<Route
								path='/admin/pokemons'
								exact
								component={IndexPokemons}
							/>
							<Route
								path='/admin/pokemons/edit/:id'
								exact
								component={Forms}
							/>
							<Route
								path='/admin/pokemons/create/'
								exact
								component={Forms}
							/>
							<Route
								path='/admin/types/'
								exact
								component={Types}
							/>
							<Route
								path='/admin/types/edit/:id'
								exact
								component={TypesForm}
							/>
						</>
					) : (
						<> </>
					)}
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
