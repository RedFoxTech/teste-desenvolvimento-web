import React, { Component } from 'react';
import Main from 'Components/main';
import { Container } from 'react-bootstrap';

export default class Pokemon extends Component {
	render() {
		return (
			<Main>
				<Container>
					<h1> Tela de pokemon </h1>
				</Container>
			</Main>
		);
	}
}
