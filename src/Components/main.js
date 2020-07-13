import React, { Component } from 'react';

import Header from 'Components/Header';
import Footer from 'Components/Footer';

export default class Main extends Component {
	render() {
		return (
			<>
				<Header />
				{this.props.children}
				<Footer />
			</>
		);
	}
}
