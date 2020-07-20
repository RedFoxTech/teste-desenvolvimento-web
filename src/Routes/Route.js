import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { store } from 'store';

export default function RouteWrapper({
	component: Component,
	isPrivate,
	...rest
}) {
	const { token } = store.getState().auth;
	if (!token && isPrivate) {
        return <Redirect to='/login' />;
	}

	if (token && !isPrivate) {
		return <Redirect to='/admin/pokemons' />;
	}

	return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
	isPrivate: PropTypes.bool,
	component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
		.isRequired,
};

RouteWrapper.defaultProps = {
	isPrivate: false,
};
