import React, { Component } from 'react';

//style components
import { Link } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Heade } from './style';

//images
import logo from 'assets/images/pokemon-logo.png';

export default class Header extends Component {
	render() {
		return (
			<Heade className='pt-2 pb-5'>
				<Container>
					<Row className='justify-content-center'>
						<Col xs={12} sm={12} md={5} lg={4} xl={4}>
							<Link to="/">
								<Image src={logo} fluid />
							</Link>
						</Col>
					</Row>
				</Container>
			</Heade>
		);
	}
}
